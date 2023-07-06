import { useEffect, useState } from 'react'
import './App.css'
import ViewMemes from './components/ViewMemes';
import FindMeme from './components/FindMeme';
import GenerateMeme from './components/GenerateMeme';
import DeleteMeme from './components/DeleteMeme';
import UpdateMeme from './components/UpdateMeme';
import AllMemes from './components/AllMemes';


function App() {

  const [name, setName] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    printMeme();
  }, [name])

  const printMeme = async () => {
    fetch('http://localhost:8080/api/memes' + '/' + name)
    .then(response => response.json())
    .then(base64Image => {
      setImageSrc(`data:image/png;base64, ${base64Image.base64}`);
    })
    .catch(error => {
      console.error(error);
    });
  }

  return (
    <>
      <div>
        <h1>what do you meme</h1>
        <FindMeme setName={setName}/>
        <ViewMemes imageSrc={imageSrc} memeName={name}/>
        <GenerateMeme />
        <UpdateMeme />
        <DeleteMeme />
        <AllMemes />
      </div>
    </>
  )
}

export default App
