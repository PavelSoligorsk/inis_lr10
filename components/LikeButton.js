import { useState } from "react";

export default function LikeButton({ initialCount, title }) {
  const [count, setCount] = useState(initialCount);
  const [liked, setLiked] = useState(false);

  function like() {
    setLiked(true);
    setCount((value) => value + 1);
  }

  const label = liked
    ? `Отметка поставлена, сейчас ${count}`
    : `Нравится, отметок: ${count}. ${title}`;

  return (
    <button type="button" className={liked ? "like liked" : "like"} onClick={like} aria-pressed={liked} aria-label={label}>
      <svg viewBox="0 0 24 24" aria-hidden="true" width="16" height="16">
        <path
          d="M12 20.5s-6.4-4.1-8.9-7.7C1.2 10.2 1.6 6.9 4.2 5.5 6.3 4.4 8.5 5 12 8.2 15.5 5 17.7 4.4 19.8 5.5c2.6 1.4 3 4.7 1.1 7.3-2.5 3.6-8.9 7.7-8.9 7.7z"
          fill={liked ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
      <span>{count}</span>
    </button>
  );
}
