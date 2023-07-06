import { useState } from "react";


function UpdateMeme() {


  const [name, setName] = useState("");
  const [newName, setNewName] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    updateMeme(name);
    setNewName('');
    setName('');
  }

  const updateMeme = async (name: string) => {
    fetch('http://localhost:8080/api/memes/' + name, {
      method: 'PUT',
      body: JSON.stringify({
        name: newName
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => console.log(response.status));
  };

  return (
    <div className="update-meme">
      <h2>Update Meme</h2>
      <form onSubmit={handleSubmit} className="update-meme__form">
        <label>Choose one to update:
          <input
            type="text" 
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </label>
        <label>Enter new name:
          <input
            type="text" 
            value={newName}
            placeholder="New Name"
            onChange={(e) => setNewName(e.currentTarget.value)}
          />
        </label>
        <input type="submit" value="Update Meme" className="form-submit"/>
      </form>
    </div>
  )
}

export default UpdateMeme