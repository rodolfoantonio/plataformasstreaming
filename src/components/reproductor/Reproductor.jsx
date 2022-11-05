import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import YouTube from 'react-youtube';

import apiConfig from '../../api/apiConfig';
import InfoBanner from '../infobanner/InfoBanner';

const Reproductor = () => {
  const movie = useSelector((state) => state.movie.value);

  const [playing, setPlaying] = useState(false);
  const [trailer, setTrailer] = useState(false);

  useEffect(() => {
    if (movie.videos && movie.videos.results) {
      const trailer = movie.videos.results.find(
        (vid) => vid.name === "Official Trailer"
      );
      setTrailer(trailer ? trailer : movie.videos.results[0]);
    }
  }, [movie]);

  const updatePlaying = () => setPlaying(true);

  return (
    <div>
      <main>
        {movie ? (
          <div
            className="viewtrailer"
            style={{
              backgroundImage: `url("${apiConfig.URL_IMAGE}${movie.backdrop_path}")`,
            }}
          >
            {playing ? (
              <>
                <YouTube
                  videoId={trailer.key}
                  className="reproductor container"
                  containerClassName={"youtube-container amru"}
                  opts={{
                    width: "100%",
                    height: "100%",
                    playerVars: {
                      autoplay: 1,
                      controls: 0,
                      cc_load_policy: 0,
                      fs: 0,
                      iv_load_policy: 0,
                      modestbranding: 0,
                      rel: 0,
                      showinfo: 0,
                    },
                  }}
                />
                <button onClick={() => setPlaying(false)} className="boton">
                  Close
                </button>
              </>
            ) : ( <InfoBanner movie={movie} trailer={trailer} HandlerUpdatePlaying={ (state) => updatePlaying }/> )}
          </div>
        ) : null}
      </main>
    </div>
  );
};

export default Reproductor;
