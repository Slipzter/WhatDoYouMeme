import { useState } from "react";


function GenerateMeme() {

  const [inputName, setMemeName] = useState('');
  const [inputType, setMemeType] = useState('');
  const [inputBottomText, setBottomText] = useState('');
  const [inputTopText, setTopText] = useState('');

  const generateMeme = (e: any) => {
    e.preventDefault();
  
    const name = inputName;
    const type = inputType;
    const bottom = inputBottomText;
    const top = inputTopText;
  
    postToApi(name, type, bottom, top);
  
    // Reset the input fields (if desired)
    setMemeName("");
    setMemeType("");
    setBottomText("");
    setTopText("");
  };

  const postToApi = async (name: string, type: string, bottom: string, top: string) => {
    fetch('http://localhost:8080/api/memes', {
      method: 'POST',
      body: JSON.stringify({
        memeName: name,
        memeType: type,
        bottomText: bottom,
        topText: top
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
  };

  return (
    <div>
      <form onSubmit={generateMeme}>
        <label>
          Enter name of meme:
          <input
            type="text" 
            value={inputName}
            placeholder="Name"
            onChange={(e) => setMemeName(e.currentTarget.value)}
          />
        </label>
        <label>
          Enter type of meme:
          <input
            type="text" 
            value={inputType}
            placeholder="Type"
            onChange={(e) => setMemeType(e.currentTarget.value)}
          />
        </label>
        <label>
          Enter top text:
          <input
            type="text" 
            value={inputTopText}
            placeholder="Top Text"
            onChange={(e) => setTopText(e.currentTarget.value)}
          />
        </label>
        <label>
          Enter bottom text:
          <input
            type="text" 
            value={inputBottomText}
            placeholder="Bottom Text"
            onChange={(e) => setBottomText(e.currentTarget.value)}
          />
        </label>
        <input type="submit" value="Generate Meme"/>
      </form>
    </div>
  )
}

export default GenerateMeme