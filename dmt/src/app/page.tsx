// Contentlayer Imports
import { allDocs, Doc } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";

// ShadCN UI
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// FIXME: Hier fehlt ein Interface für das Doc
interface ArtikelInterface {
  title: string;
  des: string;
  date: string;
  slugParams: string;
  img: string;
}

// Base Layout for the Cards
export function ArticleCard({ title, des, date, slugParams, img }: ArtikelInterface) {
  const path: string = "blog/" + slugParams;

  return (
    <Card>
      <a href={path}>
        <img src={img} alt={title} />
      </a>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{des}</CardDescription>
      </CardHeader>
    </Card>
  );
}

// Root Component
export default function Home() {
  const posts = allDocs.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div>
      <main className="w-80p m-auto">
        <h1 className="text-3xl font-bold">Geschriebene Artikel</h1>

        <Tabs defaultValue="devlogs" className="w-[100p]">
          <TabsList className="grid w-[20vw] grid-cols-2">
            <TabsTrigger value="devlogs">DevLogs</TabsTrigger>
            <TabsTrigger value="veranstaltungen">Veranstaltungen</TabsTrigger>
          </TabsList>
          <TabsContent value="devlogs">
            <div className="flex flex-wrap gap-5 justify-center">
              {/* Content of first tab */}
              {posts.map((post, idx) => (
                <ArticleCard key={idx} {...post} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="veranstaltungen">
            {/* Content of second tab */}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
