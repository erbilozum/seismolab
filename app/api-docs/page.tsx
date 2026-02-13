import { getApiDocs } from '@/lib/swagger';
import SwaggerComponent from "@/components/ui/SwaggerComponent";

export default async function IndexPage() {
    // spec verisini alırken Record tipinde olduğunu belirtiyoruz
    const spec = await getApiDocs() as Record<string, unknown>;

    return (
        <div className="min-h-screen pb-20 ">
            <div className="max-w-6xl mx-auto pt-10 px-4">
                <div className="mb-8 flex items-center justify-between border-b border-white/5 pb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-white tracking-tight">
                            API <span className="text-emerald-500">DOCS</span>
                        </h1>
                        <p className="text-neutral-500 text-xs mt-1 font-mono uppercase tracking-widest">
                            v1.0.4 • Stable Release
                        </p>
                    </div>
                    <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500 text-[10px] font-bold">
                        LIVE PRODUCTION
                    </div>
                </div>

                {/* Artık TypeScript 'spec' içeriğinin ne olduğunu biliyor */}
                <SwaggerComponent spec={spec} />
            </div>
        </div>
    );
}