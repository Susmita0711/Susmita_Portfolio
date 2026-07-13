import { useMemo, useState } from "react";

const filters = [
    { name: "All", key: "all", icon: "grid" },
    { name: "Web", key: "web", icon: "code" },
    { name: "Design", key: "design", icon: "palette" },
];

const defaultProjects = [
    {
        category: "Development",
        title: "Snippit",
        description: "An open-source SaaS starter registry",
        about: "A polished starter platform for launching SaaS products faster with clean onboarding and reusable architecture.",
        stack: ["React", "Node", "MongoDB", "Tailwind"],
        preview: "snippit",
        type: "web",
        links: [
            { label: "GitHub", href: "#", icon: "github" },
            { label: "Live Web", href: "#", icon: "web" },
        ],
    },
    {
        category: "Visual Design",
        title: "Autovion",
        description: "Luxury car showroom UI focused on clarity.",
        about: "A cinematic showroom experience built around sharp typography, editorial spacing, and premium product storytelling.",
        stack: ["Figma", "Brand UI", "Prototype", "Motion"],
        preview: "autovion",
        type: "design",
        links: [
            { label: "Figma", href: "#", icon: "figma" },
            { label: "Live Web", href: "#", icon: "web" },
        ],
    },
    {
        category: "Development",
        title: "zentra",
        description: "Standardized municipal infrastructure for renewable energy.",
        about: "A clean data-focused interface for sustainable infrastructure teams to track systems, usage, and public reporting.",
        stack: ["React", "AWS", "Charts", "API"],
        preview: "zentra",
        type: "web",
        links: [
            { label: "GitHub", href: "#", icon: "github" },
            { label: "Live Web", href: "#", icon: "web" },
        ],
    },
    {
        category: "Visual Design",
        title: "Solelux",
        description: "Modern shoe store hero banner.",
        about: "A fashion-led concept for a footwear brand with strong contrast, bold product focus, and retail polish.",
        stack: ["Figma", "Visual Design", "E-commerce", "Hero UI"],
        preview: "solelux",
        type: "design",
        links: [
            { label: "Figma", href: "#", icon: "figma" },
            { label: "GitHub", href: "#", icon: "github" },
            { label: "Live Web", href: "#", icon: "web" },
        ],
    },
    {
        category: "Development",
        title: "Verity",
        description: "Fact-checking web app for news.",
        about: "A credibility-first product concept that helps readers verify stories quickly through structured analysis flows.",
        stack: ["React", "AI", "Dashboard", "UX"],
        preview: "verity",
        type: "web",
        links: [
            { label: "Figma", href: "#", icon: "figma" },
            { label: "GitHub", href: "#", icon: "github" },
            { label: "Live Web", href: "#", icon: "web" },
        ],
    },
    {
        category: "Visual Design",
        title: "Wood-Mood",
        description: "Minimalist furniture agency section.",
        about: "An airy editorial landing page for furniture storytelling with soft contrast and modular layout rhythm.",
        stack: ["Figma", "Art Direction", "UI Grid", "Typography"],
        preview: "woodmood",
        type: "design",
        links: [
            { label: "Figma", href: "#", icon: "figma" },
            { label: "Live Web", href: "#", icon: "web" },
        ],
    },
    {
        category: "Visual Design",
        title: "TravelOne",
        description: "Travel Agency destinations UI.",
        about: "A destination-driven travel interface with card-heavy discovery, vibrant imagery, and booking-friendly hierarchy.",
        stack: ["Figma", "Travel UI", "Cards", "Landing Page"],
        preview: "travelone",
        type: "design",
        links: [
            { label: "Figma", href: "#", icon: "figma" },
            { label: "Live Web", href: "#", icon: "web" },
        ],
    },
];

