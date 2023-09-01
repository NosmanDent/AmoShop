import React from "react";

function Loader() {
  return (
    <div className="grid place-content-center py-36 bg-black">
      <p className="h-20 w-20 rounded-full border-4 border-l-gray-600 border-white animate-spin text-white text-center"></p>
    </div>
  );
}

export default Loader;
