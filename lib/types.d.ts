interface Frontmatter {
  title: string;
  seoTitle?: string;
  abstract?: string;
  cover_image?: string;
  isPublished: boolean;
  publishedDate?: string;
  lastUpdatedDate?: string;
  layout?: string;
}

interface Question {
  category: string;
  slug: string;
  frontmatter: Frontmatter;
}
