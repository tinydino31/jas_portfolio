import myPhoto from './assets/images/myphoto_sunshine.jpg';
<img src={myPhoto} alt="Jashanjot Kaur's profile photo" />


const logotext = "Jashanjot";
const meta = {
    title: "Jashanjot Kaur",
    description: "I’m Jashanjot Kaur, a Software Engineer specializing in UI/UX design, accessibility, and usability testing.",
};


const introdata = {
    title: "I’m Jashanjot Kaur",
    animated: {
        first: "I design intuitive user experiences",
        second: "I build accessible applications",
        third: "I collaborate in Agile teams",
    },
    description: "Passionate about crafting user-friendly, inclusive digital experiences through UI/UX research, usability testing, and accessibility compliance.",
    your_img_url: myPhoto,
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I’m a passionate learner who believes in continuous growth and adaptability. With a strong foundation in programming, I enjoy building efficient and user-friendly digital experiences. My skills include C#, Java, SQL, HTML, CSS, Python, and Kotlin, along with experience in UI/UX design, accessibility, and prototyping. I work well in team environments, following Agile and Scrum methodologies, and have experience with tools like Git/GitHub, Visual Studio, IntelliJ, and SQL Developer. Whether it's designing intuitive interfaces or optimizing backend systems, I approach every project with curiosity and dedication. I’m always eager to learn, take on new challenges, and create meaningful solutions. ",
};

const skills = [
    { name: "UI/UX Research", value: 90 },
    { name: "Figma", value: 85 },
    { name: "WCAG Compliance", value: 80 },
    { name: "Usability Testing", value: 85 },
    { name: "Prototyping", value: 80 },
    { name: "React.js", value: 75 },
    { name: "Node.js", value: 70 },
    { name: "Java", value: 88 },
    { name: "SQL", value: 90 },
    { name: "C# (.NET)", value: 80 },
];

const services = [
    {
        title: "UI/UX Design & Usability Testing",
        description: "Conducting user research, wireframing, prototyping, and ensuring accessibility compliance for intuitive digital experiences.",
    },
    {
        title: "Full-Stack Development",
        description: "Building scalable web applications with a focus on accessibility, responsive design, and seamless user interaction.",
    },
    {
        title: "Web Development",
        description: "Crafting customized websites that reflect your brand identity, enhance user experience, and engage your target audience.",
    },
    {
        title: "Database Development",
        description: "Designing and developing secure, efficient, and scalable database solutions that ensure your data is organized and accessible.",
    },
    {
        title: "Backend Development",
        description: "Providing ongoing support and maintenance for backend systems, ensuring performance, scalability, and security as your business grows.",
    },
    {
        title: "Software Development",
        description: "Delivering tailored software solutions across platforms with a focus on scalability, performance, and efficiency.",
    },
    {
        title: "Android Development",
        description: "Creating impactful Android apps that connect your vision with your users, building meaningful relationships and long-term engagement.",
    },
];


const dataportfolio = [
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "Booky - Online Book Management Application: Designed UI/UX for seamless user interaction.",
        link: "https://booky-le7y.onrender.com/",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "Software Requirements Specification Document: Led creation of an SRS document for a diabetes management system, detailing UML use cases, technical specs, and functional requirements.",
        link: "https://docs.google.com/document/d/1hRHrgzOjpub_FAqOZSB9UVftvxH0WTFI/edit?usp=drive_link&ouid=110287580790279967497&rtpof=true&sd=true",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "Weather Forecast Application: Developed a dynamic app integrating APIs to display real-time weather data.",
        link: "http://studentweb.cencol.ca/jkau1146/assignment4_125/assignment4_125.html",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "Anup Rai Realty Inc. Website: Designed and developed a responsive real estate website showcasing listings and contact details.",
        link: "http://studentweb.cencol.ca/jkau1146/final213/HomePage.html",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "Bug Smasher Game: Built an interactive browser-based game demonstrating animation and user interaction techniques.",
        link: "http://studentweb.cencol.ca/jkau1146/assignment3_125/assignment3_125.html",
    },

];

const contactConfig = {
    YOUR_EMAIL: "kaurjashanjot31@gmail.com",
    YOUR_FONE: "437-603-9351",
    description: " Hoping to be a resource and be of help in your journey in any way possible.",
    YOUR_SERVICE_ID: "service_ftpj84v",
    YOUR_TEMPLATE_ID: "template_ncs6m0a",
    YOUR_USER_ID: "ODC-htiOqP0dMDJAQ",
};

const socialprofils = {
    github: "https://github.com/tinydino31",
    linkedin: "https://www.linkedin.com/in/jashanjot-kaur-8893302a2/",
};

export {
    meta,
    dataabout,
    dataportfolio,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};