import React from "react";
import ButtonFilterHome from "../ButtonFilterHome";
import ButtonTagHome from "../ButtonTagHome";
import Card from "../Card/Card";

function Posts() {
  return (
    <section className="px-6 col-span-12 h-16 border md:col-span-9 lg:col-span-6">
      <div className="">
        <ButtonFilterHome>
          <strong>Relevant</strong>
        </ButtonFilterHome>
        <ButtonFilterHome>Latest</ButtonFilterHome>
        <ButtonFilterHome>Top</ButtonFilterHome>
      </div>
      <div>
        <Card titulo="" />
        <ButtonTagHome>#react</ButtonTagHome>
        <ButtonTagHome>#webdev</ButtonTagHome>
        <ButtonTagHome>#javascript</ButtonTagHome>
        <ButtonTagHome>#css</ButtonTagHome>
      </div>
    </section>
  );
}

export default Posts;
