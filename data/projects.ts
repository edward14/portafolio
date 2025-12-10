export interface Project {
    id: string;
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    category: string;
    image: string;
    technologies: string[];
    features: string[];
    github?: string;
    demo?: string;
    year: string;
}

export const projects: Project[] = [
    {
        id: "1",
        slug: "proyecto-comercio",
        title: "Proyecto Comercio",
        description: "Sistema Web de Gestión Comercial para Tiendas y PyMES con dashboard interactivo, gestión de productos, ventas y clientes.",
        longDescription: `Sistema Web de Gestión Comercial completo diseñado para tiendas y pequeñas/medianas empresas. 
        
La aplicación permite gestionar todo el flujo comercial de un negocio, desde el inventario de productos hasta el seguimiento de ventas y clientes.

El sistema cuenta con un Dashboard interactivo que muestra métricas clave como ingresos totales, número de ventas y productos más vendidos con visualizaciones gráficas.`,
        category: "Sistema Web",
        image: "/projects/proyecto-comercio.png",
        technologies: [
            "React.js",
            "Vite",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "MongoDB",
            "Mongoose",
            "JWT",
            "Recharts",
        ],
        features: [
            "Dashboard con métricas en tiempo real",
            "Gestión de productos e inventario",
            "Sistema de categorías",
            "Registro de ventas",
            "Historial de transacciones",
            "Gestión de clientes",
            "Autenticación segura con JWT",
            "Carga de imágenes de productos",
        ],
        github: "https://github.com/tu_usuario/proyecto-comercio",
        year: "2024",
    },
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
    return projects.map((project) => project.slug);
}
