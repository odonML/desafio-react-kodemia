import React from "react";
import ButtonReactions from "../ButtonReactions";
import ButtonTagHome from "../ButtonTagHome";
import * as icon from "react-icons/bi";
import ButtonSaveHome from "../ButtonSaveHome";
import ButtonDelHome from "../ButtonDelHome";
import CardUser from "../CardUser/CardUser";
import ButtonPost from "../ButtonPost";

function Card({ activeImg = false, title, reactions, comments, tags, img }) {
  return (
    <div className="border rounded-md bg-white">
      {activeImg === true ? (
        <div className="w-full h-80 border">
          <img className="h-full" src={img} alt="" />
        </div>
      ) : (
        ""
      )}
      {/* {img !== null ? <img className="w-5 h-5" src={icon} alt={text} /> : ""} */}
      <div className="bg-white p-4">
        <CardUser />
        <div className="flex px-9">
          <ButtonPost>{title}</ButtonPost>
        </div>
        <div className="flex px-9">
          {tags.map((tag) => (
            <ButtonTagHome>#{tag}</ButtonTagHome>
          ))}
        </div>
        <div className="flex justify-between items-center px-7 py-4">
          <div className="flex flex-row">
            <ButtonReactions>
              <icon.BiHeart size={18} />
              <p className="px-2">{reactions} Reactions</p>
            </ButtonReactions>
            <ButtonReactions>
              <icon.BiComment size={18} />
              <p className="px-2">{comments} Comments</p>
            </ButtonReactions>
          </div>
          <div className="flex flex-row">
            <ButtonSaveHome>Edit</ButtonSaveHome>
            <ButtonDelHome>Delete</ButtonDelHome>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
