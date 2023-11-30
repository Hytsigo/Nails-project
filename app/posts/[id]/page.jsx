import Posts from "../page";
import { Suspense } from "react";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

export default async function Page({ params }) {
  const post = await loadPost(params.id);
  return (
    <div>
      <h1>
        {post.id} {post.title}
      </h1>
      <p>{post.body}</p>

      <h3>Otras Publicaciones</h3>
      <hr />
      <Suspense fallback={<div>Cargando publicaciones....</div>}>
        <Posts />
      </Suspense>
    </div>
  );
}
