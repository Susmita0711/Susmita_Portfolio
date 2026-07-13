import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SocialBar from "./components/SocialBar";
import BiographySection from "./components/BiographySection";
import TechStackSection from "./components/TechStackSection";
import FeaturedWorksSection from "./components/FeaturedWorksSection";
import WorkImpactSection from "./components/WorkImpactSection";
import ProfessionalInsightsSection from "./components/ProfessionalInsightsSection";
import GetInTouchSection from "./components/GetInTouchSection";
import SiteFooter from "./components/SiteFooter";

function htmlToParagraphs(html) {
    if (!html) {
        return [];
    }

    return html
        .replace(/<\/p>\s*<p>/gi, "\n\n")
        .replace(/<[^>]+>/g, "")
        .split(/\n{2,}/)
        .map((entry) => entry.trim())
        .filter(Boolean);
}

function normalizePortfolioData(payload) {
    const site = payload?.site ?? {};

    return {
        site,
        socials: payload?.socials ?? { hero: [], footer: [] },
        tech: {
            biography: payload?.tech?.biography ?? [],
            ticker: payload?.tech?.ticker ?? [],
        },
        projects: (payload?.projects ?? []).map((project) => ({
            ...project,
            preview: project.preview ?? project.slug ?? project.title?.toLowerCase(),
        })),
        experiences: payload?.experiences ?? [],
        articles: (payload?.articles ?? []).map((article) => ({
            ...article,
            body: htmlToParagraphs(article.content),
        })),
        contactMethods: payload?.contactMethods ?? [],
    };
}

export default function App() {
    const [portfolioData, setPortfolioData] = useState(null);
    const theme = "dark";

    useEffect(() => {
        document.body.classList.remove("theme-light", "theme-dark");
        document.body.classList.add("theme-dark");

        const wasAtTop = sessionStorage.getItem("wasAtTop");
        sessionStorage.removeItem("wasAtTop");

        if (wasAtTop === "false") {
            setTimeout(() => {
                const aboutSection = document.getElementById("about");
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth" });
                }
            }, 300);
        }
    }, [theme]);

    useEffect(() => {
        function handleScroll() {
            sessionStorage.setItem("wasAtTop", window.scrollY < 100 ? "true" : "false");
        }

        function handleBeforeUnload() {
            sessionStorage.setItem("wasAtTop", window.scrollY < 100 ? "true" : "false");
        }

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);

    useEffect(() => {
        let cancelled = false;

        async function loadPortfolio() {
            try {
                const response = await fetch("/api/portfolio");
                if (!response.ok) {
                    throw new Error("Failed to load portfolio data");
                }

                const payload = await response.json();
                if (!cancelled) {
                    const normalized = normalizePortfolioData(payload);
                    setPortfolioData(normalized);
                }
            } catch (error) {
                console.error(error);
            }
        }

        loadPortfolio();

        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <div className={`grid-background min-h-screen text-zinc-950 theme-shell theme-${theme}`}>
            <div className="mx-auto min-h-screen w-full max-w-[1480px] px-4 sm:px-6 lg:px-10">
                <Navbar site={portfolioData?.site} />
                <main className="relative">
                    <section className="relative flex min-h-screen items-center py-28 sm:py-32 lg:py-36">
                        <HeroSection site={portfolioData?.site} />
                        <SocialBar socials={portfolioData?.socials?.hero} />
                    </section>
                    <BiographySection
                        site={portfolioData?.site}
                        skillTags={portfolioData?.tech?.biography?.map((item) => item.name)}
                    />
                    <TechStackSection items={portfolioData?.tech?.ticker} />
                    <FeaturedWorksSection projects={portfolioData?.projects} />
                    <WorkImpactSection experiences={portfolioData?.experiences} />
                    <ProfessionalInsightsSection
                        posts={portfolioData?.articles}
                        footerText={portfolioData?.site?.blogsFooterText}
                    />
                    <GetInTouchSection contactItems={portfolioData?.contactMethods} />
                    <SiteFooter site={portfolioData?.site} socials={portfolioData?.socials?.footer} />
                </main>
            </div>
        </div>
    );
}
