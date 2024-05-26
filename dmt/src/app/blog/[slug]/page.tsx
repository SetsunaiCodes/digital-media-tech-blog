
/*Contentlayer*/
import { Mdx } from "@/components/Mdx";
import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { compareDesc, format, parseISO } from "date-fns";

/*React Components*/
import { FC, useRef } from "react";


/*Stylesheets*/




interface pageProps {
  params: {
    slug: string;
  };
}

function getDocFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.slugParams === slug);
  if (!doc) notFound();

  return doc;
}

const Page: FC<pageProps> = ({ params }) => {
  const doc = getDocFromParams(params.slug);

  return (
    <main>
          <Mdx code={doc.body.code} />
    </main>
  );
};

export default Page;
