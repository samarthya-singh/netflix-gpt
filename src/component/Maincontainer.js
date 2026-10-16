import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const Maincontainer = () => {
  const nowPlaying = useSelector((store) => store.movie?.nowPlaying);
  if (nowPlaying == null) return;
  const mainmovie = nowPlaying[0];

  const { title, overview,id } = mainmovie;
  // console.log(mainmovie);

  return (
    <div className="py-16">
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
}

export default Maincontainer
