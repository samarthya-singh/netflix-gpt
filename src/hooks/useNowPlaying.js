import React, { useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addMovies } from "../utils/movieSlice";

function useNowPlaying() {
  const dispatch = useDispatch();
  const fetchNowPlaying = async () => {
    const fetchData = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options,
    );
    const json = await fetchData.json();

    dispatch(addMovies(json?.results));
  };

  useEffect(() => {
    fetchNowPlaying();
  }, []);

}

export default useNowPlaying;
