import { useEffect, useState } from 'react'
import './App.css'
import ViewMemes from './components/ViewMemes';
import FindMeme from './components/FindMeme';
import GenerateMeme from './components/GenerateMeme';
import DeleteMeme from './components/DeleteMeme';
import UpdateMeme from './components/UpdateMeme';

function App() {

  const [name, setName] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    if (name !== "") {
      printMeme();
    }
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
        <header className='app-header'>        
          <h1 className='app-title'>what do you meme ?</h1>
        </header>
        <main className='app-main'>
          <section className='app-forms'>
            <FindMeme setName={setName}/>
            <GenerateMeme />
            <UpdateMeme />
            <DeleteMeme />
          </section>
          <aside className='app-aside'>
            <ViewMemes imageSrc={imageSrc} memeName={name}/>
          </aside>
        </main>

      </div>
    </>
  )
}

export default App
