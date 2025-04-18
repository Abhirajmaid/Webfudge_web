import { clients } from "@/src/data/clients";

export default function sitemap() {


    const clientEntries = clients.map((item) => {
        return { url: `${process.env.NEXT_PUBLIC_BASE_URL}/our-work/${item.id}`, lastModified: new Date(), changeFrequency: "monthly", }


    })


    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
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
        ...clientEntries
    ]
}