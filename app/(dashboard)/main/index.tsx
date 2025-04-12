"use client";
import React from "react";
import { PlusCircleIcon } from "lucide-react"; // Add Music uchun ikon

const Main = () => {
  // Listen Now ma'lumotlari (ko'proq kartochka qo'shamiz)
  const listenNowPlaylists = [
    { title: "React Rendezvous", artist: "Ethan Byte", img: "/card.png" },
    { title: "Async Awakenings", artist: "Nina Netcode", img: "/card.png" },
    { title: "The Art of Reusability", artist: "Lena Logic", img: "/card.png" },
    { title: "Stateful Symphony", artist: "Beth Binarr", img: "/card.png" },
    { title: "Dynamic Beats", artist: "Alex Code", img: "/card.png" },
    { title: "Code Symphony", artist: "Sam Dev", img: "/card.png" },
    { title: "Tech Rhythms", artist: "Mia Tech", img: "/card.png" },
    { title: "Digital Flow", artist: "John Dev", img: "/card.png" },
    { title: "Sync Beats", artist: "Sara Code", img: "/card.png" },
  ];

  // Made for You ma'lumotlari (ko'proq kartochka qo'shamiz)
  const madeForYouPlaylists = [
    { title: "Thinking Components", artist: "Lena Loaic", img: "/card2.png" },
    { title: "Functional Fury", artist: "Beth Binarr", img: "/card2.png" },
    { title: "React Rendezvous", artist: "Ethan Byte", img: "/card2.png" },
    { title: "Stateful Symphony", artist: "Beth Binarr", img: "/card2.png" },
    { title: "Async Awakenings", artist: "Nina Netcode", img: "/card2.png" },
    { title: "The Art", artist: "Nina Netcode", img: "/card2.png" },
    { title: "React Rendezvous", artist: "Ethan Byte", img: "/card2.png" },
    { title: "Code Harmony", artist: "Alex Dev", img: "/card2.png" },
    { title: "Tech Pulse", artist: "Mia Tech", img: "/card2.png" },
    { title: "Logic Beats", artist: "John Logic", img: "/card2.png" },
  ];

  return (
    <div className="p-3">
      {/* Tabs Section */}
      <div className="  mb-6 max-[400px]:hidden">
        <nav className="flex space-x-4">
          <a
            href="#"
            className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-t-lg border-b-2 border-transparent hover:border-blue-500"
          >
            Music
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-t-lg border-b-2 border-transparent hover:border-blue-500"
          >
            Podcasts
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-t-lg border-b-2 border-transparent hover:border-blue-500"
          >
            Live
          </a>
          <div className="ml-auto">
            <button className="flex items-center bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-200">
              <PlusCircleIcon className="mr-2 h-5 w-5" />
              Add Music
            </button>
          </div>
        </nav>
      </div>

      {/* Listen Now Section */}
      <div className="mb-6 border-b pb-2">
        <h1 className="text-2xl font-bold">Listen Now</h1>
        <p className="text-gray-500">Top picks for you. Updated daily.</p>
      </div>

      {/* Listen Now Playlist Cards with Horizontal Scroll */}
      <div className="relative mb-6">
        <div className="flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 pb-4 max-w-[calc(100vw-306px)] max-[900px]:max-w-full">
          {listenNowPlaylists.map((playlist, index) => (
            <div
              key={index}
              className="min-w-[200px] bg-white p-4 rounded shadow"
            >
              <img
                src={playlist.img}
                alt={playlist.title}
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="mt-2 font-semibold text-center">
                {playlist.title}
              </h3>
              <p className="text-gray-500 text-center">{playlist.artist}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Made for You Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Made for You</h1>
        <p className="text-gray-500">Your personal playlists. Updated daily.</p>
      </div>

      {/* Made for You Playlist Cards with Horizontal Scroll */}
      <div className="relative">
      <div className="flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 pb-4 max-w-[calc(100vw-306px)] max-[900px]:max-w-full">

          {madeForYouPlaylists.map((playlist, index) => (
            <div
              key={index}
              className="min-w-[150px] bg-white p-4 rounded shadow"
            >
              <img
                src={playlist.img}
                alt={playlist.title}
                className="w-full h-32 object-cover rounded"
              />
              <h3 className="mt-2 font-semibold text-center text-sm">
                {playlist.title}
              </h3>
              <p className="text-gray-500 text-center text-xs">
                {playlist.artist}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
