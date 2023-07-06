import { useEffect, useState } from "react";

type meme = {
  name: string;
  base64: string;
}


function AllMemes() {

  const [allMemes, setAllMemes] = useState([]);

  const handleClick = () => {
    fetch('http://localhost:8080/api/memes')
    .then(response => response.json())
    .then(data => {
      setAllMemes(data);
    })
    .catch(error => {
      console.error(error);
    });
  }

  return (
    <div className="all-memes">
      <h2 className="all-memes__title">All Memes</h2>
      <button className="all-memes__button" onClick={handleClick}>Display All</button>
      <div className="all-memes__gallery">
        {allMemes.map((meme: meme, index: number) => {
          return (
            <img key={index} className="all-memes__gallery__single" src={`data:image/png;base64, ${meme.base64}`} alt="funny meme" />
          )
        })}
      </div>
    </div>
  )
}

export default AllMemes