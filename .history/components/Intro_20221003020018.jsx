import style from "../styles/Intro.module.css";
import Image from "next/image";
import {Dayflow} from ""
import Circle from "./Circle";

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
      src="https://blush.design/api/download?shareUri=u9SF81Y7PJJ_qyPP&c=Skin_0%7E604891-0.5%7Ecdd6f2-0.6%7Ecdd6f2&bg=c94c4c&w=800&h=800&fm=png"
      layout="fill"
      objectFit="cover"
      alt=""
    />
      </div>
    </div>
  );
};

export default Intro;