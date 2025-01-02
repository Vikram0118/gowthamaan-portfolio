import "highlight.js/styles/github-dark.min.css";
import { notFound } from "next/navigation";
import { getBlogContentBySlug } from "@/utils/mdxUtils";
import { IBlogPost } from "@/interface/blog";
import Layout from "@/components/Layout";
import { BlogHeading } from "@/components/common/BlogHeading";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Blog({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlogContentBySlug(slug);

  if (!blog) {
    return notFound();
  }

  const { content } = blog;
  const { title, date, read } = blog.meta;

  return (
    <Layout>
      <BlogHeading heading={title} fontColor="0a0a0a" date={date} read={read} />
      <article className="prose prose-base max-w-none text-black">
        {content}
      </article>
    </Layout>
  );
}
