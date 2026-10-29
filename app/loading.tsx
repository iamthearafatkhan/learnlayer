'use client';
import { motion } from 'motion/react';

export default function Loading() {
    return (
        <div className="fixed inset-0 bg-[#0B1120] z-50 flex flex-col items-center justify-center">
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
                className="w-16 h-16 border-4 border-t-[#22C55E] border-r-[#38BDF8] border-b-gray-800 border-l-gray-800 rounded-full"
            />
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-gray-400 font-medium tracking-widest uppercase text-sm"
            >
                Loading Layer...
            </motion.p>
        </div>
    );
}