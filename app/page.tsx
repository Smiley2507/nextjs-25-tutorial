import BlogPostCard from "@/components/general/BlogPostCard";
import { prisma } from "./utils/db";
import { Suspense } from "react";
// import { BlogPost } from '@prisma/client';

export const revalidate = 60;

async function fetchPosts() {
  // await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate network delay
  const data =  await prisma.blogPost.findMany({
    select: {
      title: true,
      content:true,
      imageUrl:true,
      authorImage: true,
      authorName: true,
      id: true,
      createdAt: true, 
      updatedAt: true,
      authorId: true,  
    },
    orderBy:{
      createdAt: 'desc',
    }
  });
  return data;
}

export default  function Home() {
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Latest Posts</h1>
      <Suspense fallback={<div>Loading posts...</div>}>
      <BlogPost />     
      </Suspense>
    </div>
  );
}

async function BlogPost(){
  const data = await fetchPosts();
  return(
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((item) => (
          <BlogPostCard key={item.id} data={item} />
        ))}
      </div>
  )}