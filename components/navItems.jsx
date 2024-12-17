export const menuItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About us",
    href: "/about",
    submenu: {
      heading: "About Us",
      sections: [
        {
          title: "About C23",
          href: "/about",
          items: [
            { title: "Life at C23", href: "/about#life-at-c23" },
            { title: "Mission & Vision", href: "/about/#mission-vision" },
            { title: "Company History", href: "/about/#history" },
            { title: "Client Stories" },
            { title: "Locations" },
          ],
        },
        {
          title: "Leadership",
          href: "/about/leadership",
          items: [
            { title: "Leadership Team" },
            { title: "Message From CEO" },
            { title: "Leadership Thoughts & Case Studies" },
          ],
        },
      ],
    },
  },
  {
    title: "Work with Clients",
    href: "/work-with-clients",
    submenu: {
      heading: "Work with Clients",
      sections: [
        {
          title: "Why Work with us",
          href: "/work-with-clients",
          items: [
            { title: "Our Approach" },
            { title: "Client Testimonials" },
            { title: "Growth Opportunities" },
          ],
        },
        {
          title: "Services We Provide",
          href: "/work-with-clients/services",
          items: [
            { title: "Consulting" },
            { title: "Digital Transformation" },
            { title: "Salesforce Implementations" },
            { title: "Managed Services" },
            { title: "Custom Solutions" },
          ],
        },
        {
          title: "Industries",
          href: "/work-with-clients/industries",
          items: [
            { title: "Banking & Finance" },
            { title: "Healthcare" },
            { title: "Retail" },
            { title: "Manufacturing" },
            { title: "Education" },
          ],
        },
        {
          title: "Expertise",
          href: "/work-with-clients/expertise",
          items: [
            { title: "Technical Solutions" },
            { title: "Business Strategy" },
            { title: "Operational Excellence" },
          ],
        },
      ],
    },
  },
  {
    title: "Case Studies",
    href: "/case-studies",
    submenu: {
      heading: "Case Studies",
      sections: [
        {
          title: "Client Stories",
          href: "/case-studies",
          items: [
            { title: "Success Stories" },
            { title: "Client Testimonials" },
          ],
        },
        {
          title: "Reports & Research",
          href: "/case-studies/reports",
          items: [
            { title: "Blogs" },
            { title: "Research Studies" },
            { title: "Market Insights" },
          ],
        },
      ],
    },
  },
  {
    title: "News Room",
    href: "/news-room",
    submenu: {
      heading: "News & Updates",
      sections: [
        {
          title: "News",
          href: "/news-room",
          items: [{ title: "Company News" }, { title: "Industry News" }],
        },
        {
          title: "List of Events",
          href: "/news-room/events",
          items: [
            { title: "Event Calendar" },
            { title: "Event Recaps" },
            { title: "Webinar" },
          ],
        },
      ],
    },
  },
  {
    title: "Careers",
    href: "/careers",
    submenu: {
      heading: "Careers",
      sections: [
        {
          title: "Join Our Team",
          href: "/careers",
          items: [
            { title: "Job Categories" },
            { title: "Application Process" },
            { title: "Why Join Us" },
            { title: "Benefits" },
            { title: "Employee Testimonials" },
          ],
        },
        {
          title: "Careers",
          href: "/careers/info",
          items: [
            { title: "Career Path Stories" },
            { title: "Employee Responsibilities" },
            { title: "Our Initiatives" },
          ],
        },
      ],
    },
  },
];
