import PromotionalBannerIMG from "../assets/promotional-banner.jpeg";

function PromotionalBanner() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center bg-white shadow-sm shadow-black">
        <div className="lg:w-1/2 text-left p-6">
          <h2 className="text-3xl font-bold mb-4">Promotional Banner</h2>
          <p className="text-stone-500">
            Lorem Ipsum is simply dummy text of the printing and <br />
            typesetting industry. Lorem Ipsum has been the <br />
            industry&apos;s standard dummy text.
          </p>
        </div>
        <div className="lg:w-1/2 mt-6 lg:mt-0">
          <img
            src={PromotionalBannerIMG}
            alt="Promotional Banner"
            className="w-full h-48 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default PromotionalBanner;
