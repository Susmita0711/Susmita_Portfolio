const defaultSocials = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/susmita0711/", icon: "linkedin" },
    { name: "GitHub", href: "https://github.com/Susmita0711", icon: "github" },
    { name: "Twitter", href: "https://x.com/susmita0711", icon: "twitter" },
];

function SocialIcon({ type }) {
    const normalized = typeof type === "string" ? type.toLowerCase() : "";

    if (normalized === "linkedin") {
        return (
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M6.94 8.5H3.56V20h3.38zm.22-3.64C7.16 3.83 6.38 3 5.29 3S3.41 3.83 3.41 4.86c0 1 .75 1.84 1.82 1.84h.02c1.12 0 1.91-.84 1.91-1.84zM20.59 13.02c0-3.67-1.96-5.38-4.57-5.38-2.1 0-3.04 1.15-3.57 1.96V8.5H9.07c.05.73 0 11.5 0 11.5h3.38v-6.42c0-.34.03-.68.12-.92.27-.67.88-1.36 1.9-1.36 1.34 0 1.88 1.02 1.88 2.52V20h3.38z" />
            </svg>
        );
    }

    if (normalized === "github") {
        return (
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M12 .5C5.65.5.5 5.72.5 12.17c0 5.15 3.3 9.52 7.87 11.06.58.1.8-.26.8-.57 0-.28-.01-1.2-.02-2.18-3.2.71-3.88-1.38-3.88-1.38-.52-1.36-1.28-1.72-1.28-1.72-1.04-.72.08-.71.08-.71 1.15.08 1.75 1.2 1.75 1.2 1.02 1.79 2.68 1.27 3.34.97.1-.75.4-1.27.73-1.56-2.56-.3-5.26-1.31-5.26-5.84 0-1.29.46-2.34 1.2-3.17-.12-.3-.52-1.51.11-3.16 0 0 .98-.32 3.22 1.21a10.95 10.95 0 0 1 5.86 0c2.24-1.53 3.21-1.21 3.21-1.21.64 1.65.24 2.86.12 3.16.74.83 1.2 1.88 1.2 3.17 0 4.54-2.71 5.54-5.29 5.83.42.37.79 1.08.79 2.19 0 1.58-.01 2.86-.01 3.24 0 .31.21.68.81.57 4.56-1.54 7.85-5.91 7.85-11.06C23.5 5.72 18.35.5 12 .5z" />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
            <path d="M21.45 6.1c-.68.31-1.42.52-2.2.62a3.92 3.92 0 0 0 1.7-2.13 7.57 7.57 0 0 1-2.43.95 3.77 3.77 0 0 0-2.8-1.24c-2.36 0-4.1 2.24-3.57 4.56A10.7 10.7 0 0 1 4.3 4.77a3.91 3.91 0 0 0 1.17 5.18 3.65 3.65 0 0 1-1.73-.49v.05c0 1.85 1.28 3.39 2.98 3.75-.54.15-1.1.18-1.68.06.47 1.51 1.84 2.61 3.46 2.64A7.55 7.55 0 0 1 3 17.56 10.66 10.66 0 0 0 8.84 19.3c7.08 0 11.1-6.09 10.86-11.55a7.87 7.87 0 0 0 1.75-2.05z" />
        </svg>
    );
}

function SocialItem({ name, href, icon }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={name}
            title={name}
            className="group relative inline-flex items-center justify-center text-[#a5a8b5] transition duration-300 hover:text-white"
        >
            <span className="pointer-events-none absolute right-[calc(100%+16px)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap text-[0.72rem] font-black uppercase tracking-[0.28em] text-white opacity-0 transition duration-300 group-hover:opacity-100 lg:block">
                {name}
            </span>
            <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition duration-[650ms] ease-out group-hover:rotate-[360deg] group-hover:scale-110 group-hover:border-white/18 group-hover:bg-white/[0.08] group-hover:text-white sm:h-11 sm:w-11">
                <SocialIcon type={icon || name} />
            </span>
        </a>
    );
}

export default function SocialBar({ socials = defaultSocials }) {
    const safeSocials = socials?.length ? socials : defaultSocials;

    return (
        <>
            {/* Desktop: right sidebar */}
            <aside
                className="absolute right-10 top-1/2 z-20 hidden -translate-y-[14%] flex-col items-center gap-16 lg:flex xl:right-8"
                aria-label="Social links"
            >
                {safeSocials.map((social) => (
                    <SocialItem
                        key={social.name || social.platform}
                        name={social.name || social.platform}
                        href={social.href}
                        icon={social.icon}
                    />
                ))}
                <span className="mt-2 h-28 w-px bg-white/12" />
            </aside>

            {/* Mobile: bottom bar */}
            <div className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-center gap-8 border-t border-white/10 bg-[#050816]/90 py-3 backdrop-blur-md lg:hidden">
                {safeSocials.map((social) => (
                    <a
                        key={social.name || social.platform}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.name}
                        title={social.name}
                        className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-[#a5a8b5] transition duration-300 hover:text-white"
                    >
                        <SocialIcon type={social.icon || social.name?.toLowerCase()} />
                    </a>
                ))}
            </div>
        </>
    );
}
