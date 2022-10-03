import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import { data } from "../data";

export default function Home({services}) {
  return (
    <div >
     <Intro />
     <Services services={services} />
     <Testimonials/>
     <Contact
     

     
   </div>
 );
}

export const getStaticProps = () => {
 const services = data;
 return {
   props: { services },
 };
};