import { useState, useEffect } from "react";

export default function PlanetInfo() {

    useEffect(() => {
        fetch(`https://api.spotify.com/v1/albums/${albumId}`, authAccess)
          .then((result) => result.json())
          .then((data) => {
            setAlbumData(data);
            setLoading(false);
          });
      }, []);

    return (
        <figure className="planet-container">
            <img
            src={planetImg}
            alt="Image of a planet"
            className="planet-photo"
            />
            <figcaption className="planet-desc">
                <h1 planet-name>{planetName}</h1>

            </figcaption>
        </figure>
    )
}