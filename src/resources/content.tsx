import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text, InlineCode, LetterFx } from "@once-ui-system/core";
import Link from "next/link";

const person: Person = {
  firstName: "Abdulaziz",
  lastName: "Karimbaev",
  get name() {
		return `${this.firstName} ${this.lastName}`;
  },
  role: "DevOps & Backend Engineer",
  avatar: "/images/avatar.jpg",
  email: "aknbdev@gmail.com",
  location: "Asia/Tashkent", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Uzbek"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>I occasionally write about DevOps, automation, and backend development.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/aknbdev",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/aknbdev",
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
  title: `${person.name}`,
  description: `${person.role}`,
  headline: <>Crafting with Everything as Code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">aknbdev</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          <LetterFx trigger="instant" speed="slow">
            KPI: All-in-One Business Solution
          </LetterFx>
        </Text>
      </Row>
    ),
    href: "/work/kpi-all-in-one-business-management-solution",
  },
  subline: (
    <>
      I'm Abdulaziz, a DevOps Engineer with a strong foundation in backend development,
      building reliable automated systems that help teams deliver faster and with confidence.
      Currently working at {" "}
      <InlineCode style={{padding: 'var(--static-space-2) var(--static-space-8)'}}>
        <Link href="https://www.kpi.com">KPI.com</Link>
      </InlineCode> in Tashkent, Uzbekistan.
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
  cv: {
    display: true,
    link: "/pdfs/mycv.pdf",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
      DevOps Engineer with a strong foundation in backend development and experience in CI/CD automation, infrastructure management,
      and server deployment. Skilled in tools like Jenkins, GitLab CI, Docker, and Ansible, with hands-on expertise in PostgreSQL
      optimization, system monitoring, and containerized environments. Passionate about building reliable,
      automated systems that help teams deliver faster and with confidence.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
			{
				company: "KPI.com / DataSite Technology",
				timeframe: "Jun 2023 - Present",
				role: 'DevOps Engineer',
        achievements: [
            <>Managing CI/CD pipelines using Jenkins and GitLab CI for multi-environment deployments (dev, staging, live)</>,
            <>Implemented infrastructure automation using Ansible and Docker to streamline deployments</>,
            <>Responsible for PostgreSQL performance tuning, Nginx configuration, and Sentry monitoring</>,
            <>Collaborated with developers to improve build performance and release automation</>
        ],
        images: []
			},
		  {
          company: 'Sitelabs IT Company',
          timeframe: 'Apr 2023 - Jun 2023',
          role: 'DevOps Engineer Intern',
          achievements: [
              <>Gained hands-on experience in CI/CD workflows, system monitoring, and deployment scripting</>,
              <>Assisted in automating server tasks and improving internal development pipelines</>
          ],
          images: []
      },
		  {
          company: 'Sitelabs IT Company',
          timeframe: 'Sep 2022 - Jun 2023',
          role: 'Java Backend Developer',
          achievements: [
              <>Developed backend logic for web applications using Java and PostgreSQL</>,
              <>Contributed to REST API development and backend optimizations</>
          ],
          images: []
      },
		  {
          company: 'ISystem IT Academy',
          timeframe: 'Jun 2022 - Sep 2022',
          role: 'Java Backend Developer Intern',
          achievements: [
              <>Built backend modules and gained experience in Java, Spring Boot, and PostgreSQL</>
          ],
          images: []
      },
      {
        company: "iSystem IT Academy",
        timeframe: "Jun 2022 - Sen 2022",
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
    title: "Education & Training",
    institutions: [
      {
        name: "ISystem IT Academy",
        description: <>Backend Development with Java and Spring Boot</>,
      },{
        name: "Learning Skills Lab",
        description: <>Intermediate English Language (Aug 2020 – Feb 2021)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "DevOps",
        description: (
          <>Expert in CI/CD pipelines, containerization, and infrastructure automation</>
        ),
        tags: [
          {
            name: "GitLab CI",
            icon: "gitlab",
          },{
            name: "GitHub Actions",
            icon: "github",
          },{
            name: "Jenkins",
            icon: "jenkins",
          },{
            name: "Docker",
            icon: "docker",
          },{
            name: "Ansible",
            icon: "ansible",
          },{
            name: "Python",
            icon: "python",
          },{
            name: "Grafana",
            icon: "grafana",
          },{
            name: "Prometheus",
            icon: "prometheus",
          },{
            name: "Sentry",
            icon: "sentry",
          },{
            name: "Bash",
            icon: "bash",
          },
        ],
        // images: [
        //   {
        //     src: "/images/projects/project-01/cover-02.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   }
        // ],
      },
      {
        title: "Backend",
        description: (
          <>Building powerful spring-boot apps.</>
        ),
        tags: [
          {
            name: "Java",
            icon: "java",
          },{
            name: "Spring Boot",
            icon: "springboot",
          },{
            name: "Git",
            icon: "git",
          },
        ],
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
      src: "/images/gallery/vertical-devops-days.jpg",
      alt: "image",
      orientation: "vertical",
      location: "Mominov str, Tashkent, Uzbekistan",
      technical: "DevOpsDays Tashkent 2025 | Digital.uz"
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
