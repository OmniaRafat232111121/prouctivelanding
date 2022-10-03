import { useState } from "react";
import style from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.container}>
      <Link href="/">
      <h3>productivity</h3>
      </Link>
      <ul >
        <li className={style.listItem}>
          <Link href="/products/design">DESIGN</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/products/development">DEVELOPMENT</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/products/production">PRODUCTION</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/products/photography">PHOTOGRAPHY</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
     {/*menu phone*/}
    </div>
  );
};

export default Navbar;