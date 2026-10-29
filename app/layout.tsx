import './globals.css';
import Sidebar from '@/components/Sidebar';
import { getAllRoadmapMeta, getAllModules } from '@/lib/content'; // <-- Import new function
import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
    title: 'LearnLayer | Master Tech Skills',
    description: 'Interactive, structured roadmaps for Data Science, AI, and Web Development.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const roadmaps = getAllRoadmapMeta(); // <-- Get titles
    const modules = getAllModules();

    return (
        <html lang="en" className="dark" suppressHydrationWarning>
            <body className={`${outfit.className} bg-[#0B1120] text-[#F9FAFB] font-sans antialiased selection:bg-[#22C55E] selection:text-white`}>
                <div className="flex min-h-screen">
                    <Sidebar roadmaps={roadmaps} modules={modules.map(m => ({ slug: m.slug, title: m.title }))} />
                    <main className="flex-1 p-8 overflow-y-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-[#0B1120] to-[#0B1120]">
                        <div className="max-w-6xl mx-auto">{children}</div>
                    </main>
                </div>
            </body>
        </html>
    );
}