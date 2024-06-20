import { NextResponse } from "next/server";

type Posts = {
    userid:number;
    id:number;
    title:string;
    body:string;
}

export async function GET() {
   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
   const posts = await res.json()

   const titles = posts.map((post:Posts) => ({
    id:post.id,
    title:post.title
}))
console.log(titles);

return NextResponse.json(titles)
}