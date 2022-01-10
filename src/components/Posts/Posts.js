import React from "react";
import ButtonFilterHome from "../ButtonFilterHome";
import Card from "../Card/Card";

function Posts() {
  return (
    <section className="col-span-12 h-auto py-2 border md:col-span-9 lg:col-span-6">
      <div className="">
        <ButtonFilterHome>
          <strong>Relevant</strong>
        </ButtonFilterHome>
        <ButtonFilterHome>Latest</ButtonFilterHome>
        <ButtonFilterHome>Top</ButtonFilterHome>
      </div>
      <Card titulo="" />
    </section>
  );
}

export default Posts;
