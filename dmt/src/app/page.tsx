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
import Navbar from "@/components/custom/Navbar";


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
    <Navbar/>
    <div className="flex bg-slate-900 px-10 pt-5">
          <main className="w-70p">
          <div className="flex flex-wrap gap-5 justify-center">
                  {posts.map((post, idx) => (
                    <ArticleCard key={idx} {...post} />
                  ))}
                </div>
          </main>

          <aside className="w-30p pl-5">
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
