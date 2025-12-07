export const softwareProjects = [
    {
        id: 1,
        slug: "crm-system",
        title: "Customer Relationship Management System (CRM)",
        category: "CRM",
        type: "Software Development",
        img_url: "/images/clients/crm/image.png",
        project_imgs: [
            "/images/clients/crm/Screenshot 2025-12-01 103532.png",
            "/images/clients/crm/Screenshot 2025-12-01 103608.png",
            "/images/clients/crm/Screenshot 2025-12-01 103657.png",
            "/images/clients/crm/Screenshot 2025-12-01 104743.png",
            "/images/clients/crm/Screenshot 2025-12-01 103726.png",
            "/images/clients/crm/Screenshot 2025-12-01 104438.png",
            "/images/clients/crm/Screenshot 2025-12-01 104509.png",
            "/images/clients/crm/Screenshot 2025-12-01 104532.png",
        ],
        short_des: "Comprehensive Customer Relationship Management system with advanced analytics and automation",
        technologies: [
            "React.js",
            "Node.js",
            "PostgreSQL",
            "Redis",
            "AWS",
            "Docker",
            "Microservices Architecture"
        ],
        services_offered: [
            "Full-Stack Development",
            "Database Design",
            "API Development",
            "Cloud Deployment",
            "System Integration",
            "Performance Optimization"
        ],
        key_highlights: [
            "Scalable microservices architecture supporting 10,000+ concurrent users",
            "Real-time analytics dashboard with custom reporting",
            "Automated workflow engine for sales pipeline management",
            "Multi-tenant architecture with role-based access control",
            "RESTful API with comprehensive documentation",
            "Advanced search and filtering capabilities"
        ],
        introduction: "A comprehensive Enterprise CRM system designed to streamline customer relationship management, sales processes, and business analytics. Built with modern technologies to handle enterprise-scale operations.",
        solution_offered: "We developed a full-featured CRM system with advanced capabilities including contact management, sales pipeline tracking, automated workflows, real-time analytics, and seamless integrations. The system is built on a microservices architecture ensuring scalability and reliability.",
        features: [
            "Contact & Lead Management",
            "Sales Pipeline Tracking",
            "Automated Workflows",
            "Email Integration",
            "Document Management",
            "Advanced Analytics & Reporting",
            "Custom Dashboards",
            "Mobile Responsive Design",
            "API for Third-party Integrations",
            "Multi-tenant Support"
        ],
        stats: {
            users: "10,000+",
            responseTime: "< 200ms",
            uptime: "99.9%",
            dataProcessed: "1M+ records/day"
        },
        date: "2024"
    },
    // {
    //     id: 2,
    //     slug: "project-management-system",
    //     title: "Project Management System",
    //     category: "Project Management",
    //     type: "Software Development",
    //     img_url: "/images/projects/pm/pm-hero.png",
    //     project_imgs: [
    //         "/images/projects/pm/pm-dashboard.png",
    //         "/images/projects/pm/pm-tasks.png",
    //         "/images/projects/pm/pm-timeline.png",
    //     ],
    //     short_des: "Advanced project management platform with collaboration tools and real-time updates",
    //     technologies: [
    //         "Next.js",
    //         "TypeScript",
    //         "MongoDB",
    //         "Socket.io",
    //         "GraphQL",
    //         "AWS Lambda",
    //         "Serverless Architecture"
    //     ],
    //     services_offered: [
    //         "Full-Stack Development",
    //         "Real-time Collaboration",
    //         "Cloud Infrastructure",
    //         "Mobile App Development",
    //         "Third-party Integrations",
    //         "Performance Optimization"
    //     ],
    //     key_highlights: [
    //         "Real-time collaboration with live updates and notifications",
    //         "Advanced Gantt charts and timeline visualization",
    //         "Resource allocation and capacity planning tools",
    //         "Integrated time tracking and reporting",
    //         "Custom workflow builder for different project types",
    //         "Mobile apps for iOS and Android"
    //     ],
    //     introduction: "A powerful project management platform that enables teams to plan, track, and deliver projects efficiently. Features include real-time collaboration, advanced scheduling, and comprehensive reporting.",
    //     solution_offered: "We built a comprehensive project management solution with real-time collaboration features, advanced task management, resource planning, and analytics. The platform supports multiple project methodologies and integrates with popular tools.",
    //     features: [
    //         "Task & Subtask Management",
    //         "Gantt Charts & Timeline View",
    //         "Real-time Collaboration",
    //         "File Sharing & Document Management",
    //         "Time Tracking & Reporting",
    //         "Resource Management",
    //         "Custom Workflows",
    //         "Team Communication",
    //         "Mobile Apps (iOS & Android)",
    //         "Third-party Integrations"
    //     ],
    //     stats: {
    //         projects: "50,000+",
    //         tasks: "5M+",
    //         users: "100,000+",
    //         uptime: "99.95%"
    //     },
    //     date: "2024"
    // },
];

export const getProjectBySlug = (slug) => {
    return softwareProjects.find(project => project.slug === slug);
};

export const getProjectsByCategory = (category) => {
    return softwareProjects.filter(project => project.category === category);
};

export const getAllCategories = () => {
    const categories = [...new Set(softwareProjects.map(project => project.category))];
    return categories;
};

export const getAllProjects = () => {
    return softwareProjects;
};
