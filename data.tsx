import { BellPlus, BookText, Briefcase, Brush, Code2, CodeSquare, Home, Inbox, Mail, PanelsTopLeft, Phone, UserRound, UsersRound, Wrench } from "lucide-react";

export const dataAboutMe = [
    {
        id: 1,
        name: "Experience",
        icon: <Briefcase />,
        description: "This is my first year",
    },
    {
        id: 2,
        name: "Clients",
        icon: <UsersRound />,
        description: "Iberdrola Noray-Bioinformatics ONG Save-Africa",
    },
    {
        id: 3,
        name: "Projects",
        icon: <Wrench />,
        description: "I am starting 3 projects",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <Home size={20} />,
        link: "#home",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={20} />,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={20} />,
        link: "#services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={20} />,
        link: "#portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Mail size={20} />,
        link: "#contact",
    },
];

export const dataSlider = [
    {
        id: 1,
        url: "/slider-1.jpg",
    },
    {
        id: 2,
        url: "/slider-2.jpg",
    },
    {
        id: 3,
        url: "/slider-3.jpg",
    },
    {
        id: 4,
        url: "/slider-4.jpg",
    },
]

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image1.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Agile Web Development",
        image: "/image2.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Web Strategies",
        image: "/image3.png",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];


export const dataExperience = [
    {
        id: 1,
        title: "Frontend Development",
        experience: [
            {
                name: "HTML",
                subtitle: "Average",
                value: 60,
            },
            {
                name: "CSS",
                subtitle: "Average",
                value: 60,
            },
            {
                name: "JavaScript",
                subtitle: "Average",
                value: 50,
            },
            {
                name: "Tailwind CSS",
                subtitle: "Beginner",
                value: 20,
            },
            {
                name: "React",
                subtitle: "Low-middle",
                value: 40,
            },
            {
                name: "Bootstrap",
                subtitle: "Beginner",
                value: 20,
            },
        ],
    },
    {
        id: 2,
        title: "Backend Development",
        experience: [
            {
                name: "Node JS",
                subtitle: "Mid-high",
                value: 60,
            },
            {
                name: "Oracle Database",
                subtitle: "Mid-high",
                value: 70,
            },
            {
                name: "Python",
                subtitle: "Basic",
                value: 30,
            },
            {
                name: "MySQL",
                subtitle: "Mid-high",
                value: 60,
            },
            {
                name: "PHP",
                subtitle: "Average",
                value: 60,
            },
            {
                name: "NextJS",
                subtitle: "Basic",
                value: 30,
            },
        ],
    },
];


export const dataServices = [
    {
        id: 1,
        title: "Web Development",
        icon: <PanelsTopLeft />,
        features: [
            {
                name: "Custom Website Development",
            },
            {
                name: "Responsive Design and Development",
            },
            {
                name: "SEO Optimization",
            },
            {
                name: "Web Application Development",
            },
            {
                name: "Content Management",
            },
            {
                name: "E-commerce",
            },
            {
                name: "Continuous Maintenance and Support",
            },
        ],
    },
    {
        id: 2,
        title: "Content creation",
        icon: <BellPlus />,
        features: [
            {
                name: "Original and high-Quality Content Writing",
            },
            {
                name: "Graphic Design for a Striking Image",
            },
            {
                name: "Professional Editing of Texts and Visual Materials",
            },
            {
                name: "Effective Content Marketing Strategies",
            },
            {
                name: "Clear and Visually Appealing Infographic Creation",
            },
            {
                name: "Professional Photography to Capture Exceptional Moments",
            },
        ],
    },
    {
        id: 3,
        title: "UI/UX Design",
        icon: <Brush />,
        features: [
            {
                name: "Intuitive Design for a Smooth User Experience",
            },
            {
                name: "Interactive Prototyping to Visualize the Interface",
            },
            {
                name: "User Research to Understand Needs and Expectations",
            },
            {
                name: "Usability Optimization to Improve Accessibility",
            },
            {
                name: "User Testing to Evaluate the User Experience",
            },
            {
                name: "Responsive Design to Adapt to Different Devices",
            },
        ],
    },
];


export const dataContact = [
    {
        id: 1,
        title: "Teléfono",
        subtitle: "+34 677 66 66 33",
        link: "tel:+34677666633",
        icon: <Phone />,
    },
    {
        id: 2,
        title: "LinkedIn",
        subtitle: "LinkedIn/Juan_Camero",
        link: "https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin",
        icon: <Code2 />,
    },
    {
        id: 3,
        title: "Email",
        subtitle: "Professional Email",
        link: "mailto:p.rojas.son@gmail.com",
        icon: <Inbox />,
    },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "I am so happy with the website that Juan Camero created for my business. It is beautiful, user-friendly, and it has helped me to attract more customers.",
        imageUrl: "/profile-1.jpeg",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "I was blown away by the quality of the web application that Juan Camero developed for me. It is fast, reliable, and it has helped me to streamline my business processes.",
        imageUrl: "/profile-2.jpeg",
    },
    {
        id: 3,
        name: "María García",
        description:
            "I am thrilled with the e-commerce site that Juan Camero built for me. It is easy to use, it looks great, and it has helped me to increase my sales.",
        imageUrl: "/profile-3.jpeg",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "I am so grateful to Juan Camero for the content marketing strategy they created for me. It has helped me to attract more visitors to my website and to convert them into customers.",
        imageUrl: "/profile-3.jpeg",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "I am so happy with the Agile web development services that Juan Camero provided for me. They were flexible, adaptive, and they delivered value to me quickly and efficiently.",
        imageUrl: "/profile-2.jpeg",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "I am so impressed with the professionalism and expertise of Juan Camero. They took the time to understand my business and my needs, and they delivered a web solution that exceeded my expectations. I highly recommend Juan Camero for all of your web needs.",
        imageUrl: "/profile-3.jpeg",
    },
];