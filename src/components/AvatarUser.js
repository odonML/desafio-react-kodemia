import React from "react";

function AvatarUser({ img, text }) {
  return (
    <div className="mx-1 rounded-full cursor-pointer">
      <img className="w-7 h-7 rounded-full" src={img} alt={text} />
    </div>
  );
}

export default AvatarUser;
