export const MenuItems = [
    {
        id: 1,
        title: "Home",
        path: "/",

    }, {
        id: 2,
        title: "About Us",
        path: "/about-us",
    }, {
        
        id: 3,
        title: "Services",
        path: "/services",
        children: [
            {
                id: 31,
                title: "Sustainability Consulting",
                path: "/sustainability-consulting",
                children: [
                    {
                        id: 311,
                        title: "Environmental Projects",
                        path: "/environmental-projects",
                    },
                    {
                        id: 312,
                        title: "Social Factor",
                        path: "/social-factor",
                    },
                    {
                        id: 313,
                        title: "Governance Factor",
                        path: "/governance-factor",

                    },

                ],

            },
            {
                id: 32,
                title: "Engineering",
                path: "/engineering",

            },
            {
                id: 33,
                title: "Enterprise Asset Management",
                path: "/enterprise-asset-management",
            },
            {
                id: 34,
                title: "Risk Management",
                path: "/risk-management",
            },
        ]
    },
    {
        id: 4,
        title: "Projects",
        children: [{
            id: 41,
            title: "Engineering Projects",
            path: "/engineering-project",
        },
        {
            id: 42,
            title: "Data Management Project",
            path: "/data-management-project",

        },
        {
            id: 43,
            title: "Risk Management Project",
            path: "/risk-management-project",
        },
        ]
    },
    {
        id: 5,
        title: "Careers",
        path: "/careers",

    },
    {
        id: 6,
        title: "Contact Us",
        path: "/contact-us",

    },];


