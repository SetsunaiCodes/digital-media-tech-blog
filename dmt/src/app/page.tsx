"use client"
// Contentlayer Imports
import { allDocs, Doc } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import * as React from "react";

// ShadCN UI
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

//Custom Components
import Highlight from "@/components/custom/highlight";

interface ArtikelInterface {
  title: string;
  des: string;
  date: string;
  slugParams: string;
  img: string;
}

// Base Layout for the Cards
function ArticleCard({ title, des, date, slugParams, img }: ArtikelInterface) {
  const path: string = "blog/" + slugParams;

  return (
    <Card>
      <a href={path}>
        <img src={img} alt={title} className="object-cover rounded-sm rounded-b-none" />
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
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.des.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Highlight/>
    <div className="flex bg-white dark:bg-slate-900">
          <main className="w-70p">
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

          <aside className="w-30p mt-20 pl-5 pr-5">
            <Command>
              <CommandInput 
                placeholder="Type a command or search..." 
                onValueChange={handleSearchChange}
              />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Articles">
                  {filteredPosts.map((post, idx) => (
                    <CommandItem key={idx} onSelect={() => window.location.href = `blog/${post.slugParams}`}>
                      {post.title}
                      <CommandShortcut>{format(parseISO(post.date), "PPP")}</CommandShortcut>
                    </CommandItem>
                  ))}
                </CommandGroup>
                <CommandSeparator />
              </CommandList>
            </Command>
          </aside>
        </div>


    </div>
  );
}
