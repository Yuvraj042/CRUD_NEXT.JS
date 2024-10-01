"use client";
import { useState } from "react";
import style from "../style/addTopics.module.css";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and Description are Required");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={style.input1}
        type="text"
        placeholder="Topic Title"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className={style.input2}
        type="text"
        placeholder="Topic Description"
      />

      <button type="submit" className={style.addtopicBtn}>
        Add Topics
      </button>
    </form>
  );
}
