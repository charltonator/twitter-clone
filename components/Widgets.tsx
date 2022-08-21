import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import {TwitterTimelineEmbed} from 'react-twitter-embed'

interface Props {
  username: string
}
function Widgets({username}: Props) {


  return (
    <div className="sm:hidden lg:inline col-span-2 px-2 mt-2">
      <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-full mt-2 mb-2">
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="bg-transparent flex-1 outline-none"
        />
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName={username}
        options={{height: 500}}
        />
    </div>
  );
}

export default Widgets;
