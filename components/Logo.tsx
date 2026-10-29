'use client';
import { motion } from 'motion/react';

export default function Logo({ size = 40 }: { size?: number }) {
    return (
        <motion.svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial="hidden"
            animate="visible"
            whileHover="hover"
        >
            {/* 1. THE BOOK */}
            <motion.g
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } }
                }}
            >
                {/* Left Page */}
                <path d="M5 80 Q25 70 50 80 L50 95 Q25 85 5 95 Z" fill="#1E3A8A" />
                {/* Right Page */}
                <path d="M95 80 Q75 70 50 80 L50 95 Q75 85 95 95 Z" fill="#1E3A8A" />
                {/* Book Spine Center Line */}
                <line x1="50" y1="80" x2="50" y2="95" stroke="#0F172A" strokeWidth="1.5" />
            </motion.g>

            {/* 2. THE TREE TRUNK */}
            <motion.path
                d="M50 80 L50 50 M50 65 L40 55 M50 60 L60 50 M50 50 L45 40 M50 50 L55 40"
                stroke="#78350F"
                strokeWidth="4"
                strokeLinecap="round"
                variants={{
                    hidden: { pathLength: 0, opacity: 0 },
                    visible: { pathLength: 1, opacity: 1, transition: { duration: 0.8, delay: 0.3 } }
                }}
            />

            {/* 3. THE LEAVES */}
            <motion.g
                variants={{
                    hidden: { opacity: 1 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.8 } }
                }}
            >
                {[
                    { cx: 40, cy: 55, r: 8 }, { cx: 60, cy: 50, r: 10 },
                    { cx: 45, cy: 40, r: 9 }, { cx: 55, cy: 40, r: 9 },
                    { cx: 50, cy: 30, r: 12 }, { cx: 35, cy: 45, r: 7 },
                    { cx: 65, cy: 45, r: 7 }
                ].map((leaf, i) => (
                    <motion.circle
                        key={i}
                        cx={leaf.cx}
                        cy={leaf.cy}
                        r={leaf.r}
                        fill={i % 2 === 0 ? "#22C55E" : "#16A34A"}
                        variants={{
                            hidden: { scale: 0 },
                            visible: { scale: 1, transition: { type: "spring" } },
                            hover: { y: -3, transition: { repeat: Infinity, repeatType: "reverse", duration: 1 } }
                        }}
                    />
                ))}
            </motion.g>
        </motion.svg>
    );
}