function FilterIcon({ type }) {
    if (type === "grid") {
        return (
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path
                    d="M5 5h5v5H5Zm9 0h5v5h-5ZM5 14h5v5H5Zm9 0h5v5h-5Z"
                    fill="currentColor"
                />
            </svg>
        );
    }

    if (type === "code") {
        return (
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path
                    d="m9 8-4 4 4 4m6-8 4 4-4 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
            <path
                d="M12 4.5A7.5 7.5 0 1 0 19.5 12 7.5 7.5 0 0 0 12 4.5Zm0 0v15m-5.3-5.3h10.6M7.8 7.8c2.7 1.4 5.7 1.4 8.4 0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    );
}

function LinkIcon({ type }) {
    if (type === "github") {
        return (
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                    d="M12 .8a11.2 11.2 0 0 0-3.54 21.82c.56.1.76-.23.76-.53v-2.08c-3.09.69-3.74-1.31-3.74-1.31-.5-1.29-1.23-1.63-1.23-1.63-1-.69.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.56 1.18 3.19.9.1-.7.38-1.18.69-1.46-2.47-.28-5.08-1.23-5.08-5.49 0-1.21.43-2.21 1.14-2.99-.11-.28-.49-1.42.11-2.95 0 0 .93-.3 3.05 1.14a10.6 10.6 0 0 1 5.56 0c2.12-1.44 3.05-1.14 3.05-1.14.6 1.53.22 2.67.11 2.95.71.78 1.14 1.78 1.14 2.99 0 4.27-2.62 5.2-5.11 5.48.4.34.75 1.01.75 2.04v3.02c0 .3.2.64.77.53A11.2 11.2 0 0 0 12 .8Z"
                    fill="currentColor"
                />
            </svg>
        );
    }

    if (type === "figma") {
        return (
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                    d="M9 2.5a3.5 3.5 0 1 0 0 7h3v-7H9Zm6 0h-3v7h3a3.5 3.5 0 1 0 0-7ZM9 9.5a3.5 3.5 0 1 0 0 7h3v-7H9Zm6 0h-3v7h3a3.5 3.5 0 1 0 0-7Zm-6 7a3.5 3.5 0 1 0 3 3.46V16.5H9Z"
                    fill="currentColor"
                />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
                d="M14 5h5v5m-9 9 9-9M7.5 7.5h4m-4 4h9m-9 4h6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function PreviewArtwork({ type }) {
    if (type === "snippit") {
        return (
            <div className="relative mx-auto mt-8 h-[60%] w-[84%] overflow-hidden rounded-[8px] bg-[#07090d] shadow-[0_10px_25px_rgba(0,0,0,0.18)]">
                <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(54,66,84,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(54,66,84,0.35)_1px,transparent_1px)] [background-size:22px_22px]" />
                <div className="absolute left-1/2 top-[18%] h-3 w-[54%] -translate-x-1/2 rounded-full bg-white/10" />
                <div className="absolute left-[12%] top-[24%] h-[12%] w-[12%] rounded-lg border border-cyan-400/20 bg-cyan-300/5" />
                <div className="absolute right-[12%] top-[24%] h-[8%] w-[10%] rounded-md bg-sky-500/70" />
                <div className="absolute left-[18%] top-[40%] text-[clamp(1rem,2vw,1.8rem)] font-bold leading-[1.2] tracking-[-0.04em] text-white">
                    Designing <span className="text-white/45 italic">simplicity</span>
                    <br />
                    for the modern stack.
                </div>
                <div className="absolute bottom-[16%] left-1/2 flex -translate-x-1/2 gap-2">
                    <span className="rounded-full bg-white px-4 py-1 text-[0.45rem] font-bold uppercase tracking-[0.16em] text-zinc-950">
                        Lighthouse Score 97
                    </span>
                    <span className="rounded-full border border-white/20 px-4 py-1 text-[0.45rem] font-bold uppercase tracking-[0.16em] text-white/80">
                        Repo Story
                    </span>
                </div>
            </div>
        );
    }

    if (type === "autovion") {
        return (
            <div className="relative mx-auto mt-6 h-[79%] w-[86%] overflow-hidden rounded-[10px] bg-[linear-gradient(135deg,#f3f1ec,#e8e5df)] shadow-[0_14px_35px_rgba(20,20,20,0.12)]">
                <div className="absolute inset-0 grid grid-cols-[1.15fr_1fr_1.05fr] gap-2 p-2">
                    <div className="rounded-[8px] bg-[linear-gradient(180deg,#f8f7f3,#d8d4ce)]" />
                    <div className="rounded-[18px] bg-[linear-gradient(180deg,#fefefe,#232323)] shadow-[0_15px_35px_rgba(0,0,0,0.2)]" />
                    <div className="rounded-[8px] bg-[linear-gradient(180deg,#222,#666)]" />
                </div>
                <div className="absolute left-[8%] top-[7%] text-[0.7rem] font-bold uppercase tracking-[0.15em] text-zinc-700">
                    Cutting-Edge
                </div>
                <div className="absolute left-[38%] top-[22%] text-[clamp(1rem,2vw,1.8rem)] font-black uppercase tracking-[-0.05em] text-zinc-950">
                    Driving
                </div>
                <div className="absolute bottom-[16%] left-[50%] h-[18%] w-[28%] -translate-x-1/2 rounded-[8px] bg-white/20" />
            </div>
        );
    }

    if (type === "zentra") {
        return (
            <div className="relative mx-auto mt-8 h-[60%] w-[84%] overflow-hidden rounded-[8px] border border-zinc-950/6 bg-white shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
                <div className="absolute inset-x-0 top-0 h-[9%] border-b border-zinc-950/5 bg-white" />
                <div className="absolute left-[8%] top-[28%] text-[clamp(1rem,1.8vw,1.7rem)] font-black uppercase leading-[1.1] tracking-[-0.04em] text-[#14463f]">
                    Building
                    <br />
                    <span className="text-[#1ca979]">Self-Sustaining</span>
                </div>
                <div className="absolute right-[8%] top-[22%] h-[42%] w-[26%] rounded-[6px] border border-zinc-950/6 bg-[#f6fbfa]" />
                <div className="absolute left-[8%] bottom-[14%] flex gap-2">
                    <span className="rounded-md bg-[#116b57] px-3 py-1 text-[0.46rem] font-bold uppercase tracking-[0.14em] text-white">
                        Live Data
                    </span>
                    <span className="rounded-md border border-zinc-950/10 px-3 py-1 text-[0.46rem] font-bold uppercase tracking-[0.14em] text-zinc-500">
                        Explore
                    </span>
                </div>
            </div>
        );
    }

    if (type === "verity") {
        return (
            <div className="relative mx-auto mt-8 h-[62%] w-[84%] overflow-hidden rounded-[8px] border border-zinc-950/6 bg-white shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
                <div className="absolute inset-x-0 top-0 h-[9%] border-b border-zinc-950/5 bg-white" />
                <div className="absolute inset-x-[18%] top-[20%] text-center text-[clamp(0.9rem,1.6vw,1.45rem)] font-black leading-[1.18] tracking-[-0.04em] text-[#18202f]">
                    Verify News Credibility
                    <br />
                    <span className="text-[#1a8c65]">Before You Trust It</span>
                </div>
                <div className="absolute inset-x-[28%] bottom-[22%] flex justify-center gap-2">
                    <span className="rounded-md bg-[#18202f] px-3 py-1 text-[0.45rem] font-bold uppercase tracking-[0.14em] text-white">
                        Start Verify
                    </span>
                    <span className="rounded-md border border-zinc-950/10 px-3 py-1 text-[0.45rem] font-bold uppercase tracking-[0.14em] text-zinc-500">
                        Schedule Demo
                    </span>
                </div>
            </div>
        );
    }

    if (type === "woodmood") {
        return (
            <div className="relative mx-auto mt-8 h-[62%] w-[84%] overflow-hidden rounded-[8px] border border-zinc-950/6 bg-white shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
                <div className="absolute left-0 top-0 h-full w-[42%] bg-[#f8f6f1]" />
                <div className="absolute left-[7%] top-[22%] text-[clamp(0.9rem,1.5vw,1.35rem)] font-bold leading-[1.32] text-[#2a3028]">
                    Wood Mood
                    <br />
                    Furniture
                    <br />
                    Landing
                    <br />
                    Page Hero
                    <br />
                    Section
                </div>
                <div className="absolute right-[10%] top-[16%] h-[54%] w-[44%] rounded-[12px] border border-zinc-950/8 bg-[linear-gradient(180deg,#fcfcfb,#d6d0c8)] shadow-[0_14px_28px_rgba(0,0,0,0.12)]" />
            </div>
        );
    }

    if (type === "travelone") {
        return (
            <div className="relative mx-auto mt-8 h-[62%] w-[84%] overflow-hidden rounded-[8px] border border-zinc-950/6 bg-white shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
                <div className="absolute inset-x-[5%] top-[10%] h-[32%] rounded-[10px] bg-[linear-gradient(180deg,#68a6ff,#a6d0ff)]" />
                <div className="absolute left-[10%] top-[24%] text-[0.65rem] font-semibold text-white">
                    Luxury Beyond Borders,
                    <br />
                    Adventures Beyond
                </div>
                <div className="absolute inset-x-[8%] bottom-[12%] grid grid-cols-4 gap-2">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div
                            key={index}
                            className="aspect-[1/0.82] rounded-[8px] bg-[linear-gradient(180deg,#d5f0ff,#8bc7d5)]"
                        />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="relative mx-auto mt-6 h-[79%] w-[86%] overflow-hidden rounded-[12px] bg-[linear-gradient(180deg,#fcfbf8,#ece8e1)] shadow-[0_14px_30px_rgba(0,0,0,0.12)]">
            <div className="absolute inset-0 grid grid-cols-[1fr_1.1fr]">
                <div className="p-5">
                    <div className="text-[0.55rem] font-bold uppercase tracking-[0.12em] text-zinc-800">
                        Solelux
                    </div>
                    <div className="mt-10 text-[clamp(1rem,2vw,1.8rem)] font-medium uppercase leading-[1.3] tracking-[0.08em] text-zinc-950">
                        Shoe
                        <br />
                        Shopping
                        <br />
                        Simplified
                    </div>
                    <div className="mt-5 flex gap-2">
                        <span className="rounded-full bg-black px-3 py-1 text-[0.44rem] font-bold uppercase tracking-[0.14em] text-white">
                            Buy Now
                        </span>
                        <span className="rounded-full border border-zinc-950/10 px-3 py-1 text-[0.44rem] font-bold uppercase tracking-[0.14em] text-zinc-500">
                            Explore
                        </span>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute inset-[6%] rounded-[18px] bg-[linear-gradient(180deg,#d8ccc0,#f0ebe4)]" />
                    <div className="absolute right-[12%] top-[22%] h-[42%] w-[46%] rounded-[32px] bg-[linear-gradient(135deg,#1a2240,#fc5c2f_52%,#0f1020)] shadow-[0_22px_38px_rgba(0,0,0,0.24)]" />
                </div>
            </div>
        </div>
    );
}

function IconButton({ link }) {
    return (
        <a
            href={link.href}
            aria-label={link.label}
            title={link.label}
            className="grid h-14 w-14 place-items-center rounded-full bg-black text-white shadow-[0_14px_24px_rgba(15,15,16,0.16)] transition duration-300 hover:scale-105 hover:bg-zinc-800"
        >
            <LinkIcon type={link.icon} />
        </a>
    );
}

function ProjectImage({ project }) {
    if (project.imageUrl) {
        return (
            <img
                src={project.imageUrl}
                alt={project.title}
                className="h-full w-full object-cover"
            />
        );
    }

    return <PreviewArtwork type={project.preview} />;
}

function ProjectCard({ project }) {
    return (
        <article className="featured-project-card group h-[360px] sm:h-[420px]">
            <div className="project-flip-card h-full">
                <div className="project-flip-inner h-full">
                    <div className="project-face flex h-full flex-col">
                        <div className="relative h-[235px] overflow-hidden rounded-[22px] transition duration-500">
                            <div className="h-full overflow-hidden rounded-[22px]">
                                <ProjectImage project={project} />
                            </div>
                        </div>

                        <div className="mt-3.5 flex-1">
                            <div className="text-[0.88rem] font-black uppercase tracking-[0.18em] text-[#a3a9b7]">
                                {project.category}
                            </div>
                            <h3 className="mt-1 text-[1.72rem] font-black tracking-[-0.05em] text-zinc-950">
                                {project.title}
                            </h3>
                            <p className="mt-1 max-w-[320px] text-[0.96rem] leading-[1.42] text-[#6b7080]">
                                {project.description}
                            </p>
                        </div>
                    </div>

                    <div className="project-face project-face-back flex h-full flex-col justify-between rounded-[26px] border border-emerald-400/12 bg-[linear-gradient(180deg,rgba(15,20,29,0.98),rgba(11,16,24,1))] p-6 text-left text-white">
                        <div>
                            <div className="text-[0.82rem] font-black uppercase tracking-[0.18em] text-emerald-300/80">
                                {project.category}
                            </div>
                            <h3 className="mt-2 text-[1.7rem] font-black tracking-[-0.05em] text-white">
                                {project.title}
                            </h3>
                            <p className="mt-3 text-[0.96rem] leading-[1.6] text-slate-300">
                                {project.about}
                            </p>
                        </div>

                        <div className="mt-5">
                            <div className="text-[0.78rem] font-black uppercase tracking-[0.22em] text-emerald-300/75">
                                Tech Stack
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {project.stack.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-emerald-400/18 bg-emerald-400/8 px-3 py-1.5 text-[0.74rem] font-bold uppercase tracking-[0.14em] text-emerald-100"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-5 flex gap-3">
                            {project.links.map((link) => (
                                <IconButton key={link.label} link={link} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default function FeaturedWorksSection({ projects = defaultProjects }) {
    const [activeFilter, setActiveFilter] = useState("all");
    const [showAll, setShowAll] = useState(false);
    const projectList = projects?.length ? projects : defaultProjects;

    const filteredProjects = useMemo(() => {
        if (activeFilter === "all") {
            return projectList;
        }

        return projectList.filter((project) => project.type === activeFilter);
    }, [activeFilter, projectList]);

    const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);
    const hasMoreProjects = filteredProjects.length > 4;

    return (
        <section
            id="projects"
            className="featured-works-section border-t border-zinc-950/6 pb-24 pt-20 sm:pt-24 lg:pb-32 lg:pt-28"
        >
            <div className="mx-auto max-w-[1320px]">
                <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                        <div className="flex items-center gap-4">
                            <span className="h-px w-11 bg-[#c8cad4]" />
                            <span className="text-base font-black uppercase tracking-[0.24em] text-[#9ea3b2] sm:text-[1.05rem]">
                                Portfolio
                            </span>
                        </div>

                        <h2 className="mt-5 text-[1.8rem] font-black leading-[0.94] tracking-[-0.06em] text-zinc-950 sm:text-[3rem] md:text-[4.25rem] lg:text-[5rem]">
                            Featured <span className="text-[#a8acb9]">Works</span>
                        </h2>
                    </div>

                    <div className="featured-filter inline-flex w-fit flex-wrap items-center gap-2 rounded-full border border-zinc-950/8 bg-[#eef0f5] p-2 shadow-[0_10px_28px_rgba(15,15,16,0.04)]">
                        {filters.map((filter) => {
                            const active = activeFilter === filter.key;

                            return (
                                <button
                                    key={filter.name}
                                    type="button"
                                    onClick={() => {
                                        setActiveFilter(filter.key);
                                        setShowAll(false);
                                    }}
                                    className={`inline-flex items-center gap-2 rounded-full px-8 py-3 text-[0.92rem] font-black tracking-[0.04em] transition duration-300 ${
                                        active
                                            ? "featured-filter-active bg-black text-white shadow-[0_10px_25px_rgba(0,0,0,0.16)]"
                                            : "text-[#6c7384] hover:text-zinc-950"
                                    }`}
                                >
                                    <FilterIcon type={filter.icon} />
                                    {filter.name}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-14 grid gap-x-6 gap-y-8 md:grid-cols-2 xl:grid-cols-4">
                    {visibleProjects.map((project) => (
                        <ProjectCard key={project.slug || project.title} project={project} />
                    ))}
                </div>

                {hasMoreProjects ? (
                    <div className="mt-20 flex flex-col items-center justify-center gap-6">
                        <button
                            type="button"
                            onClick={() => setShowAll((value) => !value)}
                            className="text-[1rem] font-black uppercase tracking-[0.34em] text-[#a3a9b7] transition duration-300 hover:text-zinc-950"
                        >
                            {showAll ? "Show Less Projects" : "View More Projects"}
                        </button>
                        <button
                            type="button"
                            onClick={() => setShowAll((value) => !value)}
                            className="grid h-20 w-20 place-items-center rounded-full border border-zinc-950/10 bg-white/50 text-[2rem] text-[#aab0bc] transition duration-300 hover:translate-y-1 hover:border-zinc-950/18 hover:text-zinc-950"
                        >
                            <span aria-hidden="true">{showAll ? "⌃" : "⌄"}</span>
                        </button>
                    </div>
                ) : null}
            </div>
        </section>
    );
}
