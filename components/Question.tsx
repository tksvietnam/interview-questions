import Link from "next/link";
import Image from "next/image";

interface QuestionProps {
  question: Question;
}
const Question = ({ question }: QuestionProps) => {
  console.log("[Question] printing", question);
  return (
    <div className="card">
      {question.frontmatter.cover_image && (
        <Image
          src={question.frontmatter.cover_image}
          alt={question.frontmatter.title}
        />
      )}

      <div className="post-date">
        Questioned on {question.frontmatter.publishedDate}
      </div>

      <h3>{question.frontmatter.title}</h3>

      <p>{question.frontmatter.abstract}</p>

      <Link href={`/questions/${question.category}/${question.slug}`}>
        <a className="btn">Read More</a>
      </Link>
    </div>
  );
};

export default Question;
