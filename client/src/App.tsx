import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  const testName = 'TEST';

  const printMeme = async () => {
    fetch('http://localhost:8080/api/memes' + '/' + testName)
    .then(response => response.json())
    .then(base64Image => {
      const imgElement = document.createElement('img');
      imgElement.src = `data:image/png;base64, ${base64Image.base64}`;
      const container = document.getElementById('image-container');
      const imageName = document.createElement('h1');
      imageName.innerHTML = base64Image.name;
      container!.appendChild(imageName);
      container!.appendChild(imgElement);

    })
    .catch(error => {
      console.error('Error:', error);
    });
  }


  printMeme();


  return (
    <>
      <div>
        <h1></h1>
        <p id='image-container'>

        </p>
      </div>
    </>
  )
}

export default App
