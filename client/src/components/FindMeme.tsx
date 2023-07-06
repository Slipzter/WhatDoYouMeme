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
    <section className="find-meme">
      <h2>Find Meme</h2>
      <form onSubmit={handleSubmit} className="find-meme__form">
        <label>Find meme:
          <input
            type="text" 
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </label>
        <input type="submit" value="Display Meme" className="form-submit"/>
      </form>
    </section>
  )
}

export default MemeForm