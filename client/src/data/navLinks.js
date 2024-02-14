export const navLinks = [
  {
    id: 1,
    linkText: "Work",
    url: "/our-work",
  },

  {
    id: 2,
    linkText: "About us",
    url: "/about-us",
    subLinks: [
      {
        id: 21,
        linkText: "Webfudge Network",
        url: "/webfudge-network",
      },
      // {
      //   id: 22,
      //   linkText: "Our Collaboration",
      //   url: "/our-collaboration",
      // },
      {
        id: 23,
        linkText: "Insight",
        url: "/insights",
      },
      {
        id: 24,
        linkText: "Meet The Team",
        url: "/team",
      },
    ],
  },
  {
    id: 3,
    linkText: "Gallery",
    url: "/gallery",
  },
  {
    id: 4,
    linkText: "Careers",
    url: "https://webfudgeagency.zohorecruit.in/jobs/Careers",
    target: "_blank"
  },
];

export const mobileNavLinks = [
  {
    id: 1,
    linkText: "Work",
    url: "/our-work",
  },

  {
    id: 2,
    linkText: "About us",
    url: "/about-us",
  },
  {
    id: 21,
    linkText: "Network",
    url: "/webfudge-network",
    subLink: true,
  },
  {
    id: 23,
    linkText: "Team",
    url: "/team",
    subLink: true,
  },
  {
    id: 3,
    linkText: "Insight",
    url: "/insights",
  },
  {
    id: 4,
    linkText: "Gallery",
    url: "/gallery",
  },
  {
    id: 5,
    linkText: "Careers",
    url: "https://webfudgeagency.zohorecruit.in/jobs/Careers",
    target: "_blank"
  },
];
