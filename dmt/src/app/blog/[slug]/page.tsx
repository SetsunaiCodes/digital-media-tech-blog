
/*Contentlayer*/
import { Mdx } from "@/components/Mdx";
import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { compareDesc, format, parseISO } from "date-fns";

/*React Components*/
import { FC, useRef } from "react";


/*Stylesheets*/
import "./ArtikelView.css"
import Footer from "@/components/custom/Footer";



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
  const formattedDate = format(parseISO(doc.date), "dd.MM.yyyy");

  return (
    <div>
      <main>
        <div className="article-container">
          <div className="article-head-container">
          <img src={doc.img} alt="Articlehead" />
          <div className="airticle-head-sub-container">
          <h1>{doc.title}</h1>
          <span>{formattedDate}</span>
          <p>{doc.des}</p>
        </div>
      </div>
          <Mdx code={doc.body.code} />

          </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Page;
