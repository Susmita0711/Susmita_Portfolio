import { useState } from "react";

const defaultBlogPosts = [
    {
        category: "Product & Engineering",
        readTime: "4 min read",
        date: "Feb 4, 2026",
        title: "From Idea to MVP: How Starting Small Changed the Way I Build",
        excerpt:
            "What late nights, small bugs, and unfinished ideas taught me about building real projects without waiting to feel ready.",
        tags: [
            "MVP",
            "Late Night Coding",
            "Frontend Development",
            "Learning by Building",
            "Product Thinking",
            "Real Projects",
        ],
        body: [
            "From Idea to MVP : How Starting Small Changed the Way I Build",
            "For a long time, I believed building something real required readiness. A proper plan. Clear architecture. Confidence in my skills. I thought shipping was something you did \"after\" everything made sense. Until then, ideas stayed safely in my head or inside notes.",
            "Most of my time went into thinking, not building. Planning felt productive. Watching others ship impressive projects felt inspiring and quietly intimidating. I convinced myself I was preparing, when in reality I was avoiding the risk of starting.",
            "What changed wasn't a sudden burst of motivation. It was a small, almost careless decision to start something. Just a simple frontend screen for a problem that mildly annoyed me. No roadmap. No expectation. Just code on a dark screen late at night.",
            "That tiny project taught me more than any perfect tutorial path. It taught me how friction appears in real work, how decisions become clearer once you're inside the problem, and how confidence is often built after action, not before it.",
            "Now I think of MVPs differently. They're not only about speed. They're about truth. They reveal whether an idea can survive contact with reality. And more importantly, they help you become the kind of builder who ships before certainty arrives.",
        ],
    },
    {
        category: "AI & Software Engineering",
        readTime: "5 min read",
        date: "Jan 5, 2026",
        title: "AI is a Multiplier, Not a Substitute",
        excerpt:
            "AI accelerates building, but it also reveals the difference between understanding a system and simply shipping one.",
        tags: ["Artificial Intelligence", "Developer Growth", "Engineering Judgment"],
        body: [
            "AI can help you move faster, explore ideas quicker, and reduce repetitive implementation work. But speed is not the same as understanding.",
            "The strongest engineers still need judgment. They need to know when a solution is fragile, when a system has hidden tradeoffs, and when generated output sounds confident but is structurally wrong.",
            "Used well, AI acts like a multiplier. It turns clarity into velocity. Used poorly, it becomes a shortcut that hides weak foundations under polished output.",
            "The goal isn't to compete with AI. The goal is to become the kind of engineer who can direct it well, verify it rigorously, and turn assistance into real product value.",
        ],
    },
    {
        category: "Cloud Computing",
        readTime: "5 min read",
        date: "Jan 2, 2026",
        title: "What Is Cloud Computing & Why Almost Everything Runs on It Today",
        excerpt:
            "A practical breakdown of why cloud platforms matter, what problems they solve, and how they became the default backbone for modern apps.",
        tags: ["Cloud Computing", "AWS", "Infrastructure"],
        body: [
            "Cloud computing is less about servers in the sky and more about flexible access to infrastructure, storage, networking, and compute when you need it.",
            "It matters because modern products need speed, reliability, and the ability to scale without rebuilding the foundation every time usage grows.",
            "The cloud changed how teams ship because it reduced setup friction. Instead of investing heavily in physical infrastructure first, teams can deploy, test, and grow incrementally.",
            "That is why almost everything runs on it today: the cloud turns infrastructure into a service, and that changes how quickly ideas can become products.",
        ],
    },
    {
        category: "System Design",
        readTime: "6 min read",
        date: "Dec 21, 2025",
        title: "Designing Systems That Stay Calm Under Growth",
        excerpt:
            "Scaling is rarely about one big architecture decision. It comes from small choices that reduce failure points before traffic ever arrives.",
        tags: ["System Design", "Scalability", "Backend Thinking"],
        body: [
            "Systems rarely break because of one dramatic mistake. More often, they degrade because of small assumptions that compound under pressure.",
            "Calm systems are built through boring clarity: sensible boundaries, predictable data flow, resilient retries, and observability that helps teams react early.",
            "Growth should not feel like panic. Good system design makes scale feel like something the product was prepared for, not something it survives by luck.",
        ],
    },
    {
        category: "Career & Craft",
        readTime: "4 min read",
        date: "Dec 9, 2025",
        title: "Why Strong Engineers Learn to Communicate Before They Lead",
        excerpt:
            "Technical depth matters, but clarity is what turns good individual work into trust, momentum, and lasting engineering impact.",
        tags: ["Developer Growth", "Leadership", "Communication"],
        body: [
            "Engineering influence does not start when someone gets a title. It starts when their thinking becomes understandable and useful to others.",
            "The ability to explain tradeoffs, align teams, and make complex work legible is what turns technical strength into leadership.",
            "Clarity creates trust. And trust is what allows engineers to shape product direction, not just contribute code.",
        ],
    },
];

