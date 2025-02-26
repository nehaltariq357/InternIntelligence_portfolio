import About from "./component/Home/About/page";
import Contact from "./component/Home/Contact/page";
import Home1 from "./component/Home/Home1"
import Project from "./component/Home/Projects/page";
import Skills from "./component/Home/Skills/Skills";
export default function Home() {

  return (
    <div>
      <Home1/>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
    </div>
  );
}
