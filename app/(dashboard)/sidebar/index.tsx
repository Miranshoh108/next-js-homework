import React from "react";
import {
  MusicIcon,
  RadioIcon,
  DiscIcon,
  PlayIcon,
  HeadphonesIcon,
  AlbumIcon,
  UserIcon,
  PlusCircleIcon,
  ClockIcon,
  Mic2Icon,
  LibraryIcon,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64  text-black p-4 h-full border-r max-[900px]:hidden">
      {/* Discover Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Discover</h2>
        <ul className="space-y-2">
          <li>
            <a
              href="/dashboard"
              className="flex items-center p-2  bg-gray-900 text-white rounded transition duration-200"
            >
              <PlayIcon className="mr-2 h-5 w-5" />
              Listen Now
            </a>
          </li>
          <li>
            <a
              href="/browse"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-900 hover:text-white rounded transition duration-200"
            >
              <MusicIcon className="mr-2 h-5 w-5" />
              Browse
            </a>
          </li>
          <li>
            <a
              href="/radio"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-900 hover:text-white rounded transition duration-200"
            >
              <RadioIcon className="mr-2 h-5 w-5" />
              Radio
            </a>
          </li>
        </ul>
      </div>

      {/* Library Section */}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Library</h2>
        <ul className="space-y-2">
          <li>
            <a
              href="/playlists"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-900 hover:text-white rounded transition duration-200"
            >
              <DiscIcon className="mr-2 h-5 w-5" />
              Playlists
            </a>
          </li>
          <li>
            <a
              href="/songs"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-900 hover:text-white rounded transition duration-200"
            >
              <PlayIcon className="mr-2 h-5 w-5" />
              Songs
            </a>
          </li>
          <li>
            <a
              href="/made-for-you"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-900 hover:text-white rounded transition duration-200"
            >
              <PlusCircleIcon className="mr-2 h-5 w-5" />
              Made for you
            </a>
          </li>
          <li>
            <a
              href="/artists"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-900 hover:text-white rounded transition duration-200"
            >
              <UserIcon className="mr-2 h-5 w-5" />
              Artists
            </a>
          </li>
          <li>
            <a
              href="/albums"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-900 hover:text-white rounded transition duration-200"
            >
              <AlbumIcon className="mr-2 h-5 w-5" />
              Albums
            </a>
          </li>
        </ul>
      </div>

      {/* Playlists Section */}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Playlists</h2>
        <ul className="space-y-2">
          <li>
            <a
              href="/recently-added"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-900 hover:text-white rounded transition duration-200"
            >
              <ClockIcon className="mr-2 h-5 w-5" />
              Recently Added
            </a>
          </li>
          <li>
            <a
              href="/recently-played"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-900 hover:text-white rounded transition duration-200"
            >
              <ClockIcon className="mr-2 h-5 w-5" />
              Recently Played
            </a>
          </li>
          <li>
            <a
              href="/top-songs"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-900 hover:text-white rounded transition duration-200"
            >
              <Mic2Icon className="mr-2 h-5 w-5" />
              Top Songs
            </a>
          </li>
          <li>
            <a
              href="/top-albums"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-900 hover:text-white rounded transition duration-200"
            >
              <AlbumIcon className="mr-2 h-5 w-5" />
              Top Albums
            </a>
          </li>
          <li>
            <a
              href="/top-artists"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-900 hover:text-white rounded transition duration-200"
            >
              <UserIcon className="mr-2 h-5 w-5" />
              Top Artists
            </a>
          </li>
          <li>
            <a
              href="/logic-discography"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-900 hover:text-white rounded transition duration-200"
            >
              <LibraryIcon className="mr-2 h-5 w-5" />
              Logic Discography
            </a>
          </li>
          <li>
            <a
              href="/bedtime-beats"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-900 hover:text-white rounded transition duration-200"
            >
              <HeadphonesIcon className="mr-2 h-5 w-5" />
              Bedtime Beats
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;