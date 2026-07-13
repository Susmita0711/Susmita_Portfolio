const defaultExperiences = [
    {
        duration: "Nov 2025 — Jan 2026",
        location: "Remote",
        company: "HEPROAI",
        role: "Cloud Engineer",
        points: [
            "Architected scalable AWS environments for high-availability applications.",
            "Automated security via IAM protocols and real-time compliance checks.",
            "Built a React component library, cutting internal UI development time by 25%.",
        ],
        tools: ["AWS", "IAM", "React.js", "MongoDB", "+3 More"],
    },
    {
        duration: "June 2024 — Aug 2024",
        location: "Navi Mumbai, India",
        company: "PINNACLE INFOTECH",
        role: "Cloud Engineer",
        points: [
            "Deployed enterprise infrastructure using CloudFormation and VPC networking.",
            "Boosted deployment velocity by 50% via S3 and Elastic Beanstalk optimization.",
            "Reduced support overhead by 40% through automated network subnetting.",
        ],
        tools: ["CloudFormation", "VPC", "S3", "Subnets", "+5 More"],
    },
];

function ExperienceCard({ experience }) {
    const points = Array.isArray(experience.points)
        ? experience.points
        : Array.isArray(experience.highlights)
          ? experience.highlights
          : typeof experience.points === "string" && experience.points.trim()
            ? [experience.points]
            : [];

    const tools = Array.isArray(experience.tools)
        ? experience.tools
        : typeof experience.tools === "string" && experience.tools.trim()
          ? [experience.tools]
          : [];

    return (
        <article className="border border-zinc-950/6 bg-white/28 px-6 py-8 shadow-[0_10px_30px_rgba(15,15,16,0.03)] sm:px-8 lg:px-10 lg:py-12">
            <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14">
                <div className="border-b border-zinc-950/6 pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-12">
                    <div>
                        <div className="text-[0.8rem] font-black uppercase tracking-[0.26em] text-[#a3a9b7]">
                            Duration
                        </div>
                        <div className="mt-2 text-[1.2rem] font-bold tracking-[-0.03em] text-zinc-950 sm:text-[1.35rem]">
                            {experience.duration}
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="text-[0.8rem] font-black uppercase tracking-[0.26em] text-[#a3a9b7]">
                            Location
                        </div>
                        <div className="mt-2 text-[1.15rem] font-semibold tracking-[-0.03em] text-[#4d515c] sm:text-[1.28rem]">
                            {experience.location}
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-[2rem] font-black uppercase tracking-[-0.05em] text-zinc-950 sm:text-[2.35rem]">
                        {experience.company}
                    </h3>
                    <div className="mt-2 text-[1rem] font-black uppercase tracking-[0.26em] text-[#11a07c] sm:text-[1.1rem]">
                        {experience.role}
                    </div>

                        <ul className="mt-8 space-y-5 border-b border-zinc-950/6 pb-9 text-[1.15rem] leading-[1.6] text-[#555b68] sm:text-[1.25rem]">
                            {points.map((point) => (
                                <li key={point} className="flex gap-4">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-950" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-6 text-[0.8rem] font-black uppercase tracking-[0.16em] text-[#a1a6b2] sm:text-[0.92rem] sm:tracking-[0.22em]">
                            <span className="mr-3 text-zinc-950">Tools :</span>
                            {tools.map((tool, index) => (
                                <span key={tool}>
                                    {tool}
                                    {index < tools.length - 1 ? (
                                        <span className="mr-2">, </span>
                                    ) : null}
                                </span>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}

export default function WorkImpactSection({ experiences = defaultExperiences }) {
    return (
        <section
            id="experience"
            className="border-t border-zinc-950/6 pb-24 pt-20 sm:pt-24 lg:pb-32 lg:pt-28"
        >
            <div className="mx-auto max-w-[1320px]">
                <div className="flex items-center gap-4">
                    <span className="h-px w-11 bg-[#c8cad4]" />
                    <span className="text-base font-black uppercase tracking-[0.24em] text-[#9ea3b2] sm:text-[1.05rem]">
                        Experience
                    </span>
                </div>

                <h2 className="mt-5 text-[1.8rem] font-black leading-[0.94] tracking-[-0.06em] text-zinc-950 sm:text-[3rem] md:text-[4.25rem] lg:text-[5rem]">
                    Work &amp; <span className="text-[#a8acb9]">Impact</span>
                </h2>

                <div className="mt-14 space-y-6 lg:mt-16">
                    {experiences.map((experience) => (
                        <ExperienceCard key={`${experience.company}-${experience.duration}`} experience={experience} />
                    ))}
                </div>
            </div>
        </section>
    );
}
