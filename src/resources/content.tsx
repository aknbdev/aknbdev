import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text, InlineCode } from "@once-ui-system/core";
import Link from "next/link";

const person: Person = {
  firstName: "Abdulaziz",
  lastName: "Karimbaev",
  name: `Abdulaziz`,
  role: "DevOps and Backend Engineer",
  avatar: "/images/avatar.jpg",
  email: "aknbdev@gmail.com",
  location: "Asia/Tashkent", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Uzbek"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/aknbdev",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/aknbdev/",
  },
  {
    name: "Telegram",
    icon: "telegram",
    link: "https://t.me/aknbdev",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Crafting with Everything as Code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">aknbdev</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Automation
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Abdulaziz, DevOps and Backend engineer at {" "}
      <InlineCode style={{padding: 'var(--static-space-2) var(--static-space-8)'}}>
        <Link href="https://www.kpi.com">KPI.com</Link>
      </InlineCode> specializing in Java, Spring Boot, and cloud infrastructure.
      I craft seamless, efficient, and scalable systems that solve real-world problems.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Abdulaziz is a Namangan-based backend developer and DevOps enthusiast
         dedicated to solving complex technical challenges with efficient, scalable solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FinnetLimited (Cartouch.ai)",
        timeframe: "2023.01 - 2023.07",
        role: "Junior Java Backend Developer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "iSystem IT Academy",
        timeframe: "2022.06 - 2022.09",
        role: "Intern Java Backend Developer",
        achievements: [
          <>
            Contributed to the backend development of a mobile application project assigned by the academy, 
            collaborating with a teammate to design and implement core features.
          </>,
          <>
            Applied Java and backend engineering principles in a real-world project environment, gaining hands-on experience in API development and database integration.
          </>,
          <>
            Improved understanding of team collaboration, version control, and project workflow while working in an agile-style development process.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "iSystem IT Academy",
        description: <>Studied Java Backend engineering.</>,
      },{
        name: "Learning Skills Lab",
        description: <>Studied English.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "DevOps and Backend skills",
    skills: [
      {
        title: "DevOps",
        // description: (
        //   <>Able to prototype in Figma with Once UI with unnatural speed.</>
        // ),
        tags: [
          {
            name: "Docker",
            icon: "docker",
          },{
            name: "Ansible",
            icon: "ansible",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        // images: [
        //   {
        //     src: "/images/projects/project-01/cover-02.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        //   {
        //     src: "/images/projects/project-01/cover-03.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
      {
        title: "Backend",
        description: (
          <>Building powerfull spring-boot apps and bots.</>
        ),
        tags: [
          {
            name: "Java",
            icon: "java",
          },{
            name: "Spring Boot",
            icon: "springboot",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        // images: [
        //   {
        //     src: "/images/projects/project-01/cover-04.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },  
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about automation and logic...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `DevOps and Backend projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
