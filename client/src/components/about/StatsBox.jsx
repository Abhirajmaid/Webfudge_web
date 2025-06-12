import { motion } from "framer-motion";

const StatsBox = ({ number, label, icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-dark-light p-8 rounded-2xl text-center"
    >
      {icon && <div className="text-4xl text-primary mb-4">{icon}</div>}
      <h3 className="text-4xl font-bold text-primary mb-2">{number}</h3>
      <p className="font-Poppins">{label}</p>
    </motion.div>
  );
};

export default StatsBox;
