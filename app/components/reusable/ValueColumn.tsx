// import { motion } from "framer-motion";
import * as motion from "motion/react-client";

interface ValueColumnProps {
  number: number;
  heading: string;
  text: string;
  delay?: number;
  className?: string;
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function ValueColumn({
  number,
  heading,
  text,
  delay = 0,
  className = "",
}: ValueColumnProps) {
  return (
    <motion.div
      className={`value-column flex items-start gap-4 pb-8 pr-2 pl-2 md:w-1/2 w-full ${className}`}
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <div className="value-column__number flex-shrink-0">
        <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
          <span className="text-3xl font-bold text-white">{number}</span>
        </div>
      </div>
      <div className="value-column__content">
        <h3 className="text-xl font-pontiac-black text-accent-secondary">
          {heading}
        </h3>
        <p className="text-white leading-relaxed">{text}</p>
      </div>
    </motion.div>
  );
}
