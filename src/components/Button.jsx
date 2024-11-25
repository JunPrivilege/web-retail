/* eslint-disable react/prop-types */
function Button({ title, ...props }) {
  return (
    <button
      className="px-5 py-3 bg-black text-white font-bold rounded-sm w-48 hover:bg-stone-800"
      {...props}
    >
      {title}
    </button>
  );
}

export default Button;
