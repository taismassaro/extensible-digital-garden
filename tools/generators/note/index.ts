import {
  Tree,
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
} from '@nrwl/devkit';

interface NoteSchema {
  title: string;
  author: string;
  excerpt?: string;
}

export default async function (
  tree: Tree,
  { title, author, excerpt }: NoteSchema
) {
  // uses https://ejs.co templating
  generateFiles(tree, joinPathFragments(__dirname, './files'), './_notes', {
    title,
    author,
    excerpt,
    normalizedTitle: names(title).fileName,
    creationDate: new Date().toISOString(),
  });

  await formatFiles(tree);
}
