import { motion } from "framer-motion";

const PulsingIcon = ({ size }: { size: number }) => {
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Dışa yayılan ve şeffaflaşan büyük halka */}
      <motion.div
        className="absolute rounded-full bg-red-500/40"
        initial={{ width: "30%", height: "30%", opacity: 0.8 }}
        animate={{
          width: "140%",
          height: "140%",
          opacity: 0,
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

      {/* İkincil orta halka (daha tok bir görünüm için) */}
      <motion.div
        className="absolute rounded-full bg-red-600/30"
        initial={{ width: "20%", height: "20%", opacity: 0.6 }}
        animate={{
          width: "100%",
          height: "100%",
          opacity: 0,
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.5,
        }}
      />

      {/* Merkezdeki sabit nokta */}
      <div
        className="relative z-10 rounded-full bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)]"
        style={{ width: "40%", height: "40%" }}
      />
    </div>
  );
};