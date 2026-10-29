'use client';
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export function CodeBlock({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        // Extract text content from the pre element
        const code = (props as any).node?.children[0]?.children[0]?.value || '';
        if (code) {
            navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="relative group my-6 not-prose rounded-xl overflow-hidden border border-gray-800">
            <div className="flex items-center justify-between px-4 py-2 bg-[#1F2937] border-b border-gray-800">
                <span className="text-xs text-gray-400 font-mono">Code Example</span>
                <button
                    onClick={handleCopy}
                    className="text-gray-400 hover:text-white transition flex items-center gap-1 text-xs"
                >
                    {copied ? <Check size={14} className="text-[#22C55E]" /> : <Copy size={14} />}
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>
            <pre {...props} className="p-4 overflow-x-auto bg-[#0B1120] text-sm text-[#22C55E] m-0">
                {children}
            </pre>
        </div>
    );
}