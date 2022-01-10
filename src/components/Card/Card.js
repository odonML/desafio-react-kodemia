import React from "react";
import ButtonReactions from "../ButtonReactions";
import ButtonTagHome from "../ButtonTagHome";
import * as icon from "react-icons/bi";
import ButtonSaveHome from "../ButtonSaveHome";
import ButtonTimeHome from "../ButtonTimeHome";
import CardUser from "../CardUser/CardUser";
import ButtonPost from "../ButtonPost";

function Card() {
  return (
    <div className="border rounded-md bg-white">
      <div className="w-full h-80 border">
        <img
          className="h-full"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--Fdrp4fCa--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/t5vwz4xp3u61jn0q208a.png"
        />
      </div>
      <div className="bg-white p-4">
        <CardUser />
        <div className="flex px-9">
          <ButtonPost>TITLE</ButtonPost>
        </div>
        <div className="flex px-9">
          <ButtonTagHome>#react</ButtonTagHome>
          <ButtonTagHome>#webdev</ButtonTagHome>
          <ButtonTagHome>#javascript</ButtonTagHome>
          <ButtonTagHome>#css</ButtonTagHome>
        </div>
        <div className="flex justify-between px-7 py-4">
          <div className="flex flex-row">
            <ButtonReactions>
              <icon.BiHeart size={18} />
              <p className="px-2">Reactions</p>
            </ButtonReactions>
            <ButtonReactions>
              <icon.BiComment size={18} />
              <p className="px-2">Comments</p>
            </ButtonReactions>
          </div>
          <div className="flex flex-row">
            <ButtonTimeHome>x min read</ButtonTimeHome>
            <ButtonSaveHome>Save</ButtonSaveHome>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
