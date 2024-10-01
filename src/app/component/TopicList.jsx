import RemmoveBtn from "./Removebtn";
import Link from "next/link";
import { BiSolidEdit } from "react-icons/bi";
import style from "../style/topiclist.module.css";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function TopicList() {
  const { topics } = await getTopics();
  return (
    <>
      {topics.map((t) => (
        <div className={style.topichead}>
          <div>
            <h2>{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className={style.topichead3}>
            <RemmoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <BiSolidEdit size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
