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
        github: "https://github.com/edward14/proyecto-comercio",
        year: "2024",
    },
    {
        id: "2",
        slug: "sistema-gestion-medica",
        title: "Sistema de Gestión Médica",
        description: "Plataforma integral para clínicas que permite gestión de citas, historias clínicas electrónicas y facturación.",
        longDescription: "Este proyecto se encuentra actualmente en fase de desarrollo activo. Estamos implementando una arquitectura de microservicios para garantizar la escalabilidad y seguridad de los datos sensibles.",
        category: "En Desarrollo",
        image: "/projects/placeholder.png", // Using a placeholder, effectively consistent with "Coming Soon"
        technologies: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
        features: ["Gestión de Citas", "Historia Clínica", "Facturación Electrónica"],
        year: "2025",
        demo: "#",
        github: "#"
    },
    {
        id: "3",
        slug: "app-finanzas-personales",
        title: "App de Finanzas Personales",
        description: "Aplicación móvil y web para el seguimiento de gastos, presupuestos y metas de ahorro con integración bancaria.",
        longDescription: "Proyecto en etapa de diseño y prototipado. El objetivo es crear una experiencia de usuario fluida para el control financiero personal.",
        category: "Próximamente",
        image: "/projects/placeholder.png",
        technologies: ["React Native", "Expo", "Supabase"],
        features: ["Dashboard Financiero", "Sincronización Bancaria", "Metas de Ahorro"],
        year: "2025",
        demo: "#",
        github: "#"
    }
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
    return projects.map((project) => project.slug);
}
