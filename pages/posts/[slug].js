import Link from "next/link";
import CommentSection from "../../components/CommentSection";
import LikeButton from "../../components/LikeButton";
import { getArticle, getArticles } from "../../lib/articles";
import { formatPublishedAt } from "../../lib/formatPublishedAt";

const alts = {
  "design-systems": "Повторяющиеся карточки и кнопки на одном экране",
  "card-component": "Отдельная карточка с заголовком и автором",
  "shared-filter": "Три отметки тегов, одна из них выбрана",
  "cover-file": "Прямоугольник обложки отдельно от текста карточки",
};

export default function Post({ article, builtAt }) {
  return (
    <main>
      <nav>
        <Link href="/">К ленте</Link>
      </nav>
      <img src={`/covers/${article.slug}.svg`} alt={alts[article.slug]} />
      <p className="tag">{article.tag}</p>
      <h1>{article.title}</h1>
      <p>
        {article.author} · {formatPublishedAt(article.publishedAt, new Date(builtAt))}
      </p>
      <p>{article.content}</p>
      <LikeButton initialCount={article.likes} title={article.title} />
      <CommentSection />
    </main>
  );
}

export async function getStaticPaths() {
  return {
    paths: getArticles().map((item) => ({ params: { slug: item.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      article: getArticle(params.slug),
      builtAt: new Date().toISOString(),
    },
  };
}
