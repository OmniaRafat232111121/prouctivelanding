import style from "../styles/Testimonials.module.css";
//import Image from "next/image";
import Circle from "./Circle";
import { users } from "../data";

const Testimonials = () => {
  return (
    <div className={style.container}>
      <Circle top="-70vh" left="0" right="0" backgroundColor="darkblue" />
      <h1 className={style.title}>Testimonials</h1>
      <div className={style.wrapper}>
        {users.map((user) => (
       
        ))}
      </div>
    </div>
  );
};

export default Testimonials;