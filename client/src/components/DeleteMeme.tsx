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
    <div className="delete-meme">
      <h2>Delete Meme</h2>
      <form onSubmit={handleSubmit} className="delete-meme__form">
        <div className="delete-meme__form__left">
          <label><h5>Name of meme to delete:</h5>
            <input
              type="text" 
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </label>
        </div>
        <div className="delete-meme__form__right">
          <input type="submit" value="Delete Meme" className="form-submit"/>
        </div>
      </form>
      <hr className="line-break"/>
    </div>
  )
}

export default DeleteMeme