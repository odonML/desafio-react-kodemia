import React from "react";
import AvatarUser from "../AvatarUser";
import ButtonReactions from "../ButtonReactions";
import ButtonTagHome from "../ButtonTagHome";
import * as icon from "react-icons/bi";
import ButtonSaveHome from "../ButtonSaveHome";

function Card() {
  return (
    <div>
      <AvatarUser
        img="https://res.cloudinary.com/practicaldev/image/fetch/s--huswOyCZ--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/212929/a8f974f4-40e6-48df-9b84-debd1a207e38.jpeg"
        text=""
      />
      <div>
        <ButtonTagHome>#react</ButtonTagHome>
        <ButtonTagHome>#webdev</ButtonTagHome>
        <ButtonTagHome>#javascript</ButtonTagHome>
        <ButtonTagHome>#css</ButtonTagHome>
      </div>
      <div>
        <div className="flex flex-row">
          <ButtonReactions>
            <icon.BiHeart size={18} />
            Reactions
          </ButtonReactions>
          <ButtonReactions>
            <icon.BiComment size={18} />
            Comments
          </ButtonReactions>
          <ButtonSaveHome>Save</ButtonSaveHome>
        </div>
      </div>
    </div>
  );
}

export default Card;
