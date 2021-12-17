import Link from 'next/link';

export interface CustomLinkProps {
  as: string;
  href: string;
  children: React.ReactNode;
}

export function CustomLink({ as, href, children, ...props }: CustomLinkProps) {
  return (
    <Link as={as} href={href}>
      <a className="text-3xl" {...props}>
        {children}
      </a>
    </Link>
  );
}

export default CustomLink;
