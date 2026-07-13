const defaultTechRows = [
    [
        { name: "React", icon: "atom", color: "#5dd6ff" },
        { name: "Supabase", icon: "bolt", color: "#41d38c" },
        { name: "Tailwind", icon: "wave", color: "#2dd4ff" },
        { name: "TensorFlow", icon: "tf", color: "#ff8a00" },
    ],
    [
        { name: "MongoDB", icon: "leaf", color: "#5fd46f" },
        { name: "Git", icon: "git", color: "#ff6a3d" },
        { name: "TypeScript", icon: "ts", color: "#5da8ff" },
        { name: "PostgreSQL", icon: "db", color: "#5a76ff" },
        { name: "HuggingFace", icon: "face", color: "#ffd12b" },
    ],
    [
        { name: "FastAPI", icon: "flash", color: "#1cc6ba" },
        { name: "Vercel", icon: "triangle", color: "#f5f7fb" },
        { name: "XGBoost", icon: "orb", color: "#31c8e8" },
        { name: "Next.js", icon: "n", color: "#d8dbe4" },
        { name: "Redis", icon: "redis", color: "#d84d45" },
        { name: "Jupyter", icon: "jupiter", color: "#d77b37" },
    ],
];

function IconGlyph({ type, color }) {
    const common = "h-6 w-6";
    const normalizedType = typeof type === "string" ? type.toLowerCase() : "";

    switch (normalizedType) {
        case "react":
        case "atom":
            return (
                <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
                    <circle cx="12" cy="12" r="2.1" fill={color} />
                    <ellipse cx="12" cy="12" rx="8.5" ry="3.4" fill="none" stroke={color} strokeWidth="1.5" />
                    <ellipse
                        cx="12"
                        cy="12"
                        rx="8.5"
                        ry="3.4"
                        fill="none"
                        stroke={color}
                        strokeWidth="1.5"
                        transform="rotate(60 12 12)"
                    />
                    <ellipse
                        cx="12"
                        cy="12"
                        rx="8.5"
                        ry="3.4"
                        fill="none"
                        stroke={color}
                        strokeWidth="1.5"
                        transform="rotate(120 12 12)"
                    />
                </svg>
            );
        case "supabase":
        case "bolt":
            return (
                <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
                    <path
                        d="M13.6 2.8 5.8 13.1h5l-.7 8.1 8.1-11h-5.1l.5-7.4Z"
                        fill={color}
                    />
                </svg>
            );
        case "tailwind":
        case "wave":
            return (
                <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
                    <path
                        d="M4 8.7c2.5-3.4 5.1-3.4 7.6 0s5.1 3.4 7.6 0M4 15.3c2.5-3.4 5.1-3.4 7.6 0s5.1 3.4 7.6 0"
                        fill="none"
                        stroke={color}
                        strokeLinecap="round"
                        strokeWidth="2"
                    />
                </svg>
            );
        case "aws":
        case "tensorflow":
        case "tf":
            return (
                <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
                    <path d="M3 6h18v4h-7v11h-4V10H3Z" fill={color} />
                </svg>
            );
        case "mongodb":
        case "leaf":
            return (
                <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
                    <path
                        d="M12 2c4.8 2.4 7.1 6.2 7.1 10.3 0 4.3-2.7 7.7-7.1 9.7-4.4-2-7.1-5.4-7.1-9.7C4.9 8.2 7.2 4.4 12 2Zm0 4.2v12.6"
                        fill="none"
                        stroke={color}
                        strokeWidth="1.8"
                        strokeLinecap="round"
                    />
                </svg>
            );
        case "git":
            return (
                <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
                    <path
                        d="m12 3 9 9-9 9-9-9 9-9Zm0 4.5a1.5 1.5 0 1 0 1.4 2v4a1.5 1.5 0 1 0-1.3 0v-4A1.5 1.5 0 0 0 12 7.5Z"
                        fill={color}
                    />
                </svg>
            );
        case "typescript":
        case "ts":
            return (
                <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
                    <rect x="2.5" y="2.5" width="19" height="19" rx="3.5" fill={color} />
                    <text x="12" y="15.3" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#0a1220">
                        TS
                    </text>
                </svg>
            );
        case "postgresql":
        case "db":
            return (
                <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
                    <ellipse cx="12" cy="6" rx="6.8" ry="2.8" fill="none" stroke={color} strokeWidth="1.6" />
                    <path d="M5.2 6v6c0 1.5 3 2.8 6.8 2.8s6.8-1.3 6.8-2.8V6" fill="none" stroke={color} strokeWidth="1.6" />
                    <path d="M5.2 12v6c0 1.5 3 2.8 6.8 2.8s6.8-1.3 6.8-2.8v-6" fill="none" stroke={color} strokeWidth="1.6" />
                </svg>
            );
        case "huggingface":
        case "face":
            return (
                <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
                    <circle cx="12" cy="12" r="8" fill={color} />
                    <circle cx="9" cy="11" r="1" fill="#171717" />
                    <circle cx="15" cy="11" r="1" fill="#171717" />
                    <path d="M8.4 15.1c1.3 1.4 5.9 1.4 7.2 0" fill="none" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            );
        case "fastapi":
        case "firebase":
        case "flash":
            return (
                <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
                    <path d="M13.7 2.8 6.8 12.1h4.1L10.5 21l6.7-9.4h-4.1l.6-8.8Z" fill={color} />
                </svg>
            );
        case "vercel":
        case "triangle":
            return (
                <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
                    <path d="M12 4 20 19H4L12 4Z" fill={color} />
                </svg>
            );
        case "xgboost":
        case "orb":
            return (
                <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
                    <circle cx="12" cy="12" r="7" fill={color} />
                </svg>
            );
        case "next.js":
        case "nextjs":
        case "n":
            return (
                <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
                    <circle cx="12" cy="12" r="9" fill="none" stroke={color} strokeWidth="1.8" />
                    <path d="M8 16V8l8 8V8" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case "redis":
            return (
                <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
                    <path d="M5 8.5 11.8 5 19 8.5l-7.2 3.1L5 8.5Zm0 4 6.8 3.1 7.2-3.1m-14 4 6.8 3.1 7.2-3.1" fill="none" stroke={color} strokeWidth="1.7" strokeLinejoin="round" />
                </svg>
            );
        case "jupyter":
        case "jupiter":
            return (
                <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
                    <path d="M6 12a6 6 0 0 1 12 0" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M18 12a6 6 0 0 1-12 0" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
                    <circle cx="18.5" cy="5.5" r="1.6" fill={color} />
                    <circle cx="5.5" cy="18.5" r="1.6" fill={color} />
                </svg>
            );
        default:
            return (
                <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
                    <circle cx="12" cy="12" r="8" fill="none" stroke={color} strokeWidth="1.8" />
                    <path
                        d="M8 12h8M12 8v8"
                        fill="none"
                        stroke={color}
                        strokeWidth="1.8"
                        strokeLinecap="round"
                    />
                </svg>
            );
    }
}

function TechBadge({ item }) {
    return (
        <div
            className="tech-chip group inline-flex items-center gap-3 rounded-full border px-4 py-3 shadow-[0_10px_24px_rgba(15,15,16,0.04)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(15,15,16,0.07)]"
            style={{
                color: "#525765",
                borderColor: `${item.color}26`,
                background: "rgba(255,255,255,0.72)",
            }}
        >
            <span
                className="grid h-11 w-11 place-items-center rounded-full border transition duration-700 group-hover:rotate-[360deg]"
                style={{
                    borderColor: `${item.color}35`,
                    background: `${item.color}14`,
                }}
            >
                <IconGlyph type={item.icon} color={item.color} />
            </span>
            <span className="whitespace-nowrap text-[1.05rem] font-semibold tracking-[0.01em] text-[#5e6371] transition duration-300 group-hover:text-zinc-950">
                {item.name}
            </span>
        </div>
    );
}

function StreamRow({ items, reverse = false, offset = 0 }) {
    const doubled = [...items, ...items];

    return (
        <div className="tech-stream-mask relative overflow-hidden py-1.5">
            <div
                className={`flex w-max gap-6 ${reverse ? "tech-marquee-reverse" : "tech-marquee"}`}
                style={{ animationDelay: `${offset}s` }}
            >
                {doubled.map((item, index) => (
                    <TechBadge key={`${item.name}-${index}`} item={item} />
                ))}
            </div>
        </div>
    );
}

function buildRows(items) {
    if (!items?.length) {
        return defaultTechRows;
    }

    const mapped = items.map((item) => ({
        name: item.name,
        icon: item.icon,
        color: item.accentColor || "#61dafb",
    }));

    const rowSize = Math.max(4, Math.ceil(mapped.length / 3));
    const rows = [
        mapped.slice(0, rowSize),
        mapped.slice(rowSize, rowSize * 2),
        mapped.slice(rowSize * 2),
    ].filter((row) => row.length);

    return rows.length ? rows : defaultTechRows;
}

export default function TechStackSection({
    items,
    label = "Inventory",
    heading = "Tech Stack",
}) {
    const techRows = buildRows(items);
    const headingParts = heading.split(" ");
    const headingLead = headingParts[0] || "Tech";
    const headingAccent = headingParts.slice(1).join(" ") || "Stack";

    return (
        <section
            id="skills"
            className="tech-stack-section border-t border-zinc-950/6 pb-24 pt-20 sm:pt-24 lg:pb-32 lg:pt-28"
        >
            <div className="mx-auto max-w-[1320px]">
                <div className="flex items-center gap-4">
                    <span className="h-px w-11 bg-[#c8cad4]" />
                    <span className="text-base font-black uppercase tracking-[0.24em] text-[#9ea3b2] sm:text-[1.05rem]">
                        {label}
                    </span>
                </div>

                <h2 className="mt-5 text-[1.8rem] font-black leading-[0.94] tracking-[-0.06em] text-zinc-950 sm:text-[3rem] md:text-[4.25rem]">
                    {headingLead} <span className="text-[#a8acb9]">{headingAccent}</span>
                </h2>

                <div className="mt-14 relative isolate overflow-hidden py-2">
                    <div className="absolute inset-0 opacity-45 [background-image:radial-gradient(rgba(130,140,160,0.16)_0.7px,transparent_0.7px)] [background-size:34px_34px]" />

                    <div className="relative z-10 flex min-h-[210px] flex-col justify-center gap-2 sm:min-h-[250px]">
                        {techRows[0] ? <StreamRow items={techRows[0]} offset={-4} /> : null}
                        {techRows[1] ? <StreamRow items={techRows[1]} reverse offset={-11} /> : null}
                        {techRows[2] ? <StreamRow items={techRows[2]} offset={-7} /> : null}
                    </div>
                </div>
            </div>
        </section>
    );
}