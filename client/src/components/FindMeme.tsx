import { useState } from "react";

type formProps = {
  memeName?: string;
  setName: Function;
}



function MemeForm(props: formProps) {

  const [name, setName] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    props.setName(name);
    setName('');
  }

  return (
    <div>Find Meme
      <form onSubmit={handleSubmit}>
        <label>Enter name of meme:
          <input
            type="text" 
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </label>
        <input type="submit" value="Display Meme"/>
      </form>
    </div>
  )
}

export default MemeForm