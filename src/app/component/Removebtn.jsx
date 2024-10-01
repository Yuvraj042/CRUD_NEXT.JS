"use client";
import { IoTrashSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function RemmoveBtn({ id }) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure..?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button onClick={removeTopic}>
      <IoTrashSharp size={24} />
    </button>
  );
}
