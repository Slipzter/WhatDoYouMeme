

type Meme = {
  memeName: string;
  imageSrc: string;
}






function ViewMemes(props: Meme) {
  
  return (
    <div>ViewMemes
      <h2>{props.memeName}</h2>
      <img src={props.imageSrc} alt="funny meme" />
    </div>
  )
}

export default ViewMemes