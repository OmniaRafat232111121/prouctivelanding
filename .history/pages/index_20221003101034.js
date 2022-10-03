import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import { data } from "../data";

export default function Home({s}) {
  return (
    <div >
     <Navbar/>
     <Intro />
     <Services services={services} />
     <Testimonials />
   </div>
 );
}

export const getStaticProps = () => {
 const services = data;
 return {
   props: { services },
 };
};