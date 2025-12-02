import { clients } from "@/src/data/clients";
import { getAllServices } from "@/src/data/services";
import { getAllProjects } from "@/src/data/softwareProjects";

export default function sitemap() {


    const clientEntries = clients.map((item) => {
        return { url: `${process.env.NEXT_PUBLIC_BASE_URL}/our-work/${item.id}`, lastModified: new Date(), changeFrequency: "monthly", }


    })

    const services = getAllServices();
    const serviceEntries = services.map((service) => {
        return { url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/${service.slug}`, lastModified: new Date(), changeFrequency: "monthly" }
    })

    const projects = getAllProjects();
    const projectEntries = projects.map((project) => {
        return { url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects/${project.slug}`, lastModified: new Date(), changeFrequency: "monthly" }
    })


    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
            lastModified: new Date()
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/services`,
            lastModified: new Date()
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/our-work`,
            lastModified: new Date()
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/gallery`,
            lastModified: new Date()
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/team`,
            lastModified: new Date()
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/about-us`,
            lastModified: new Date()
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact-us`,
            lastModified: new Date()
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects`,
            lastModified: new Date()
        },
        ...clientEntries,
        ...serviceEntries,
        ...projectEntries
    ]
}