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

const readme = {
  title: "Readme",
  label: "Readme",
  image: "/images/og/home.jpg",
  path: "/readme",
  ogPath: "",
  description: `${person?.name}'s GitHub Style Readme`,
  headline: <>Hello, I'm {person.firstName}!</>,
  subline: (
    <>
      I'm a full stack software engineer with a passion for creating
      user-friendly applications. I love to learn and share my knowledge with
      others.
    </>
  ),
};

const about = {
  label: "About",
  title: `${person.name}'s About`,
  image: "/images/og/home.jpg",
  path: "/about",
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

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  path: "/",
  image: "/images/og/home.jpg",
  description: `Portfolio website showcasing my work as a ${person.role}`,

  headline: <>Full‑Stack&nbsp;Software&nbsp;Engineer</>,
  subline: (
    <>
      I craft intuitive UIs &amp; robust APIs, turning ideas into polished
      products.
    </>
  ),
  featured: {
    title: "Now hiring – freelance work available",
    href: "/work",
  },
  tableOfContent: {
    display: false,
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
        I am a software developer who thrives on solving complex challenges
        through clean, efficient code and innovative solutions. With expertise
        in full-stack web development, database design, API development, API
        consumption, crafting dynamic user interfaces, I bring a unique blend of
        technical precision and creativity to every project, delivering tools
        that are both functional and impactful.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Evergreen Village - Heritage Operations",
        key: "evergreen-village",
        timeframe: "June 2024 - March 2025",
        role: "Director of Maintenance",
        achievements: [
          {
            key: "evergreen-village-achievement-1",
            description: (
              <>
                Manage scheduling, budgeting, and daily operations for
                maintenance and housekeeping departments, ensuring optimal
                performance and resource allocation.
              </>
            ),
          },
          {
            key: "evergreen-village-achievement-2",
            description: (
              <>
                Designed and created a custom housekeeping managment application
                to replace written records previously used by department for
                tracking status of rooms.
              </>
            ),
          },
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/hsk/1.avif",
            alt: "Once UI Project",
            key: "hskp-dash-view",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/hsk/2.avif",
            alt: "Once UI Project",
            key: "hsk-dash-no-task",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "AnswerNet",
        key: "answernet",
        timeframe: "2022 - 2024",
        role: "Programmer",
        achievements: [
          {
            key: "answernet-achievement-1",
            description: (
              <>
                Developed and implemented .NET APIs for OPID status callback
                registration and updates as well as web portal to view.
              </>
            ),
          },
          {
            key: "answernet-achievement-2",
            description: (
              <>
                Developed automated data import pipelines to process Excel, CSV,
                and tab-delimited files using .NET, enhancing lead management
                efficiency. and enhanced data export functionality by generating
                Excel and CSV reports programmatically, tailored to client
                needs.
              </>
            ),
          },
        ],
        images: [],
      },
      {
        company: "Carte",
        key: "carte",
        timeframe: "2022",
        role: "Full Stack Software Engineer",
        achievements: [
          {
            key: "carte-analytics",
            description: (
              <>
                Architectured and designed database tables, APIs, and responsive
                view for analytics and for the menu and order customization.
              </>
            ),
          },
          {
            key: "carte-integration",
            description: (
              <>
                Integrated Stripe for secure and seamless payment processing,
                enhancing user transaction experiences.
              </>
            ),
          },
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/carte/1.png",
            key: "carte-analytics",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/carte/2.png",

            key: "carte-pie",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/carte/7.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/carte/5.png",
            key: "carte-tables",
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
        key: "sabio",
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
        key: "reactjs",
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
            src: "/images/projects/carte/1.png",
            key: "carte-analytics",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/carte/3.png",
            key: "carte-pie",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/personal/old-portfolio.png",
            key: "old-portfolio",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/personal/personal-site.png",
            key: "personal-site",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: ".NET",
        key: "dotnet",
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
      },
      {
        title: "SQL",
        key: "sql",
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
            src: "/images/projects/carte/5.png",
            key: "carte-tables",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/carte/9.png",
            key: "carte-menu",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/carte/7.png",
            key: "carte-sql-query",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/carte/8.png",
            key: "carte-sql-query2",
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
  title: "More about me",
  description: `Read what ${person.name} has been up to recently`,
  path: "/blog",

  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  path: "/work",
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  title: "My Gallery",
  description: "Curated showcase of photography and art",

  images: [
    {
      src: "/images/projects/stui/1.png ",
      alt: "Project image",
      orientation: "horizontal",
    },
  ],
};

export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  gallery,
  readme,
  // projectFlow,
};
