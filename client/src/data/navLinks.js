import { getServicesForNavigation } from "./services";

export const navLinks = [
  {
    id: 1,
    linkText: "Home",
    url: "/",
  },
  {
    id: 2,
    linkText: "Services",
    url: "/services",
    subLinks: getServicesForNavigation(),
    fullWidth: true, // Flag for full-width dropdown
  },
  {
    id: 3,
    linkText: "Projects",
    url: "/our-work",
  },
  {
    id: 31,
    linkText: "Softwares",
    url: "/projects",
  },
  {
    id: 4,
    linkText: "Company",
    url: "#",
    subLinks: [
      {
        id: 41,
        linkText: "About Us",
        url: "/about-us",
      },
      // {
      //   id: 42,
      //   linkText: "Team",
      //   url: "/team",
      // },
      {
        id: 44,
        linkText: "Gallery",
        url: "/gallery",
      },
      {
        id: 43,
        linkText: "Careers",
        url: "/careers",
      },
    ],
  },
];

export const mobileNavLinks = [
  {
    id: 1,
    linkText: "Home",
    url: "/",
  },
  {
    id: 2,
    linkText: "Services",
    url: "/services",
    subLink: getServicesForNavigation().map(service => ({
      id: service.id,
      linkText: service.linkText,
      url: service.url,
    })),
  },
  {
    id: 3,
    linkText: "Projects",
    url: "/our-work",
  },
  {
    id: 31,
    linkText: "Softwares",
    url: "/projects",
  },
  {
    id: 41,
    linkText: "About Us",
    url: "/about-us",
  },
  // {
  //   id: 42,
  //   linkText: "Team",
  //   url: "/team",
  // },
  {
    id: 5,
    linkText: "Gallery",
    url: "/gallery",
  },
  {
    id: 43,
    linkText: "Careers",
    url: "/careers",
  },
];



// {
//   id: 2,
//     linkText: "About us",
//       url: "/about-us",
//   subLinks: [
//     {
//       id: 24,
//       linkText: "Meet The Team",
//       url: "/team",
//     },
//     {
//       id: 21,
//       linkText: "Webfudge Network",
//       url: "/webfudge-network",
//     },
//     {
//       id: 22,
//       linkText: "Our Collaboration",
//       url: "/our-collaboration",
//     },
//     {
//       id: 23,
//       linkText: "Insight",
//       url: "/insights",
//     },
//   ],
// },