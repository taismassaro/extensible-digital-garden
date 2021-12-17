import { readdirSync } from 'fs';
import { GetStaticPaths, GetStaticProps } from 'next';
import { join } from 'path';
import { ParsedUrlQuery } from 'querystring';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import dynamic from 'next/dynamic';
import {
  getParsedFileContentBySlug,
  renderMarkdown,
} from '@egghead-digital-garden/markdown';
import './[slug].module.css';

export interface PathProps extends ParsedUrlQuery {
  slug: string;
}

export interface NoteProps {
  frontmatter: string;
  html: MDXRemoteSerializeResult;
}

const mdxComponents = {
  Video: dynamic(async () => {
    const { Video } = await import(
      '@egghead-digital-garden/shared/mdx-elements'
    );
    return Video;
  }),
  a: dynamic(async () => {
    const { CustomLink } = await import(
      '@egghead-digital-garden/shared/mdx-elements'
    );
    return CustomLink;
  }),
};

const NOTES_PATH = join(process.cwd(), process.env.MARKDOWN_PATH);

export function Note({ frontmatter, html }) {
  return (
    <div className="m-6">
      <article className="prose prose-lg">
        <h1>{frontmatter.title}</h1>
        <div>by {frontmatter.author.name}</div>
      </article>
      <hr />
      <MDXRemote {...html} components={mdxComponents} />
    </div>
  );
}

export const getStaticProps: GetStaticProps<NoteProps> = async ({
  params,
}: {
  params: PathProps;
}) => {
  // 1. parse markdown content into frontmatter and content
  const { frontmatter, content } = getParsedFileContentBySlug(
    params.slug,
    NOTES_PATH
  );

  // 2. convert content to html
  const htmlContent = await renderMarkdown(content);

  return {
    props: {
      frontmatter,
      html: htmlContent,
    },
  };
};

export const getStaticPaths: GetStaticPaths<PathProps> = async (context) => {
  const paths = readdirSync(NOTES_PATH)
    .map((file) => file.replace(/\.mdx?$/, ''))
    .map((slug: string) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default Note;
