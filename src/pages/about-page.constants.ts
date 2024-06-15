import { Members } from './about-page.types';

export const gitLinkStyle = 'flex max-w-full items-center gap-1 no-underline';

export const cardStyle = { borderRadius: '5px' };

export const teamMembers: Members = [
  {
    bio: 'Kate has extensive experience in leading development teams and driving project success. Like dancing as well as cats.',
    collaboration: 'Oversaw the entire project lifecycle, ensuring alignment with goals and objectives.',
    contributions:
      'Provided guidance and support to team members, did initial setup for the project, implemented routing and providers, added MUI theme, implemented Catalog, Cart pages and actively tested code.',
    github: 'https://github.com/KateGoncharik',
    name: 'Kate Goncharik',
    nickname: 'KateGoncharik',
    photo: 'src/assets/photo/kate.jpg',
    role: 'team leader',
  },
  {
    bio: 'Anastasiia is a highly skilled developer with the passion for creating robust and scalable apps.',
    collaboration: 'Developed the core architecture of project, focusing on performance and scalability.',
    contributions:
      'Did initial setup of repository, MUI and Tailwind configuration, setup for Axios and TanStack Query. Implemented authentication and user management including Login and Register pages, and implemented Profile Page, Promo-code implementation and actively tested code.',
    github: 'https://github.com/mideli37',
    name: 'Anastasiia Muzipova',
    nickname: 'mideli37',
    photo: 'src/assets/photo/mideli.jpg',
    role: 'lead developer',
  },
  {
    bio: 'Den is dedicated developer who excels in writing clean and efficient code.',
    collaboration: 'Contributed to the development of key features, enhancing functionality and user experience.',
    contributions:
      'Updated configuration files for the project. Implemented Product, About Us pages and adjusted header navigation, and actively tested code.',
    github: 'https://github.com/beliar13',
    name: 'Denis Sevostyanov',
    nickname: 'beliar13',
    photo: 'src/assets/photo/beliar13.jpg',
    role: 'developer',
  },
];
