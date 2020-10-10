import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'April Shenk | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'April Shenk Portfolio',
  name: 'April Shenk',
  subtitle: 'Software Engineer | Explorer',
  cta: 'Discover my story',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://pdfhost.io/v/JFtKYWY8h_Shenk_Resumepdf.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Grow and Bloom Nursery',
    info: 'Built using React and CSS flexbox and grid. Mockup website for a plant nursery that allows users to request items also.',
    info2: '',
    url: 'https://hopeful-kirch-723358.netlify.app/',
    repo: 'https://github.com/AprilShenk/grow-and-bloom-nursery', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Taste the Best',
    info: 'Built using vanilla JavaScript, HTML, CSS,  the DOM, and incorporates a third party API. The users can search for recipes or find by category.',
    info2: '',
    url: 'https://aprilshenk.github.io/taste-the-best/',
    repo: 'https://github.com/AprilShenk/taste-the-best', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'april.m.shenk@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/aprilshenk/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/AprilShenk',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
