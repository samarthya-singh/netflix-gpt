import { useSelector } from "react-redux";
import useBackgroundVideo from "../hooks/useBackgroundVideo";

const VideoBackground = ({ movieId }) => {
  useBackgroundVideo(movieId);
  const api_key = useSelector((store) => store.movie.trailerData);
  console.log(api_key);
  
  return (
    <div className="absolute inset-0 -z-10 h-screen w-screen overflow-hidden bg-black">
      <iframe
        className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
        src={
          "https://www.youtube.com/embed/" + api_key.key + "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground
