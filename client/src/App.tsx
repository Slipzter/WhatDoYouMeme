import { useEffect, useState } from 'react'
import './App.css'
import MemeForm from './components/FindMeme';
import ViewMemes from './components/ViewMemes';
import FindMeme from './components/FindMeme';


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
      console.error('Error:', error);
    });
  }





  return (
    <>
      <div>
        <FindMeme setName={setName}/>
        <p id='image-container'></p>
        <ViewMemes imageSrc={imageSrc}/>
      </div>
    </>
  )
}

export default App
