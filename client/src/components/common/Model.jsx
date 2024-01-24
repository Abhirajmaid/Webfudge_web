const Model = ({ visible, onClose, url }) => {
  if (!visible) return null;
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-gray  bg-opacity-25 backdrop-blur-sm flex flex-col items-center justify-center z-[99] "
    >
      <div className="p-[90px] bg-[#161616] rounded-2xl flex flex-col items-center justify-center relative w-[60vw] gap-[60px] ">
        <button className="btn absolute top-4 right-4" onClick={onClose}>
          X
        </button>
        <h1 className="!text-[4.2vw] text-white tracking-tight p-0 text-center leading-[90px]  ">
          Everything is good! feel free to approach us!
        </h1>
        <p className=" text-2xl font-Poppins tracking-wider text-center !text-white ">
          Whether you're into long-term collaboration or need a quote for a big
          project, we have the perfect plan to suit your needs.
        </p>
        <div className="flex items-center gap-6">
          <button className=" font-[BelfastMedium] text-sm !rounded-3xl font-bold md:text-inherit btn md:w-fit shadow-md bg-white hover:bg-primary dark:text-black text-black hover:dark:text-white hover:text-white !px-7 !py-4 text-[1.2vw]  ">
            Write to Us!
          </button>
          <button className=" font-[BelfastMedium] text-sm !rounded-3xl font-bold md:text-inherit btn md:w-fit shadow-md bg-white hover:bg-primary dark:text-black text-black hover:dark:text-white hover:text-white !px-7 !py-4 text-[1.2vw]  ">
            Get a quote!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Model;
