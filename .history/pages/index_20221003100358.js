import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Services from "../components/Services";

export default function Home() {
  return (
    <div >
     <Navbar/>
     <Intro/>
     <Services services={services}/>
    </div>
  )
}
export const getSttaticProps=