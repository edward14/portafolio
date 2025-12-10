import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Edward Echandia",
    description: "Artículos y tutoriales sobre desarrollo web, React, Next.js y diseño por Edward Echandia.",
};

export default function BlogPage() {
    const posts = [
        {
            id: 1,
            title: "El futuro de React Server Components",
            date: "10 Dic, 2024",
            excerpt: "Explorando cómo los RSC están cambiando la forma en que construimos aplicaciones web en Next.js.",
        },
        {
            id: 2,
            title: "Diseño Minimalista: Menos es Más",
            date: "05 Nov, 2024",
            excerpt: "Principios clave para crear interfaces limpias que no abrumen al usuario.",
        },
        {
            id: 3,
            title: "Optimizando Tailwind CSS",
            date: "20 Oct, 2024",
            excerpt: "Trucos y consejos para mantener tu CSS bajo control en proyectos grandes.",
        },
    ];

    return (
        <div className="space-y-12 pb-20">
            <header>
                <h1 className="text-5xl md:text-8xl font-black mb-6">Blog</h1>
                <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-2xl font-light">
                    Pensamientos, tutoriales y notas sobre desarrollo.
                </p>
            </header>

            <div className="space-y-8">
                {posts.map((post) => (
                    <article key={post.id} className="group border-b border-neutral-200 dark:border-neutral-700 pb-8 cursor-pointer">
                        <span className="text-sm font-mono text-neutral-400 dark:text-neutral-500 mb-2 block">{post.date}</span>
                        <h2 className="text-3xl font-bold mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{post.title}</h2>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
                            {post.excerpt}
                        </p>
                    </article>
                ))}
            </div>
        </div>
    );
}
