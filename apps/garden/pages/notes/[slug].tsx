import { readdirSync } from 'fs';
import { GetStaticPaths, GetStaticProps } from 'next';
import { join } from 'path';
import { ParsedUrlQuery } from 'querystring';
import { MDXRemote } from 'next-mdx-remote';
import {
  getParsedFileContentBySlug,
  renderMarkdown,
} from '@egghead-digital-garden/markdown';
import './[slug].module.css';

/* eslint-disable-next-line */
export interface NoteProps extends ParsedUrlQuery {
  slug: string;
}

const NOTES_PATH = join(process.cwd(), '_notes');

export function Note({ frontmatter, html }) {
  console.log('🚀 ~ file: [slug].tsx ~ line 20 ~ Note ~ html', html);
  return (
    <div className="m-6">
      <article className="prose prose-lg">
        <h1>{frontmatter.title}</h1>
        <div>by {frontmatter.author.name}</div>
      </article>
      <hr />
      <MDXRemote {...html} />
    </div>
  );
}

export const getStaticProps: GetStaticProps<NoteProps> = async ({
  params,
}: {
  params: NoteProps;
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

export const getStaticPaths: GetStaticPaths<NoteProps> = async (context) => {
  const paths = readdirSync(NOTES_PATH)
    .map((file) => file.replace(/\.mdx?$/, ''))
    .map((slug: string) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default Note;
