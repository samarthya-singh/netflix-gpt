import React from 'react'

const VideoTitle = ({title, overview }) => {
  return (
    <div className="absolute inset-0 z-10 flex items-center bg-gradient-to-r from-black via-black/60 to-transparent px-6 md:px-16">
      <div className="mt-20 max-w-2xl text-white md:mt-0">
        {/* Movie Title */}
        <h2 className="mb-4 text-3xl font-extrabold tracking-wide md:text-5xl lg:text-6xl">
          {title}
        </h2>

        {/* Movie Overview */}
        <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-gray-200 md:text-lg">
          {overview}
        </p>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-md bg-white px-5 py-2.5 font-bold text-black transition hover:bg-white/80 md:px-7 md:py-3">
            <span className="text-xl">▶</span>
            Play Now
          </button>

          <button className="flex items-center gap-2 rounded-md bg-gray-500/70 px-5 py-2.5 font-bold text-white transition hover:bg-gray-500/50 md:px-7 md:py-3">
            <span className="text-xl">ⓘ</span>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle
