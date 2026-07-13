import { useEffect, useState } from "react";

export default function HeroSection({ site }) {
    const firstName = site?.ownerFirstName || "Susmita";
    const lastName = site?.ownerLastName || "Hazra";

    const roles = [
        "AI ENGINEER",
        "MACHINE LEARNING DEVELOPER"
    ];

    const availabilityText =
        site?.availabilityText || "AVAILABLE FOR INTERNSHIPS & PROJECTS";

    const heroDescription =
        site?.heroDescription ||
        "Crafting intelligent systems and data-driven solutions with a passion for artificial intelligence, machine learning, and scalable innovation.";

    const collaborationUrl = site?.collaborationUrl || "#connect";
    const resumeUrl = site?.resumeUrl || "/Susmita_Resume.pdf";

    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [typedText, setTypedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = roles[currentRoleIndex];
        const speed = isDeleting ? 35 : 55;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                const next = currentText.slice(0, typedText.length + 1);
                setTypedText(next);

                if (next === currentText) {
                    setTimeout(() => setIsDeleting(true), 900);
                }
            } else {
                const next = currentText.slice(0, typedText.length - 1);
                setTypedText(next);

                if (next === "") {
                    setIsDeleting(false);
                    setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [typedText, isDeleting, currentRoleIndex]);

    return (
        <section className="w-full pr-0 xl:pr-24">

            {/* Availability */}
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-300 dark:border-white/20 bg-white dark:bg-white/5 px-3 py-2 shadow-sm sm:gap-3 sm:px-5 sm:py-3">
                <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 sm:h-3 sm:w-3" />
                </span>
                <span className="text-[0.65rem] font-extrabold uppercase tracking-[0.2em] text-zinc-700 dark:text-zinc-300 sm:text-[0.78rem] sm:tracking-[0.26em] md:text-[0.86rem]">
                    {availabilityText}
                </span>
            </div>

            {/* Name */}
            <div className="mt-8 uppercase leading-[0.82] tracking-[-0.085em] sm:mt-14">
                <div className="text-[2.6rem] font-black text-black dark:text-white sm:text-[3.9rem] md:text-[5.2rem] lg:text-[6.5rem] xl:text-[7.8rem] 2xl:text-[8.5rem]">
                    {firstName}
                </div>

                <div className="text-[2.6rem] font-black text-zinc-500 dark:text-zinc-400 sm:text-[3.9rem] md:text-[5.2rem] lg:text-[6.5rem] xl:text-[7.8rem] 2xl:text-[8.5rem]">
                    {lastName}
                </div>
            </div>

            {/* ROLE + DESCRIPTION */}
            <div className="mt-8 grid max-w-[1060px] grid-cols-1 gap-8 sm:mt-10 sm:gap-10 lg:grid-cols-[minmax(320px,560px)_minmax(280px,430px)] lg:items-start lg:gap-16">

                <div className="flex items-center gap-4 sm:gap-6">
                    <span className="block h-[2px] w-10 shrink-0 bg-black dark:bg-white sm:w-16" />

                    <h2 className="text-[0.85rem] font-mono font-black uppercase tracking-[0.2em] text-black dark:text-white sm:text-[1rem] sm:tracking-[0.28em] md:text-[1.2rem]">
                        {typedText}
                        {typedText && (
                            <span className="ml-1 animate-[blink_1s_step-end_infinite]">_</span>
                        )}
                    </h2>
                </div>

                <p className="max-w-[440px] border-l-0 pl-0 text-[0.9rem] leading-[1.72] text-zinc-700 dark:text-zinc-400 sm:text-[0.98rem] lg:border-l lg:pl-8 xl:text-[1.08rem]">
                    {heroDescription}
                </p>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:mt-16 sm:flex-row sm:flex-wrap sm:gap-5">

                <a
                    href={collaborationUrl}
                    className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full bg-black text-white dark:bg-white dark:text-black px-7 text-[0.85rem] font-black uppercase tracking-[0.14em] transition duration-300 hover:scale-[1.03] sm:min-h-[72px] sm:min-w-[250px] sm:px-9 sm:text-[0.95rem] sm:tracking-[0.18em]"
                >
                    Collaborate →
                </a>

                <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full border-2 border-black dark:border-white bg-transparent px-7 text-[0.85rem] font-black uppercase tracking-[0.14em] text-black dark:text-white transition duration-300 hover:scale-[1.03] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black sm:min-h-[72px] sm:min-w-[250px] sm:px-9 sm:text-[0.95rem] sm:tracking-[0.18em]"
                >
                    Resume ↓
                </a>
            </div>

            <style>{`
                @keyframes blink {
                    50% {
                        opacity: 0;
                    }
                }
            `}</style>

        </section>
    );
}
