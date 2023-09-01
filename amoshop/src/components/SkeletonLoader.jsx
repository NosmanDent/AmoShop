import React from "react";

function SkeletonLoader() {
  return (
    <div className="flex flex-row content-center  md:gap-10">
      <Skeletons />
    </div>
  );
}

function Skeletons() {
  return (
    <div className="skeleton-loader overflow-hidden w-64 md:h-[400px] rounded-[15px] md:shadow-[0px_22px_44px_rgba(217,225,244,0.36)] py-5 px-[14px] animate-pulse">
      <div className="h-[357px] md:h-[280px] w-full rounded-[0.5rem] mb-2.5 bg-[#F4F2F2]" />
      <div className="flex flex-row items-center justify-between">
        <h1 className="bg-[#F4F2F2] w-1/2 p-3 rounded-lg"></h1>
        <h1 className="bg-[#F4F2F2] w-[50px] p-3 rounded-lg"></h1>
      </div>
      <div className="bg-[#f4f2f2] p-5 mt-2 w-[50px] rounded-full"></div>
    </div>
  );
}

export default SkeletonLoader;
