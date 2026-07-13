import { useEffect, useRef, useState } from "react";

const menuItems = ["About", "Skills", "Projects", "Experience", "Blogs", "Connect"];

export default function Navbar({ site }) {
    const firstName = site?.ownerFirstName || "SUSMITA";
    const lastName = site?.ownerLastName || "HAZRA";
    const subtitle = site?.subtitle || "AI/ML ENTHUSIAST · DATA EXPLORER";
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        if (!menuOpen) return;

        function handleClickOutside(e) {
            if (
                menuRef.current && !menuRef.current.contains(e.target) &&
                buttonRef.current && !buttonRef.current.contains(e.target)
            ) {
                setMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [menuOpen]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <>
            {/* Header - logo + desktop nav */}
            <header className="fixed left-1/2 top-0 z-30 w-full max-w-[1480px] -translate-x-1/2 px-4 sm:px-6 lg:px-10">
                <div className="flex flex-col gap-5 bg-gradient-to-b from-[#050816] via-[#050816]/90 to-transparent pb-5 pt-7 backdrop-blur-[6px] md:flex-row md:items-start md:justify-between">
                    <a href="#" className="group inline-flex w-fit flex-col text-white">
                        <span className="text-[1.2rem] font-black uppercase leading-none tracking-[-0.07em] sm:text-[1.45rem] md:text-[1.58rem]">
                            {firstName} <span className="text-[#a6a8b4]">{lastName}</span>
                        </span>

                        <span className="mt-2 flex items-center gap-3 pl-0.5 text-[0.52rem] font-semibold uppercase tracking-[0.36em] text-[#a0a4b0] sm:text-[0.62rem] sm:tracking-[0.46em]">
                            <span className="h-px w-4 bg-[#b0b2be]" />
                            {subtitle}
                        </span>
                    </a>

                    <div className="hidden items-center gap-4 md:flex lg:gap-8">
                        <nav className="flex flex-wrap items-center gap-x-7 gap-y-2 lg:gap-x-9">
                            {menuItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="group relative pb-1 text-[0.84rem] font-extrabold uppercase tracking-[0.2em] text-zinc-400 transition duration-300 hover:text-white"
                                >
                                    {item}
                                    <span className="absolute inset-x-0 bottom-0 h-px origin-right scale-x-0 bg-white transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hamburger / Cross button - outside header, always on top */}
            <button
                ref={buttonRef}
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                className={`fixed right-4 top-6 z-[70] flex h-11 w-11 items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300 md:hidden ${
                    menuOpen ? "bg-white/20 shadow-[0_0_24px_rgba(255,255,255,0.1)]" : "bg-white/10"
                }`}
                aria-label="Toggle menu"
            >
                <div className="flex flex-col items-center justify-center gap-[5px]">
                    <span className={`block h-[1.5px] w-5 rounded-full transition-all duration-300 ${menuOpen ? "translate-y-[6.5px] rotate-45 bg-white" : "bg-white/70"}`} />
                    <span className={`block h-[1.5px] w-5 rounded-full transition-all duration-300 ${menuOpen ? "scale-x-0 opacity-0" : "bg-white/70"}`} />
                    <span className={`block h-[1.5px] w-5 rounded-full transition-all duration-300 ${menuOpen ? "-translate-y-[6.5px] -rotate-45 bg-white" : "bg-white/70"}`} />
                </div>
            </button>

            {/* Backdrop */}
            <div
                onClick={() => setMenuOpen(false)}
                className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
                    menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            />

            {/* Slide-down mobile nav */}
            <div
                ref={menuRef}
                className={`fixed left-0 right-0 top-0 z-[65] border-b border-white/10 bg-[#0a0e17]/95 backdrop-blur-xl transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
                    menuOpen
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-full opacity-0 pointer-events-none"
                }`}
            >
                <div className="flex flex-col items-center gap-1 px-6 pb-8 pt-24">
                    {menuItems.map((item, index) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setMenuOpen(false)}
                            className={`w-full text-center text-[1.15rem] font-extrabold uppercase tracking-[0.18em] text-white/70 transition-all duration-300 hover:text-white hover:bg-white/5 rounded-xl py-3.5 ${
                                menuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                            }`}
                            style={{ transitionDelay: menuOpen ? `${80 + index * 50}ms` : "0ms" }}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}
