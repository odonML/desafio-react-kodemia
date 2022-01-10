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
    <div className="border bg-white px-4 py-4">
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
  );
}

export default Card;
