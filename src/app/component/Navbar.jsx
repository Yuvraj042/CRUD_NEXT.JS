import Link from "next/link";
import Nav from "../style/nav.module.css";

export default function Navbar() {
  return (
    <nav className={Nav.heading}>
      <Link className={Nav.head} href={"/"}>
        HOME
      </Link>
      <Link className={Nav.head2} href={"/addTopics"}>
        Add Topics
      </Link>
    </nav>
  );
}
