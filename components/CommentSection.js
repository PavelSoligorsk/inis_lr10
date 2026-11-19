import { useState } from "react";

export default function CommentSection() {
  const [draft, setDraft] = useState("");
  const [comments, setComments] = useState([]);

  function submit(event) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setComments((items) => [...items, text]);
    setDraft("");
  }

  return (
    <section className="comments" aria-labelledby="comments-title">
      <h2 id="comments-title">Комментарии</h2>
      <form onSubmit={submit}>
        <label htmlFor="comment">Текст комментария</label>
        <textarea
          id="comment"
          value={draft}
          placeholder="Напишите комментарий..."
          onChange={(event) => setDraft(event.target.value)}
        />
        <button type="submit">Отправить</button>
      </form>
      {comments.length === 0 ? (
        <p className="muted">Комментариев пока нет.</p>
      ) : (
        <ul>
          {comments.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
