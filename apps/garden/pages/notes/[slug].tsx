import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import './[slug].module.css';

/* eslint-disable-next-line */
export interface NoteProps extends ParsedUrlQuery {
  slug: string;
}

export function Note(props: NoteProps) {
  return (
    <div>
      <h1>Visiting {props.slug}</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps<NoteProps> = async ({
  params,
}: {
  params: NoteProps;
}) => {
  return {
    props: {
      slug: params.slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths<NoteProps> = async (context) => {
  return {
    paths: [{ params: { slug: 'page1' } }, { params: { slug: 'page2' } }],
    fallback: false,
  };
};

export default Note;
