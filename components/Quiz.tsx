'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle } from 'lucide-react';

type Option = { text: string; isCorrect: boolean };

export function Quiz({
    question,
    options,
    explanation
}: {
    question: string;
    options: Option[];
    explanation: string
}) {
    const [selected, setSelected] = useState<number | null>(null);

    return (
        <div className="my-8 border border-gray-700 rounded-2xl p-6 bg-[#111827] not-prose shadow-lg">
            <h4 className="text-lg font-bold text-white mb-4">{question}</h4>
            <div className="space-y-3">
                {options.map((opt, index) => {
                    const isSelected = selected === index;
                    const showCorrect = selected !== null && opt.isCorrect;
                    const showWrong = isSelected && !opt.isCorrect;

                    return (
                        <button
                            key={index}
                            onClick={() => setSelected(index)}
                            disabled={selected !== null}
                            className={`w-full text-left p-4 rounded-xl border-2 transition-all flex justify-between items-center ${showCorrect
                                    ? 'border-[#22C55E] bg-[#22C55E]/10'
                                    : showWrong
                                        ? 'border-red-500 bg-red-500/10'
                                        : isSelected
                                            ? 'border-[#38BDF8] bg-[#38BDF8]/10'
                                            : 'border-gray-700 bg-[#0B1120] hover:border-gray-500'
                                }`}
                        >
                            <span className="text-gray-200">{opt.text}</span>
                            {showCorrect && <CheckCircle2 className="text-[#22C55E]" size={20} />}
                            {showWrong && <XCircle className="text-red-500" size={20} />}
                        </button>
                    );
                })}
            </div>

            <AnimatePresence>
                {selected !== null && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-4 pt-4 border-t border-gray-700"
                    >
                        <p className="text-sm text-gray-300">
                            <strong className="text-white">Explanation:</strong> {explanation}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}