import Link from "next/link";
import { motion } from "framer-motion";
const Model = ({ visible, onClose, url }) => {
  if (!visible) return null;
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-gray  bg-opacity-25 backdrop-blur-sm flex flex-col items-center justify-center z-[99] "
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          type: "tween",
        }}
        className="md:p-[90px] p-7 bg-[#161616] rounded-2xl flex flex-col items-center justify-center relative md:w-[60vw] w-[80%] md:gap-[60px] gap-[30px] "
      >
        <button
          className="btn absolute top-4 md:right-4 right-[42%] !text-white"
          onClick={onClose}
        >
          X
        </button>
        <h1 className="md:!text-[4.2vw] text-[7vw] text-white tracking-tight p-0 text-center md:leading-[90px] mt-[40px] ">
          Everything is good! feel free to approach us!
        </h1>
        <p className=" md:text-2xl text-base font-Poppins tracking-wider text-center !text-white ">
          Whether you're into long-term collaboration or need a quote for a big
          project, we have the perfect plan to suit your needs.
        </p>
        <div className="flex items-center gap-6">
          <Link href="/contact-us" className=" !opacity-100 ">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className=" font-[BelfastMedium] text-sm !rounded-3xl font-bold md:text-inherit btn md:w-fit shadow-md bg-white hover:bg-primary dark:text-black text-black hover:dark:text-white hover:text-white !px-7 !py-4 text-[1.2vw]  "
            >
              Write to Us!
            </motion.button>
          </Link>
          <Link className="opacity-100" href="/quote">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className=" font-[BelfastMedium] text-sm !rounded-3xl font-bold md:text-inherit btn md:w-fit shadow-md bg-white hover:bg-primary dark:text-black text-black hover:dark:text-white hover:text-white !px-7 !py-4 text-[1.2vw]  "
            >
              Get a quote!
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Model;
