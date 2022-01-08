export const sortByDate = (a: Question, b: Question) => {
  let d1 = a.frontmatter.publishedDate
    ? new Date(a.frontmatter.publishedDate)
    : undefined;
  let d2 = b.frontmatter.publishedDate
    ? new Date(b.frontmatter.publishedDate)
    : undefined;
  const comparePublishDate = compareDate(d1, d2);

  if (comparePublishDate === 0) {
    return comparePublishDate;
  }

  d1 = a.frontmatter.lastUpdatedDate
    ? new Date(a.frontmatter.lastUpdatedDate)
    : undefined;
  d2 = b.frontmatter.lastUpdatedDate
    ? new Date(b.frontmatter.lastUpdatedDate)
    : undefined;
  const compareLastUpdateDate = compareDate(d1, d2);

  return compareLastUpdateDate;
};

const compareDate = (d1?: Date, d2?: Date) => {
  if (d1 === d2) {
    return 0;
  }

  if (!d1) {
    return -1;
  }

  if (!d2) {
    return 1;
  }

  return d1 < d2 ? -1 : 1;
};
