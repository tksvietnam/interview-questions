import Link from "next/link";

interface QuestionProps {
  question: Question;
}
const Question = ({ question }: QuestionProps) => {
  console.log("[Question] printing", question);
  return (
    <div className="card">
      <img src={question.frontmatter.cover_image} alt="" />

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
