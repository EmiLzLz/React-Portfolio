// Datos de los proyectos
import adpmxImg from "../assets/images/adpmx.webp";
import calaveriaImg from "../assets/images/calaveria.webp";
import reportsImg from "../assets/images/dashboard_company.webp";
import liveChatImg from "../assets/images/liveChat.webp";
import maeImg from "../assets/images/mexicoaeroespacial.webp";
import pemImg from "../assets/images/pem.webp";
import personalDashImg from "../assets/images/personalDashboard.webp";
import sSearcherImg from "../assets/images/seriesSearcher.webp";

export const projects = [
  {
    stack: ["React", "Tailwind CSS", "React Router"],
    title: "PERSONAL DASHBOARD",
    description:
      "Modern React dashboard application showcasing advanced frontend development skills. Built with Vite, Tailwind CSS, and React Router, featuring dynamic theming, persistent data storage, interactive charts (Recharts), notes management with search functionality, and comprehensive testing suite. Demonstrates modular architecture and custom hooks implementation.",
    repoUrl: "https://github.com/EmiLzLz/personal-Dashboard",
    viewUrl: "https://emilzlz.github.io/personal-Dashboard",
    image: personalDashImg,
  },
  {
    stack: ["Wordpress", "Elementor"],
    title: "ADPMX Website",
    description:
      "Complete corporate website redesign. Created mockups in Figma and developed the new interface in WordPress using Elementor, improving user experience and modernizing the company's visual identity.",
    repoUrl: "",
    viewUrl: "https://adpmx.com/",
    image: adpmxImg,
  },
  {
    stack: ["Wordpress", "Elementor", "Shopify"],
    title: "CALAVERIA Website",
    description:
      "E-commerce for Mexican clothing brand specializing in skull designs. Developed the site in WordPress with Elementor and set up the store in Shopify with size and color variations. Includes responsive design and optimized shopping experience.",
    repoUrl: "",
    viewUrl: "https://calaveria.mx/",
    image: calaveriaImg,
  },
  {
    stack: ["Wordpress", "Elementor", "Shopify"],
    title: "MEXICOAEROESPACIAL Website",
    description:
      "Specialized aerospace news website with content management system. Adapted WordPress template for the aerospace sector and integrated Shopify store. Client regularly publishes content autonomously.",
    repoUrl: "",
    viewUrl:
      "https://mexicoaeroespacial.mx/",
    image: maeImg,
  },
  {
    stack: ["Wordpress", "Elementor", "Javascript"],
    title: "PULSO ECONOMICO DE MORELOS",
    description:
      "Economic indicators demo platform for the Government of Morelos. Developed in WordPress with JavaScript for interactive data visualization. Features dynamic charts system and visual mockup of the state's economic cycles concept.",
    repoUrl: "",
    viewUrl: "https://synapses.mx/",
    image: pemImg,
  },
  {
    stack: ["React", "Tailwind CSS"],
    title: "TV Series Searcher",
    description:
      "A React project that allows users to access information on numerous series, including summaries, statuses, ratings, networks, and more. TVMAZE is the project's chosen API.",
    repoUrl: "https://github.com/EmiLzLz/seriesSearcher",
    viewUrl: "https://emilzlz.github.io/seriesSearcher/",
    image: sSearcherImg,
  },
  {
    stack: ["React", "Spring Boot", "MySQL"],
    title: "CHECKFRONT REPORT SYSTEM",
    description:
      "Full-stack reporting system demo built for a client who wanted to visualize their Checkfront booking platform data. The demo uses Excel file uploads to simulate data processing and generate interactive charts and reports. Built with Spring Boot backend (JWT authentication, JPA, MySQL) and React frontend using a Creative Tim template, customized with Tailwind CSS, dynamic charts, and dark mode. Demonstrates the proposed dashboard functionality using sample data.",
    repoUrl: "https://github.com/EmiLzLz/excel-report-dashboard",
    viewUrl: "",
    image: reportsImg,
  },
  {
    stack: ["React", "Tailwind CSS", "MySQL", "Socket.io", "Node.js"],
    title: "Live Chat",
    description:
      "React made it through a live conversation. To complete the project, I used the Socket.io library. furthermore a mysql database for storing the mails. I'll shortly implement the required code to allow the app to persist messages.",
    repoUrl: "https://github.com/EmiLzLz/liveChat",
    viewUrl: "",
    image: liveChatImg,
  },
];
