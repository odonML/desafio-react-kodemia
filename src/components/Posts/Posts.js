import React from "react";
import ButtonFilterHome from "../ButtonFilterHome";
import Card from "../Card/Card";

function Posts() {
  //crear estado que tenga el array de la petición(array vacio al inicio)
  //hacer petición y actualizar estado, agregado datos de la petición

  return (
    <section className="col-span-12 h-auto py-2 border md:col-span-9 lg:col-span-6">
      <div className="">
        <ButtonFilterHome>
          <strong>Relevant</strong>
        </ButtonFilterHome>
        <ButtonFilterHome>Latest</ButtonFilterHome>
        <ButtonFilterHome>Top</ButtonFilterHome>
      </div>
      {/* iterar el estado e imprimir datos en la card */}
      <Card titulo="" />
    </section>
  );
}

export default Posts;
