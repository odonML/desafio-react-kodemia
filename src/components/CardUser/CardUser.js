import React from "react";
import AvatarUser from "../AvatarUser";
import ButtonDateHome from "../ButtonDateHome";
import ButtonUserNameHome from "../ButtonUserNameHome";

function CardUser() {
  return (
    <div className="flex">
      <AvatarUser
        img="https://res.cloudinary.com/practicaldev/image/fetch/s--huswOyCZ--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/212929/a8f974f4-40e6-48df-9b84-debd1a207e38.jpeg"
        text=""
      />
      <div className="flex flex-col">
        <ButtonUserNameHome>User Name</ButtonUserNameHome>
        <ButtonDateHome>Date Post</ButtonDateHome>
      </div>
    </div>
  );
}

export default CardUser;
