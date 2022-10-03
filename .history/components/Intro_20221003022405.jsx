import style from "../styles/Intro.module.css";
import Circle from "./Circle";
import Image from 'next/image'
import profilePic from '../public/img/sit.png'
const Intro = () => {
  return (
    <div className={style.container}>
      {/* <div className={`${style.circle} ${style.circle1}`} />
      <div className={`${style.circle} ${style.circle2}`} /> */}
      <Circle backgroundColor="#c94c4c" top="-45vh" left="-45vh" />
      {/* <Circle backgroundColor="#c94c4c" right="-40vh" /> */}
      <div className={style.card}>
        <h1 className={style.title}>
          <span className={style.brandName}>AV0CAD0</span> DIGITAL PRODUCT
          AGENCY
        </h1>
        <p className={style.desc}>
          Create live segments and target the right people for messages based on
          their behaviors.
        </p>
        <button className={style.button}>DISCOVER</button>
      </div>
      <div className={style.card}>
      <Image
      src={profilePic}
 
   
      alt=""
    />
      </div>
    </div>
  );
};

export default Intro;