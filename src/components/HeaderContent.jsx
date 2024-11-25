/* eslint-disable react/prop-types */
function HeaderContent({ title, children }) {
  return (
    <>
      <p className="flex items-center flex-col py-7">
        <h1 className="pt-16 text-3xl font-bold">{title}</h1>
        <hr className="border-t-[5px] border-gray-300 my-4 w-28 rounded items-center" />
        <p className="text-stone-400 w-1/2 text-center items-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy
          text.
        </p>
      </p>
      {children}
    </>
  );
}

export default HeaderContent;
