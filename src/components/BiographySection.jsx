const defaultSkillTags = ["React", "AWS", "Figma", "Firebase", "Tailwind"];

export default function BiographySection({ site, skillTags = defaultSkillTags }) {
    const biographyLabel = site?.biographyLabel || "Biography";
    const biographyHeading = site?.biographyHeading || "What I Do";
    const biographyIntro =
        site?.biographyIntro ||
        "I build intelligent systems using machine learning and data-driven approaches. Passionate about solving real-world problems through AI, creating scalable and impactful digital solutions.";
    const locationLabel = site?.locationLabel || "Kolkata, India";
    const statusLabel = site?.statusLabel || "Open to Internships & Opportunities";
    const biographyImageUrl = site?.biographyImageUrl || "/public/Susmita.JPG";

    return (
        <section
            id="about"
            className="border-t border-zinc-950/6 pb-24 pt-16 sm:pt-20 lg:pb-28 lg:pt-24"
        >
            <div className="mx-auto max-w-[1320px]">
                <div className="flex items-center gap-4">
                    <span className="h-px w-11 bg-[#c8cad4]" />
                    <span className="text-base font-black uppercase tracking-[0.24em] text-[#9ea3b2] sm:text-[1.05rem]">
                        {biographyLabel}
                    </span>
                </div>

                <h2 className="mt-5 text-[1.8rem] font-black leading-[0.94] tracking-[-0.06em] text-zinc-950 sm:text-[2.55rem] md:text-[3.45rem]">
                    {biographyHeading.split(" ")[0] || "What"}{" "}
                    <span className="text-[#a8acb9]">
                        {biographyHeading.split(" ").slice(1).join(" ") || "I Do"}
                    </span>
                </h2>

                <div className="mt-8 grid gap-10 sm:mt-12 lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-16 xl:mt-16 xl:grid-cols-[470px_minmax(0,1fr)]">
                    
                    {/* 🔥 LEFT IMAGE CARD */}
                    <div className="max-w-[470px]">
                        
                        {/* Mouse Follow Glow */}
                        <div
                            className="group relative rounded-[26px] p-[1.5px]"
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
                                e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
                            }}
                        >
                            {/* Glow Layer */}
                            <div className="pointer-events-none absolute inset-0 rounded-[26px] bg-[radial-gradient(circle_at_var(--x,_50%)_var(--y,_50%),rgba(99,102,241,0.8),rgba(139,92,246,0.6),transparent_60%)] opacity-0 transition duration-300 group-hover:opacity-100 blur-[6px]" />

                            {/* Card */}
                            <div className="relative overflow-hidden rounded-[24px] border border-zinc-950/8 bg-[#141923] shadow-[0_18px_40px_rgba(15,15,16,0.06)]">
                                
                                {/* IMAGE */}
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    
                                    <img
                                        src={biographyImageUrl}
                                        alt={site?.fullName || "Profile picture"}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_60%,rgba(0,0,0,0.25)_100%)]" />
                                
                                </div>
                            </div>
                        </div>

                    
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="flex min-h-full flex-col">
                        <div className="text-[0.9rem] font-black uppercase tracking-[0.3em] text-[#a3a6b3]">
                            <span className="mr-3 inline-block align-middle text-zinc-950">•</span>
                            AI/ML ENTHUSIAST · PROBLEM SOLVER
                        </div>

                        <h3 className="mt-6 max-w-[900px] text-[1.35rem] font-black leading-[1.12] tracking-[-0.05em] text-zinc-950 sm:mt-8 sm:text-[1.95rem] md:text-[2.35rem] xl:text-[3.2rem]">
                            Building intelligent digital products with a focus on{" "}
                            <span className="text-[#aaacb8]">machine learning</span> and scalable AI systems.
                        </h3>

                        <p className="mt-7 max-w-[820px] text-[0.98rem] leading-[1.72] text-[#6f7280] sm:text-[1.08rem]">
                            {biographyIntro}
                        </p>

                        <div className="mt-12 border-t border-zinc-950/8 py-8">
                            <div className="grid gap-8 sm:grid-cols-2 lg:max-w-[540px]">
                                <div>
                                    <div className="text-[0.74rem] font-black uppercase tracking-[0.26em] text-[#b0b5c3]">
                                        Location
                                    </div>
                                    <div className="mt-2 text-[0.95rem] font-bold text-[#8b91a0] sm:text-[1.04rem]">
                                        {locationLabel}
                                    </div>
                                </div>

                                <div>
                                    <div className="text-[0.74rem] font-black uppercase tracking-[0.26em] text-[#b0b5c3]">
                                        Status
                                    </div>
                                    <div className="mt-2 text-[0.95rem] font-bold text-[#8b91a0] sm:text-[1.04rem]">
                                        {statusLabel}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto border-t border-zinc-950/8 pt-10">
                            <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
                                <div className="flex flex-wrap gap-3">
                                    {skillTags.filter(Boolean).map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-[10px] border border-zinc-950/8 bg-white/62 px-5 py-2.5 text-[0.86rem] font-black uppercase tracking-[0.08em] text-[#5b616f] shadow-[0_6px_18px_rgba(15,15,16,0.03)]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href="#connect"
                                    className="group inline-flex w-fit items-center gap-4 rounded-[14px] border border-zinc-950/10 bg-white/72 px-6 py-4 text-[0.92rem] font-black uppercase tracking-[0.24em] text-zinc-950 shadow-[0_10px_24px_rgba(15,15,16,0.03)] transition duration-300 hover:border-zinc-950/18 hover:bg-white"
                                >
                                    <span className="leading-[1.4]">
                                        Get In
                                        <br />
                                        Touch
                                    </span>
                                    <span
                                        aria-hidden="true"
                                        className="text-[1.1rem] transition duration-300 group-hover:translate-x-1"
                                    >
                                        →
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
