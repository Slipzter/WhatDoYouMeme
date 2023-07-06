import { useState } from "react";


function DeleteMeme() {

  const [name, setName] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    deleteFromDb(name);
    setName('');
  }

  const deleteFromDb = async (name: string) => {
    fetch('http://localhost:8080/api/memes/' + name, {
      method: 'DELETE'
    }).then(response => console.log(response.status));
  };




  return (
    <div>Delete Meme
    <form onSubmit={handleSubmit}>
      <label>Enter name of meme to delete:
        <input
          type="text" 
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.currentTarget.value)}
        />
      </label>
      <input type="submit" value="Delete Meme"/>
    </form>
  </div>
  )
}

export default DeleteMeme