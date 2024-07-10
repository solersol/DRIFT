
import { Hero, About, Roadmap2, About2 } from "./sections";
import VideoBackground from "./components/VideoBackground";
import Nav from "./components/Nav";
import Separator from "./components/Separator";
import StickyFooter from "./sections/StickyFooter";
import Chart from "./sections/Chart";

// Import the background image
// import bgImage from './assets/images/main.png';
import rdImage from './assets/images/roadmap2.png';
import { bg3 } from "./assets/images";

const App = () => (
  <main className="relative bg-[#000000]">
    <Nav />
   

    {/* <section className="xl:padding-l wide:padding-r padding-b bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <Hero />
    </section> */}

    <VideoBackground >
      <Hero />
    </ VideoBackground >
    


    <Separator />
    <section className="w-full h-screen bg-cover bg-center " style={{ backgroundImage: `url(${rdImage})` }}><Roadmap2 /></section>
    <Separator />
    <section className="w-full h-screen bg-cover bg-center " style={{ backgroundImage: `url(${bg3})` }}><About2 /></section>
    <Separator />
    <section className="padding"><Chart /></section>
    <Separator />
    <section className=""><StickyFooter /></section>
  </main>
);

export default App;
