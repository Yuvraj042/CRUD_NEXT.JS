"use client";
import { useState } from "react";
import style from "../style/addTopics.module.css";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to Update Topic");
      }
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className={style.input1}
        type="text"
        placeholder="Topic Title"
      />
      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className={style.input2}
        type="text"
        placeholder="Topic Description"
      />

      <button className={style.addtopicBtn}>Update Topics</button>
    </form>
  );
}
