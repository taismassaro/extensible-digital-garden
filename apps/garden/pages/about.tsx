import { GetStaticProps } from 'next';
import './about.module.css';

/* eslint-disable-next-line */
export interface AboutProps {
  name: string;
}

export function About({ name }: AboutProps) {
  return (
    <div>
      <h1>Welcome {name}!</h1>
    </div>
  );
}

/**
 * - getStaticProps
 * runs at build time
 * should return optional object with props
 *
 * - getStaticPaths
 * intended for dynamic routes
 * tais.dev/notes/[slug]
 */

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      name: 'Taís',
    },
  };
};

export default About;
