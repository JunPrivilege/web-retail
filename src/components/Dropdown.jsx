/* eslint-disable react/prop-types */
import { Dropdown } from "primereact/dropdown";

function DropdownOption({ title, ...props }) {
  return (
    <Dropdown
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
      placeholder={title}
      {...props}
      itemTemplate={(option) => (
        <div className="bg-white px-3 py-2 border-b hover:bg-black hover:text-white">{option.label}</div>
      )}
    />
  );
}

export default DropdownOption;
