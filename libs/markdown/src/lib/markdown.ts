import { readFileSync } from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import { serialize } from 'next-mdx-remote/serialize';

export function getParsedFileContentBySlug(filename: string, path: string) {
  const filePath = join(path, `${filename}.mdx`);
  const fileContent = readFileSync(filePath, 'utf8');

  const { data, content } = matter(fileContent);

  return {
    frontmatter: data,
    content,
  };
}

export function renderMarkdown(content: string) {
  return serialize(content || '');
}
