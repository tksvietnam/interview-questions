import { useEffect } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import { useRouter } from "next/router";

import { getFiles } from "@/lib/file";

const prism = require("prismjs");

require("prismjs/components/prism-aspnet");
require("prismjs/components/prism-bash");
require("prismjs/components/prism-c");
require("prismjs/components/prism-cpp");
require("prismjs/components/prism-csharp");
require("prismjs/components/prism-css");
require("prismjs/components/prism-dart");
require("prismjs/components/prism-docker");
require("prismjs/components/prism-git");
require("prismjs/components/prism-go");
require("prismjs/components/prism-graphql");
require("prismjs/components/prism-java");
require("prismjs/components/prism-javascript");
require("prismjs/components/prism-json");
require("prismjs/components/prism-jsx");
require("prismjs/components/prism-kotlin");
// require("prismjs/components/prism-php");
require("prismjs/components/prism-python");
require("prismjs/components/prism-ruby");
require("prismjs/components/prism-sass");
require("prismjs/components/prism-sql");
require("prismjs/components/prism-swift");
require("prismjs/components/prism-typescript");
require("prismjs/components/prism-yaml");

interface QuestionPageProsp {
  frontmatter: Frontmatter;
  content: string;
}
export default function QuestionPage({
  frontmatter: { title, publishedDate, cover_image },
  content,
}: QuestionPageProsp) {
  const router = useRouter();
  console.log("[QuestionPage] router with question", router.query);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  return (
    <>
      <Link href="/">
        <a className="btn btn-back">Go Back</a>
      </Link>
      <div className="card card-page">
        <h1 className="question">{title}</h1>
        <div className="publish-date">Posted on {publishedDate}</div>
        <img src={cover_image} alt="" />

        <div
          dangerouslySetInnerHTML={{ __html: marked(content) }}
          className="answer"
        ></div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const questionPath = path.join("data", "questions");
  const files = await getFiles(questionPath);

  const paths = [];
  for await (const f of files) {
    const category = path
      .relative(questionPath, f)
      .replace(path.basename(f), "")
      .slice(0, -1);

    paths.push({
      params: {
        category: category,
        slug: path.basename(f, ".md"),
      },
    });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(props) {
  const {
    params: { category, slug },
  } = props;
  console.log("[QuestionPage.getStaticProps] router with question", props);

  const questionPath = path.join("data", "questions", category, slug + ".md");
  const markdownWithMeta = fs.readFileSync(questionPath, "utf-8");

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter: frontmatter as Frontmatter,
      content,
    },
  };
}
