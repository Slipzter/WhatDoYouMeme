import { useEffect, useState } from 'react'
import './App.css'
import ViewMemes from './components/ViewMemes';
import FindMeme from './components/FindMeme';
import GenerateMeme from './components/GenerateMeme';


function App() {

  const [name, setName] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  const testName = 'test3';

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
        <FindMeme setName={setName}/>
        <ViewMemes imageSrc={imageSrc} memeName={name}/>
        <GenerateMeme />
      </div>
    </>
  )
}

export default App
