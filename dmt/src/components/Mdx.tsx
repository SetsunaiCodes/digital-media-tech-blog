import * as React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";

const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={"mt-2 scroll-m-20 text-7xl font-bold tracking-tight"}
      {...props}
    />
  ),

  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={"mt-4 mb-1 scroll-m-20 text-3xl font-bold tracking-tight"}
      {...props}
    />
  ),

  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={"mt-2 scroll-m-20 text-9xl font-bold tracking-tight"}
      {...props}
    />
  ),

  img: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <img className={"mt-2 scroll-m-20 text-9xl tracking-tight"} {...props} />
  ),

  em: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <em className={"  border-l-4 border-white mt-2 text-1xl"} {...props} />
  ),
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx dark:bg-slate-950">
      <Component components={components} />
    </div>
  );
}
  