import { motion } from "framer-motion";

export default function ModernSeismicLoader() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
            <div className="relative flex items-center justify-center">
                {/* Merkez Nokta */}
                <motion.div
                    className="h-5 w-5 rounded-full bg-red-500 shadow-lg"
                    animate={{
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Yayılan Sismik Halkalar */}
                {[0, 1, 2].map((i) => (
                    <motion.span
                        key={i}
                        className="absolute h-20 w-20 rounded-full border-2 border-red-300"
                        animate={{
                            scale: [0.3, 1.6],
                            opacity: [0.6, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.4,
                            ease: "easeOut",
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
