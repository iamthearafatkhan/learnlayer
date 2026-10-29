'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Map, BookOpen } from 'lucide-react';
import Logo from './Logo';

export default function Sidebar({
    roadmaps,
    modules,
}: {
    roadmaps: { slug: string; title: string }[];
    modules: { slug: string; title: string }[];
}) {
    const pathname = usePathname();

    return (
        <aside className="w-72 border-r border-gray-800 bg-[#111827] p-6 flex flex-col gap-8 flex-shrink-0 h-screen overflow-y-auto">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group mb-2 flex-shrink-0">
                <Logo size={42} />
                <div className="flex flex-col">
                    <span className="text-2xl font-serif font-bold tracking-wide text-[#F8FAFC]">
                        Learn<span className="text-[#D97706]">Layer</span>
                    </span>
                    <span className="text-[10px] text-gray-500 tracking-widest uppercase">Master Tech Skills</span>
                </div>
            </Link>

            {/* Roadmaps */}
            <section>
                <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3 flex items-center gap-2">
                    <Map size={14} /> Roadmaps
                </h3>
                <ul className="space-y-1">
                    {roadmaps.map(r => (
                        <li key={r.slug}>
                            <Link
                                href={`/roadmap/${r.slug}`}
                                className={`block px-3 py-2 rounded-lg text-sm transition ${pathname === `/roadmap/${r.slug}`
                                        ? 'bg-[#22C55E]/10 text-[#22C55E] font-medium'
                                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                                    }`}
                            >
                                {r.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Modules */}
            <section>
                <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3 flex items-center gap-2">
                    <BookOpen size={14} /> Modules
                </h3>
                <ul className="space-y-1">
                    {modules.map(m => (
                        <li key={m.slug}>
                            <Link
                                href={`/learn/${m.slug}`}
                                className={`block px-3 py-2 rounded-lg text-sm transition ${pathname.startsWith(`/learn/${m.slug}`)
                                        ? 'bg-[#38BDF8]/10 text-[#38BDF8] font-medium'
                                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                                    }`}
                            >
                                {m.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Footer (Pushed to bottom) */}
            <div className="mt-auto pt-6">
                <footer className="rounded-2xl bg-[#1F2937]/50 border border-gray-800 px-4 py-4 text-sm text-gray-400">
                    {/* Changed to always flex-col and centered */}
                    <div className="flex flex-col items-center justify-center gap-3 text-center">

                        {/* Text on top */}
                        <p className="text-xs leading-relaxed">
                            Built by <br />
                            <span className="font-medium text-white text-sm">Arafat Khan</span>
                        </p>

                        {/* Icons below */}
                        <div className="flex items-center justify-center gap-5">
                            {/* LinkedIn */}
                            <a
                                href="https://linkedin.com/in/iamthearafatkhan"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="text-gray-400 transition hover:text-white hover:-translate-y-0.5"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                                </svg>
                            </a>

                            {/* GitHub */}
                            <a
                                href="https://github.com/iamthearafatkhan"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="text-gray-400 transition hover:text-white hover:-translate-y-0.5"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.9 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A12 12 0 0 0 12 .3z" />
                                </svg>
                            </a>

                            {/* Personal site */}
                            <a
                                href="https://arafatkhan.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="arafatkhan.vercel.app"
                                className="transition hover:opacity-80 hover:-translate-y-0.5"
                            >
                                <img src="/ak-logo.png" alt="AK" width="18" height="18" className="rounded grayscale hover:grayscale-0 transition-all" />
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </aside>
    );
}