type Meme = {
  memeName: string;
  imageSrc: string;
}

function ViewMemes(props: Meme) {

  return (
    <div>
      <img src={props.imageSrc} alt="funny meme" />
      <h3><q> {props.memeName} </q></h3>
    </div>
  )
}

export default ViewMemes