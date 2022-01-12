import React, { useEffect, useState } from "react";
import postService from "../../services/Post";
import { useParams } from "react-router-dom";
import ButtonReactionsDetails from "../../components/ButtonReactionsDetails";
import { RiHeart2Line, RiBookmarkLine } from "react-icons/ri";
import { GiUnicorn } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";

function DetailPost() {
  const [post, setPost] = useState([]);
  const params = useParams();

  const getPost = async (id) => {
    const response = await postService.getPostById(id);
    setPost(response);
    console.log(response);
  };

  useEffect(() => {
    const id = params.postID;
    getPost(id);
  }, []);

  return (
    <>
      <div className="grid gap-4 w-full lg:max-w-screen-xl md:grid-cols-[68px_1fr] md:px-4 md:py-1 bg-gray-200 lg:grid-cols-[68px_1fr_342px] ">
        <aside className="bottom-0 fixed h-14 w-full p-2 rounded-t-md bg-white md:static md:bg-transparent md:py-6 md:h-auto">
          <div className="flex justify-around h-10 md:flex-col md:h-auto md:gap-6">
            <ButtonReactionsDetails number={1}>
              <RiHeart2Line size={24} />
            </ButtonReactionsDetails>
            <ButtonReactionsDetails number={2}>
              <GiUnicorn size={24} />
            </ButtonReactionsDetails>
            <ButtonReactionsDetails number={3}>
              <RiBookmarkLine size={24} />
            </ButtonReactionsDetails>
            <ButtonReactionsDetails>
              <BsThreeDots size={24} />
            </ButtonReactionsDetails>
          </div>
        </aside>
        <main className="border border-gray-200 rounded-lg bg-white overflow-hidden">
          <div className="w-full">
            <img src={post.img} alt="imagen" />
          </div>
          <section className="p-5  md:px-16 md:py-8">
            <div className="flex gap-3">
              <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--huswOyCZ--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/212929/a8f974f4-40e6-48df-9b84-debd1a207e38.jpeg"
                alt=""
                className="rounded-full h-10 w-10"
              />
              <div>
                <p className="font-semibold text-base">Aurora Escalera</p>
                <p className="text-gray-500 text-xs">Posted on 9 ene.</p>
              </div>
            </div>
            <h1 className="text-3xl font-black py-4 md:text-4xl">
              {post.title}
            </h1>
            <div className="flex px-9">{post.tags}</div>
            <div>
              <p className="text-lg">{post.content}</p>
            </div>
          </section>
        </main>
        <aside>
          <div className="border border-gray-300 bg-gray-100 rounded-lg md:col-start-2 lg:col-start-3 overflow-hidden">
            <div className="w-full bg-yellow-500 h-7"></div>
            <div className="flex flex-col gap-4 p-4">
              <p>Aurora Escalera</p>
              <button className="rounded-md bg-blue-800 text-white py-1">
                Follow
              </button>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-x-1">
                  <p className="text-gray-500 text-xs font-semibold">WORK</p>
                  <p>Technical Architect at Accenture</p>
                </div>
                <div className="flex flex-col gap-x-1">
                  <p className="text-gray-500 text-xs font-semibold">JOINED</p>
                  <p>6 de ene. de 2022</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <footer className="w-full bg-gray-300 pb-16 text-center p-5 flex flex-col gap-3">
        <p className="text-sm">
          <a href="/" className="text-blue-700">
            DEV Community
          </a>{" "}
          — A constructive and inclusive social network for software developers.
          With you every step of your journey.
        </p>
        <p className="text-sm">
          Built on Forem — the open source software that powers DEV and other
          inclusive communities. Made with love and Ruby on Rails. DEV Community
          © 2016 - 2022.
        </p>
      </footer>
    </>
  );
}

export default DetailPost;
