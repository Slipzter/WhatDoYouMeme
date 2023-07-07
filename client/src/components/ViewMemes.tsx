type Meme = {
  memeName: string;
  imageSrc: string;
}

function ViewMemes(props: Meme) {


  if (props.imageSrc === "") {
    return (
      <div></div>
    )
  }
  else {
    return (
      <div className="single-meme">
        <h3><q> {props.memeName} </q></h3>
        <img src={props.imageSrc} alt="funny meme" className="single-meme__image"/>
      </div>
    )
  }
}

export default ViewMemes