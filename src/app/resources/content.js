import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Christian",
  lastName: "Tannahill",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Software Engineer",
  avatar: "/images/avatar.jpg",
  location: "America/Chicago", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/cstannahill",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/christian-tannahill",
  },
  // {
  //   name: "X",
  //   icon: "x",
  //   link: "",
  // },
  {
    name: "Email",
    icon: "email",
    link: "mailto:christiantannahill2@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Software Engineer</>,
  subline: (
    <>
      I'm Christian, a a full stack software engineer that crafts intuitive user
      experiences and responsive designs, robust APIs, and efficient database
      designs.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendar.app.google/JepYNPUuk6d9eLoDA",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Christian is a software developer who thrives on solving complex
        challenges through clean, efficient code and innovative solutions. With
        expertise in full-stack web development, database design, API
        development, API consumption, crafting dynamic user interfaces, they
        bring a unique blend of technical precision and creativity to every
        project, delivering tools that are both functional and impactful.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Evergreen Village - Heritage Operations",
        timeframe: "2024 - Present",
        role: "Director of Maintenance",
        achievements: [
          <>
            Manage scheduling, budgeting, and daily operations for maintenance
            and housekeeping departments, ensuring optimal performance and
            resource allocation.
          </>,
          <>
            Designed and created a custom housekeeping managment application to
            replace written records previously used by department for tracking
            status of rooms.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/hsk/hskp-dash-view.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/hsk/hsk-dash-no-task.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "AnswerNet",
        timeframe: "2022 - 2024",
        role: "Programmer",
        achievements: [
          <>
            Developed and implemented .NET APIs for OPID status callback
            registration and updates as well as web portal to view.
          </>,
          <>
            Developed automated data import pipelines to process Excel, CSV, and
            tab-delimited files using .NET, enhancing lead management
            efficiency. and enhanced data export functionality by generating
            Excel and CSV reports programmatically, tailored to client needs.
          </>,
        ],
        images: [],
      },
      {
        company: "Carte",
        timeframe: "2022",
        role: "Full Stack Software Engineer",
        achievements: [
          <>
            Architectured and designed database tables, APIs, and responsive
            view for analytics and for the menu and order customization.
          </>,
          <>
            Integrated Stripe for secure and seamless payment processing,
            enhancing user transaction experiences.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/carte/carte-analytics.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/carte/carte-pie.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/carte/menu-view.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/carte/CarteTables.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Sabio Full Stack Software Development Bootcamp",
        description: (
          <>
            Completed 530+ hours of intensive training in ReactJS, .NET, SQL,
            and modern web development practices.
          </>
        ),
      },
      // {
      //   name: "Build the Future",
      //   description: <>Studied online marketing and personal branding.</>,
      // },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "ReactJS",
        description: (
          <>
            I have extensive experience building dynamic and responsive
            front-end applications using ReactJS, including implementing
            advanced state management, reusable components, and custom hooks. My
            work has ranged from interactive dashboards to real-time data-driven
            tools, with a focus on delivering seamless user experiences.
          </>
        ),
        images: [
          {
            src: "/images/projects/carte/carte-analytics.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/carte/carte-pie.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/personal/old-portfolio.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/personal/personal-site.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: ".NET",
        description: (
          <>
            I have strong expertise in developing robust back-end systems using
            .NET, including crafting APIs with ASP.NET, integrating Entity
            Framework for efficient database management, and implementing
            modular and scalable architectures. My projects include designing
            and deploying server-side logic for analytics dashboards and
            real-time applications.
          </>
        ),
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "SQL",
        description: (
          <>
            I am skilled in writing efficient SQL queries and stored procedures
            for data analysis, reporting, and application integration. I have
            designed normalized databases, implemented complex joins and
            aggregations, and optimized performance for large datasets in
            production environments.
          </>
        ),
        images: [
          {
            src: "/images/projects/carte/CarteTables.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/carte/Menu.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/carte/sql-query.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/carte/sql-query2.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
