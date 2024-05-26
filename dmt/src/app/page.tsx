
//NextJS Imports
import { Link } from "lucide-react";
import Image from "next/image";

//Contentlayer Imports
import { allDocs, Doc } from "contentlayer/generated";


//ShadCN UI
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"




//Base Layout for the Cards
export function ArticleCard(post: Doc){
  const path: string = "blog/" + post.slugParams;


  return(
  
  <Card>
    <a href={path}>
      <img src={post.img} alt={post.title} />
    </a>
    <CardHeader>
      <CardTitle>{post.title}</CardTitle>
      <CardDescription>{post.des}</CardDescription>
    </CardHeader>
  </Card>
  )
}

//Root Component
export default function Home() {
  const posts = allDocs

  return (
        <div>
          <main>
            <h1 className="text-3xl font-bold">Geschriebene Artikel</h1>

            <Tabs defaultValue="devlogs" className="w-[100p]">
            <TabsList className="grid w-[20vw] grid-cols-2">
              <TabsTrigger value="devlogs">DevLogs</TabsTrigger>
              <TabsTrigger value="veranstaltungen">Veranstaltungen</TabsTrigger>
            </TabsList>
            <TabsContent value="devlogs">
             {/*Content of first tab*/}
              {posts.map((post, idx) => (
               <ArticleCard key={idx} {...post} />
               ))}
              
             <div className="flex flex-wrap">

              </div>

            </TabsContent>
            <TabsContent value="veranstaltungen">
              {/*Content of second tab*/}


            </TabsContent>
          </Tabs>








          </main>
      </div>
  )
}
