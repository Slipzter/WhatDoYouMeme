

type Meme = {
  imageSrc: string;
}






function ViewMemes(props: Meme) {




  return (
    <div>ViewMemes
      <img src={props.imageSrc} alt="funny meme" />
    </div>
  )
}

export default ViewMemes