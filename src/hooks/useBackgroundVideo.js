import React, { useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerdata } from "../utils/movieSlice";

function useBackgroundVideo(movieId) {
  const dispatch = useDispatch();
  const fetchBackgroundVideo = async () => {
    const fetchdata = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      options,
    );

    const json = await fetchdata.json();

    const trailerData = json.results.filter(
      (value, index) => value.type == "Trailer",
    );
    // if there is a two trailer then i want only 1 then we make a trailerdata[0]
    // and what if there is no trailer then we have to handel this case also
    const trailer = trailerData.length ? trailerData[0] : json.results[0];

    dispatch(addTrailerdata(trailer));
    console.log(trailer);
  };
  useEffect(() => {
    fetchBackgroundVideo();
  }, []);
}
export default useBackgroundVideo;
