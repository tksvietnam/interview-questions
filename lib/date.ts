export const sortByDate = (a: Question, b: Question) => {
  const comparePublishDate =
    new Date(b.frontmatter.publishedDate) -
    new Date(a.frontmatter.publishedDate);

  return comparePublishDate === 0
    ? new Date(b.frontmatter.lastUpdatedDate) -
        new Date(a.frontmatter.lastUpdatedDate)
    : comparePublishDate;
};
