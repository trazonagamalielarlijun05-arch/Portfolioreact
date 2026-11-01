// All the site's content lives here. Edit this file to change text,
// skills, projects or links — no need to touch the components.

export const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'contact'];

export const profile = {
  name: 'Arli Trazona',
  initials: 'AT',
  firstName: 'Arli',
  tagline: 'BSCS Student · Web Developer',
  email: 'trazonagamalielarlijun05@gmail.com',
  location: 'Tangub City, Philippines',
};

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  {
    id: 'projects',
    label: 'Projects',
    children: [
      { href: '#projects', label: 'Web Development' },
      { href: '#projects', label: 'Mobile Development' },
      { href: '#projects', label: 'All Projects' },
    ],
  },
  { id: 'contact', label: 'Contact' },
];

export const techStack = ['HTML', 'CSS', 'JS', 'PHP', 'SQL', 'PY'];

export const stats = [
  { icon: '🎓', value: '3+', label: 'Years Studying CS' },
  { icon: '💻', value: '10+', label: 'Projects Built' },
  { icon: '🛡️', value: '1', label: 'Capstone Project' },
  { icon: '🏆', value: '100%', label: 'Commitment' },
];

// Three columns, like the original layout.
export const skillColumns = [
  [
    { name: 'HTML', level: 90, badge: 'H', color: '#e34f26' },
    { name: 'CSS', level: 85, badge: 'C', color: '#264de4' },
    { name: 'JavaScript', level: 80, badge: 'JS', color: '#f0db4f', textColor: '#222' },
  ],
  [
    { name: 'PHP', level: 75, badge: 'P', color: '#4f5b93' },
    { name: 'MySQL', level: 78, badge: 'S', color: '#00758f' },
    { name: 'Python', level: 70, badge: 'Py', color: '#3776ab' },
  ],
  [
    { name: 'Git', level: 80, badge: 'G', color: '#f34f29' },
    { name: 'Database Design', level: 72, badge: 'DB', color: '#00758f' },
    { name: 'Networking Basics', level: 68, badge: 'N', color: '#7c5cff' },
  ],
];

export const projects = [
  {
    title: 'SmartPark CS',
    description: 'Campus parking monitoring system built as a capstone project for TCGC.',
    thumb: 'SP',
    thumbClass: 'thumb-1',
    href: '#',
  },
  {
    title: 'Task Manager',
    description: 'A lightweight app for organizing coursework and personal to-dos.',
    thumb: 'TM',
    thumbClass: 'thumb-2',
    href: '#',
  },
  {
    title: 'Security Mini-Lab',
    description: 'A set of small cybersecurity exercises exploring systems and network basics.',
    thumb: 'SEC',
    thumbClass: 'thumb-3',
    href: '#',
  },
];

export const quote = {
  text: 'Arli is a dependable and detail-oriented developer who takes ownership of every project and delivers clean, working solutions.',
  initials: 'MG',
  name: 'Project Adviser',
  role: 'TCGC, Institute of Computer Studies',
};

export const followIcons = ['GH', 'IN', 'X', 'IG'];
