import React from "react";

function DetailPost() {
  return (
    <>
      <div className="grid lg:grid-cols-[68px_1fr_342px] md:grid-cols-[68px_1fr] gap-4 w-full lg:max-w-screen-xl md:p-4  bg-gray-200 ">
        <aside className="bottom-0 fixed h-14 w-full p-2 rounded-t-md bg-white">
          <div className="flex justify-around h-10">
            <button className="flex gap-3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  class="crayons-icon"
                >
                  <path d="M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0112 3.64a6.5 6.5 0 019.179 9.154zM4.575 5.383a4.5 4.5 0 000 6.364L12 19.172l7.425-7.425a4.5 4.5 0 10-6.364-6.364L8.818 9.626 7.404 8.21l3.162-3.162a4.5 4.5 0 00-5.99.334l-.001.001z"></path>
                </svg>
              </span>
              <span>1</span>
            </button>
            <button className="flex gap-3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  class="crayons-icon"
                >
                  <path d="M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0112 3.64a6.5 6.5 0 019.179 9.154zM4.575 5.383a4.5 4.5 0 000 6.364L12 19.172l7.425-7.425a4.5 4.5 0 10-6.364-6.364L8.818 9.626 7.404 8.21l3.162-3.162a4.5 4.5 0 00-5.99.334l-.001.001z"></path>
                </svg>
              </span>
              <span>1</span>
            </button>
            <button className="flex gap-3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  class="crayons-icon"
                >
                  <path d="M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0112 3.64a6.5 6.5 0 019.179 9.154zM4.575 5.383a4.5 4.5 0 000 6.364L12 19.172l7.425-7.425a4.5 4.5 0 10-6.364-6.364L8.818 9.626 7.404 8.21l3.162-3.162a4.5 4.5 0 00-5.99.334l-.001.001z"></path>
                </svg>
              </span>
              <span>1</span>
            </button>
            <button className="flex gap-3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  aria-hidden="true"
                  class="dropdown-icon crayons-icon"
                >
                  <title>More...</title>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                  ></path>
                </svg>
              </span>
              <span></span>
            </button>
          </div>
        </aside>
        <main className="border border-gray-200 rounded bg-white p-5 md:px-16 md:py-8">
          <div className="flex gap-3">
            <img
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--dTz4VLy3--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/520716/dc6051bc-9129-4879-a833-f743051af755.jpeg"
              alt=""
              className="rounded-full h-10 w-10"
            />
            <div>
              <p className="font-semibold text-base">Tulio Calil</p>
              <p className="text-gray-500 text-xs">Posted on 9 ene.</p>
            </div>
          </div>
          <h1 className="text-3xl font-black py-4">
            Criando Blog com React do ZERO - Iniciando no React
          </h1>
          <div>
            <p className="text-lg">
              Que tal criar um blog com React do total zero, desde o
              create-react-app até a listagem dos posts ? Esse vídeo foi uma
              live que rolou no meu canal e foi super legal gravar ela por que o
              foco foi total para quem ta iniciando agora no React! Você ta
              iniciando ou conhece alguém ? Manda o link pra ele e vamos
              aprender!
            </p>
          </div>
        </main>
        <aside className="border border-pink-900 md:col-start-2 lg:col-start-3">
          Aside2
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
