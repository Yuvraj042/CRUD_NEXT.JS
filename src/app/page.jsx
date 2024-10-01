import style from "./style/navbody.module.css";
import TopicList from "./component/TopicList";

export default function Home() {
  return (
    <div className={style.navbody}>
      <TopicList />
    </div>
  );
}
