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
  paragraphOne: 'My name is April, it is a pleasure to meet you. I am based in Lexington, KY but I love to travel and explore. In my spare time, you can find me practicing yoga, hiking/kayaking, reading, or working on home improvement projects. After a few years of working in the field of events and hospitality, I knew it was time for a change. Once I asked myself what I enjoyed doing day to day I decided to try out programming because it\'s like solving a puzzle.',
  paragraphTwo: 'That brings me to why you are here. I started self-teaching Python in February, then lost my job the end of March, due to COVID. This gave me time to learn and focus on what I could do to shift my career into the tech field. I finished an online class the middle of June and started at General Assembly\'s Software Engineering Immersive in August. During the program I confirmed my beliefs that Software Development is where I belong.',
  paragraphThree: 'HTML, CSS, JavaScript, React, AJAX, Express, Node, Ruby, Ruby on Rails, Mongoose, MongoDB, SQL, Git/Github, Command Line',
  resume: 'https://docs.google.com/document/d/1-qVb6T8_jKM3-mvpFRBPKrkD-m_95ia8SXYiRxQmxxo/edit?usp=sharing', // if no resume, the button will not show up
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
    img: 'project3.jpg',
    title: 'Apollo Hardware',
    info: 'Collaborative admin mock-up site where a UX/UI design team provided my SEI team a prototype. With a group of 4 we completed this site specific to the prototype in a 1 week sprint.',
    info2: '',
    url: 'https://kind-heyrovsky-dce985.netlify.app/',
    repo: 'https://github.com/AprilShenk/apollo-hardware', // if no repo, the button will not show up
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
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