function BlogCard({ post, onRead }) {
    const tags = Array.isArray(post.tags)
        ? post.tags
        : typeof post.tags === "string" && post.tags.trim()
        ? [post.tags]
        : [];

    return (
        <article className="flex h-full flex-col rounded-[26px] border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-9">
            
            {/* Top meta */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3 text-[1rem] text-zinc-600 dark:text-zinc-400">
                
                <span className="rounded-full bg-zinc-100 dark:bg-white/10 px-4 py-2 text-[0.9rem] font-semibold text-zinc-800 dark:text-white">
                    {post.category}
                </span>

                <span>{post.readTime}</span>

                <span className="ml-auto text-zinc-500 dark:text-zinc-400">
                    {post.date}
                </span>
            </div>

            {/* Title */}
            <h3 className="mt-6 text-[1.35rem] font-black leading-[1.15] tracking-[-0.05em] text-black dark:text-white sm:mt-8 sm:text-[2rem] md:text-[2.2rem]">
                {post.title}
            </h3>

            {/* Excerpt */}
            <div className="mt-8">
                <div className="text-[1rem] font-semibold text-black dark:text-white">
                    Excerpt
                </div>

                <p className="mt-3 text-[1.1rem] leading-[1.7] text-zinc-700 dark:text-zinc-400 sm:text-[1.15rem]">
                    {post.excerpt}
                </p>
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-x-3 gap-y-2 text-[0.95rem] text-zinc-500 dark:text-zinc-400">
                {tags.slice(0, 3).map((tag) => (
                    <span key={tag}>#{tag}</span>
                ))}
            </div>

            {/* Read button */}
            <button
                type="button"
                onClick={() => onRead(post)}
                className="mt-8 inline-flex w-fit items-center gap-3 text-[1.05rem] font-semibold text-black dark:text-white transition duration-300 hover:gap-4"
            >
                Read article →
            </button>
        </article>
    );
}

function ArticleView({ post, onBack }) {
    const tags = Array.isArray(post.tags)
        ? post.tags
        : typeof post.tags === "string" && post.tags.trim()
        ? [post.tags]
        : [];

    const body = Array.isArray(post.body)
        ? post.body
        : typeof post.body === "string" && post.body.trim()
        ? [post.body]
        : [];

    return (
        <div className="mx-auto max-w-[1040px]">
            
            {/* Back */}
            <button
                type="button"
                onClick={onBack}
                className="inline-flex items-center gap-3 text-[1.1rem] font-semibold text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
            >
                ← Back to all articles
            </button>

            {/* Meta */}
            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4 text-[1rem] text-zinc-500 dark:text-zinc-400">
                
                <span className="rounded-full bg-black dark:bg-white px-5 py-2 text-[0.9rem] font-semibold text-white dark:text-black">
                    {post.category}
                </span>

                <span>{post.readTime}</span>
                <span>•</span>
                <span>{post.date}</span>
            </div>

            {/* Title */}
            <h3 className="mt-8 text-[1.8rem] font-black leading-[1.06] tracking-[-0.06em] text-black dark:text-white sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem]">
                {post.title}
            </h3>

            {/* Tags */}
            <div className="mt-10 flex flex-wrap gap-3">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full bg-zinc-100 dark:bg-white/10 px-4 py-2 text-[0.95rem] text-zinc-700 dark:text-white"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Body */}
            <div className="mt-14 space-y-10 text-[1.1rem] leading-[1.75] text-zinc-700 dark:text-zinc-400 sm:text-[1.2rem]">
                {body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
            </div>
        </div>
    );
}

export default function ProfessionalInsightsSection({
    posts = defaultBlogPosts,
    footerText = "More articles and technical deep dives coming soon",
}) {
    const [selectedPost, setSelectedPost] = useState(null);

    return (
        <section
            id="blogs"
            className="border-t border-zinc-200 dark:border-white/10 pb-24 pt-20 sm:pt-24 lg:pb-32 lg:pt-28"
        >
            <div className="mx-auto max-w-[1320px]">

                {selectedPost ? (
                    <ArticleView post={selectedPost} onBack={() => setSelectedPost(null)} />
                ) : (
                    <>
                        {/* Heading */}
                        <div className="flex items-center gap-4">
                            <span className="h-px w-11 bg-zinc-400 dark:bg-white/40" />
                            <span className="text-base font-black uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                                Blogs
                            </span>
                        </div>

                        <h2 className="mt-5 text-[1.8rem] font-black tracking-[-0.06em] text-black dark:text-white sm:text-[3rem] md:text-[4.25rem] lg:text-[5rem]">
                            Professional <span className="text-zinc-400">Insights</span>
                        </h2>

                        {/* Cards */}
                        <div className="mt-14 grid gap-8 md:grid-cols-2">
                            {posts.map((post) => (
                                <BlogCard
                                    key={post.slug || post.title}
                                    post={post}
                                    onRead={setSelectedPost}
                                />
                            ))}
                        </div>

                        {/* Footer */}
                        <p className="mt-16 text-center text-[1.1rem] text-zinc-600 dark:text-zinc-400">
                            {footerText}
                        </p>
                    </>
                )}
            </div>
        </section>
    );
}