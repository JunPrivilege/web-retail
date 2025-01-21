import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import CartItem from "./CartItem";
import DropdownOption from "./Dropdown";
import Button from "./Button";
import { formatter } from "../data/formatter";
import LoadingSpinner from "./LoadingSpinner";

function CartTable() {
  const totalPrice = useSelector((state) => state.cart.totalAmount);
  const items = useSelector((state) => state.cart.items);

  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [couriers] = useState([
    { label: "JNE", value: "jne" },
    { label: "TIKI", value: "tiki" },
    { label: "POS Indonesia", value: "pos" },
  ]);
  const [deliveryTypes, setDeliveryTypes] = useState([]);

  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCourier, setSelectedCourier] = useState("");
  const [selectedDeliveryType, setSelectedDeliveryType] = useState("");
  const [weight, setWeight] = useState("");
  const [shippingCost, setShippingCost] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch provinces from RajaOngkir API
  useEffect(() => {
    async function fetchProvinces() {
      try {
        const response = await fetch("http://localhost:4000/api/province");
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();

        setProvinces(
          data.rajaongkir.results.map((province) => ({
            label: province.province,
            value: province.province_id,
          }))
        );
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    }
    fetchProvinces();
  }, []);

  // Fetch cities based on selected province
  useEffect(() => {
    if (selectedProvince) {
      const fetchCities = async () => {
        try {
          const response = await fetch(
            `http://localhost:4000/api/city?province=${selectedProvince}`
          );
          if (!response.ok)
            throw new Error(`HTTP error! status: ${response.status}`);

          const data = await response.json();
          setCities(
            data.rajaongkir.results.map((city) => ({
              label: city.city_name,
              value: city.city_id,
            }))
          );
        } catch (error) {
          console.error("Error fetching cities:", error);
        }
      };
      fetchCities();
    } else {
      setCities([]);
      setSelectedCity("");
    }
  }, [selectedProvince]);

  // Fetch delivery types based on selected courier
  useEffect(() => {
    if (selectedCourier && selectedCity) {
      const fetchDeliveryTypes = async () => {
        try {
          const response = await fetch(`http://localhost:4000/api/cost`, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
              origin: "23",
              destination: selectedCity,
              weight: weight || "1000",
              courier: selectedCourier,
            }),
          });

          if (!response.ok)
            throw new Error(`HTTP error! status: ${response.status}`);

          const data = await response.json();
          const services = data.rajaongkir.results[0].costs;
          setDeliveryTypes(
            services.map((service) => ({
              label: `${service.service} - Rp${service.cost[0].value}`,
              value: service.service,
            }))
          );
        } catch (error) {
          console.error("Error fetching delivery types:", error);
        }
      };
      fetchDeliveryTypes();
    } else {
      setDeliveryTypes([]);
      setSelectedDeliveryType("");
    }
  }, [selectedCourier, selectedCity, weight]);

  // Handle form submission to get final shipping cost
  const handleSubmit = async () => {
    if (
      selectedProvince &&
      selectedCity &&
      selectedCourier &&
      selectedDeliveryType &&
      weight
    ) {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:4000/api/cost`, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            origin: "23",
            destination: selectedCity,
            weight: weight,
            courier: selectedCourier,
          }),
        });

        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        const service = data.rajaongkir.results[0].costs.find(
          (cost) => cost.service === selectedDeliveryType
        );
        setShippingCost(service ? service.cost[0].value : undefined);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching shipping cost:", error);
      }
    } else {
      alert("Please complete all fields!");
    }
  };

  const IDRtoUSD = 1 / 15844;

  const shippingCostInUSD = shippingCost * IDRtoUSD;

  return (
    <div className="lg:flex">
      <CartItem />

      <div className="cart-table lg:w-1/3 p-4 border bg-white">
        {items.length > 0 && (
          <div className="space-y-4 mb-10">
            <DropdownOption
              title="Select a Province"
              options={provinces}
              value={selectedProvince}
              onChange={(e) => setSelectedProvince(e.value)}
            />
            <DropdownOption
              title="Select a City"
              options={cities}
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.value)}
              loading={!selectedProvince}
            />
            <DropdownOption
              title="Select a Courier"
              options={couriers}
              value={selectedCourier}
              onChange={(e) => setSelectedCourier(e.value)}
            />
            <input
              type="number"
              placeholder="Weight (Gram)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
            />
            <DropdownOption
              title="Select Delivery Type"
              options={deliveryTypes}
              value={selectedDeliveryType}
              onChange={(e) => setSelectedDeliveryType(e.value)}
              loading={!selectedCourier || !weight}
            />
              <Button
                title={loading ? <LoadingSpinner /> : "Submit"}
                onClick={handleSubmit}
                disabled={loading}
                className="px-4 py-2 bg-black text-white font-bold w-full rounded-bl-xl rounded-br-xl"
              />
          </div>
        )}

        <h3 className="text-lg font-semibold">
          Do you have a voucher?
          <span className="text-stone-500 ml-1 text-sm font-light">
            (Optional)
          </span>
        </h3>
        <div className="mt-4 flex flex-wrap">
          <input
            type="text"
            placeholder="Enter the code"
            className="flex-1 min-w-0 px-4 py-2 border border-stone-400 focus:outline-none"
          />
          <Button title="Redeem" className="px-4 py-2 bg-black text-white font-bold"/>
        </div>
        <div className="mt-4">
          <p className="flex justify-between">
            <span>Subtotal</span>
            <span>{formatter.format(totalPrice)}</span>
          </p>
          {shippingCost && (
            <p className="flex justify-between text-stone-500 text-sm font-light">
              <span>Shipping</span>
              {formatter.format(shippingCostInUSD)}
            </p>
          )}
          <p className="flex justify-between mt-5 font-semibold">
            <span>
              Total
              <span className="text-stone-500 ml-1 text-sm font-light">
                (VAT included.)
              </span>
            </span>
            <span>{formatter.format(totalPrice + shippingCostInUSD)}</span>
          </p>
        </div>
        <Button title="Safe to checkout" className="w-full mt-4 py-2 bg-black text-white font-semibold" />
      </div>
    </div>
  );
}

export default CartTable;
