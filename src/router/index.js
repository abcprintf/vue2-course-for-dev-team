const Home = () => import("./../pages/Home");
const About = () => import("./../pages/About");
const Table = () => import("./../pages/Table");

export const routers = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/table",
    component: Table
  }
];
