import React, { useState, useEffect } from "react";
import ButtonFilterHome from "../ButtonFilterHome";
import Card from "../Card/Card";

function Posts() {
  //crear estado que tenga el array de la petición(array vacio al inicio)
  const [posts, setPosts] = useState([]);
  //hacer petición y actualizar estado, agregado datos de la petición
  useEffect(() => {
    fetch("https://desafio-kodemia-backend.herokuapp.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <section className="col-span-12 h-auto py-2 border md:col-span-9 lg:col-span-6">
      <div className="">
        <ButtonFilterHome>
          <strong>Relevant</strong>
        </ButtonFilterHome>
        <ButtonFilterHome>Latest</ButtonFilterHome>
        <ButtonFilterHome>Top</ButtonFilterHome>
      </div>
      {posts.map((post, index) => {
        console.log(post);
        //crear variable para sumar valores de objeto reactions,tags iterar elementos
        return (
          <Card
            key={post._id}
            id={post.id}
            title={post.title}
            tags={post.tags}
            reactions={post.reactions.likes}
            comments={post.comments}
            img={post.img}
            activeImg={index === 0}
          />
        );
      })}
    </section>
  );
}

export default Posts;
