const defaultContactItems = [
    {
        index: "01",
        label: "EMAIL",
        hoverLabel: "SEND MAIL →",
        href: "mailto:susmitahazra071105@gmail.com",
        icon: "mail",
    },
    {
        index: "02",
        label: "LINKEDIN",
        hoverLabel: "NETWORK →",
        href: "https://www.linkedin.com/in/susmita0711/",
        icon: "linkedin",
    },
    {
        index: "03",
        label: "GITHUB",
        hoverLabel: "SOURCE →",
        href: "https://github.com/Susmita0711",
        icon: "github",
    },
    {
        index: "04",
        label: "FIGMA",
        hoverLabel: "CANVAS →",
        href: "https://www.figma.com/",
        icon: "figma",
    },
];

function ContactIcon({ type }) {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            {type === "mail" && (
                <path d="M4 6.5h16v11H4zm0 .5 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            )}
            {type === "linkedin" && (
                <path d="M6.94 8.5H3.56V20h3.38zm.22-3.64C7.16 3.83 6.38 3 5.29 3S3.41 3.83 3.41 4.86c0 1 .75 1.84 1.82 1.84h.02c1.12 0 1.91-.84 1.91-1.84zM20.59 13.02c0-3.67-1.96-5.38-4.57-5.38-2.1 0-3.04 1.15-3.57 1.96V8.5H9.07v11.5h3.38v-6.42c0-.34.03-.68.12-.92.27-.67.88-1.36 1.9-1.36 1.34 0 1.88 1.02 1.88 2.52V20h3.38z" fill="currentColor" />
            )}
            {type === "github" && (
                <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.82c.56.1.76-.23.76-.53v-2.08c-3.09.69-3.74-1.31-3.74-1.31-.5-1.29-1.23-1.63-1.23-1.63-1-.69.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.56 1.18 3.19.9.1-.7.38-1.18.69-1.46-2.47-.28-5.08-1.23-5.08-5.49 0-1.21.43-2.21 1.14-2.99-.11-.28-.49-1.42.11-2.95 0 0 .93-.3 3.05 1.14a10.6 10.6 0 0 1 5.56 0c2.12-1.44 3.05-1.14 3.05-1.14.6 1.53.22 2.67.11 2.95.71.78 1.14 1.78 1.14 2.99 0 4.27-2.62 5.2-5.11 5.48.4.34.75 1.01.75 2.04v3.02c0 .3.2.64.77.53A11.2 11.2 0 0 0 12 .8Z" fill="currentColor" />
            )}
            {type === "figma" && (
                <path d="M9 2.5a3.5 3.5 0 1 0 0 7h3v-7H9Zm6 0h-3v7h3a3.5 3.5 0 1 0 0-7ZM9 9.5a3.5 3.5 0 1 0 0 7h3v-7H9Zm6 0h-3v7h3a3.5 3.5 0 1 0 0-7Zm-6 7a3.5 3.5 0 1 0 3 3.46V16.5H9Z" fill="currentColor" />
            )}
        </svg>
    );
}

function ContactRow({ item }) {
    return (
        <a
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            className="group grid grid-cols-[40px_minmax(0,1fr)_24px] items-center gap-3 border-b border-zinc-300 dark:border-white/10 py-6 transition duration-300 sm:grid-cols-[55px_minmax(0,1fr)_28px] sm:gap-4 sm:py-8"
        >
            {/* Index */}
            <span className="text-sm font-semibold text-zinc-400 group-hover:text-black dark:group-hover:text-white">
                {item.index}
            </span>

            {/* Label */}
            <span className="relative block overflow-hidden">
                
                <span className="block text-[1.1rem] font-bold uppercase tracking-[0.08em] text-zinc-800 dark:text-zinc-300 transition duration-300 group-hover:-translate-y-full group-hover:opacity-0 sm:text-[1.7rem] sm:tracking-[0.12em]">
                    {item.label}
                </span>

                <span className="absolute left-0 top-0 translate-y-full text-[1.1rem] font-bold uppercase tracking-[0.08em] text-black dark:text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:text-[1.7rem] sm:tracking-[0.12em]">
                    {item.hoverLabel}
                </span>
            </span>

            {/* Icon */}
            <span className="justify-self-end text-zinc-400 group-hover:text-black dark:group-hover:text-white transition">
                <ContactIcon type={item.icon} />
            </span>
        </a>
    );
}

export default function GetInTouchSection({ contactItems = defaultContactItems }) {
    return (
        <section
            id="connect"
            className="border-t border-zinc-200 dark:border-white/10 pb-28 pt-20 sm:pt-24 lg:pb-36 lg:pt-28"
        >
            <div className="mx-auto max-w-[1320px]">
                <div className="relative">

                    {/* Background text */}
                    <div className="absolute right-[-2%] top-20 hidden select-none text-[11rem] font-black uppercase leading-[0.8] tracking-[-0.08em] text-black/[0.04] dark:text-white/[0.04] xl:block">
                        NETWORK
                    </div>

                    <div className="max-w-[1180px]">
                        
                        {/* Top line */}
                        <div className="flex items-center gap-4">
                            <span className="h-px w-11 bg-zinc-400 dark:bg-white/40" />
                            <span className="text-base font-black uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                                Available For Work
                            </span>
                        </div>

                        {/* 🔥 BIG HEADING (UNCHANGED SIZE) */}
                        <h2 className="mt-5 text-[1.8rem] font-black leading-[0.94] tracking-[-0.06em] text-black dark:text-white sm:text-[3rem] md:text-[4.25rem] lg:text-[5rem]">
                            Get In <span className="text-zinc-500 dark:text-zinc-400">Touch</span>
                        </h2>

                        {/* Rows */}
                        <div className="mt-20">
                            {contactItems.map((item) => (
                                <ContactRow key={item.label} item={item} />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}