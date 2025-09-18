export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },

  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Some of my tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "I believe in the importance of lifelong learning, and I make it a priority to regularly explore and master new technologies.",
    description: "Continuous Learning",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Gower",
    des: "Full-stack application developed for a car rental company in Mendoza that connects vehicle owners with clients. The platform features a dynamic catalog of available cars based on selected dates, generates real-time price quotations, and allows users to complete reservations through an integrated form. Contracts are automatically sent to both parties, and the entire system is connected to Google Sheets, which functions as a lightweight database to store pricing, availability, and vehicle details. We built both the backend and frontend, achieving a seamless and efficient reservation flow.",
    img: "/gower2.png",
    iconLists: ["/re.svg", "/tail.svg", "/javascript.svg", "/nodejs.svg"],
    link: "https://gower.ar/",
  },
  {
    id: 2,
    title: "Colegio de Abogados de Mendoza",
    des: "Official full-stack website for the Bar Association of Mendoza. The platform provides public access to professional directories, institutional information, edict publications, and online payments through MercadoPago, including fixed legal fees. It also includes a complete administration panel where authorized users can manage content, upload professionals, view receipts, and configure different features of the site. This project ensures a modern, user-friendly experience for both members of the association and the general public.",
    img: "/colejus.png", // guarda esta imagen en /public
    iconLists: ["/re.svg", "/tail.svg", "/python.png"], // puedes agregar un icono de MP si lo tenés
    link: "https://colejus.com.ar/",
  },

  {
    id: 3,
    title: "Vand",
    des: "Responsive landing page for Vand, an Argentine company dedicated to agrochemicals, water treatments, antifoams, and related products. The site presents multiple views with information about the company and its product portfolio, while featuring a functional contact form that allows potential clients to send inquiries directly via email. The design emphasizes clarity and accessibility to ensure a smooth user experience across devices.",
    img: "/vand.png", // guardá la imagen en /public
    iconLists: ["/re.svg", "/tail.svg", "/nodejs.svg"], // ajustá según tu stack real
    link: "https://www.vandpq.com.ar/", // si tenés un deploy o demo online, actualizá este link
  },
  {
    id: 4,
    title: "IPL",
    des: "Robust full-stack application built for IPL, a company managing multiple warehouses. The platform includes user authentication, a structured database, and an admin panel to control the companies operating within the system. Each company can manage stock reception, create and track orders, register products, and perform batch-based stock counts to verify inventory accuracy. The app also allows task assignment to operators, such as preparing orders or handling shipments, among other advanced features. The project required implementing complex business logic to ensure reliability and scalability.",
    img: "/ipl.png", // guardá la imagen en /public
    iconLists: ["/re.svg", "/tail.svg", "/nodejs.svg", "/python.png"], // podés ajustar los íconos según el stack real
    link: "http://34.69.242.24/", // si tenés demo o repo online, poné el link aquí
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Freelance Frontend Developer",
    desc: "Worked closely with a marketing specialist building responsive landing pages for different companies, focusing on modern design, usability, and conversion optimization.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    desc: "Currently working at a software development and automation company, where I design and implement full-stack applications, APIs, and frontend interfaces. My work also includes integrating AI into web platforms and managing deployments.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Projects",
    desc: "Developed several custom applications from concept to deployment, gaining experience in client communication, requirements analysis, and delivery of end-to-end solutions.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Continuous Learning & Growth",
    desc: "Passionate about technology and self-improvement. I constantly learn new tools, frameworks, and best practices, applying them to real-world projects and expanding my skill set every day.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    ref: "https://github.com/FacuPadilla",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
    ref: "https://www.linkedin.com/in/facundo-padilla-60371b26a/",
  },
];
