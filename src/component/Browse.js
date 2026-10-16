import React from 'react'
import Header from './Header';
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';
import useNowPlaying from "../hooks/useNowPlaying";


const Browse = () => {
  useNowPlaying();

  return (
    <div>
      <Header />
      <Maincontainer />
      <Secondarycontainer />



      {/* mainContainer
      -videoTitel
      -videoBackground
      SecondaryContainer
      -movieList *n
      -cards *n */}
    </div>
  );
}

export default Browse
