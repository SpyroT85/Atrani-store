import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface MotionSectionProps {
  children: ReactNode;
  direction?: "left" | "right";
  amount?: number;
  duration?: number;
}

const MotionSection = ({
  children,
  direction = "left",
  amount = 0.2,
  duration = 1,
}: MotionSectionProps) => {
  const initial = direction === "left"
    ? { x: -100, opacity: 0 }
    : { x: 100, opacity: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration }}
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
};

export default MotionSection;
