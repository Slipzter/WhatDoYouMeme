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
    }).then(response => console.log(response.status));
  };

  return (
    <div className="generate-meme">
      <h2>Generate New Meme</h2>
      <form onSubmit={generateMeme} className="generate-meme__form">
        <div className="generate-meme__form__left">
          <label>
            Give it a name:
            <input
              type="text" 
              value={inputName}
              placeholder="Name"
              onChange={(e) => setMemeName(e.currentTarget.value)}
            />
          </label>
          <label>
            Choose image:
            <select onChange={(e) => setMemeType(e.currentTarget.value)} value={inputType} id="meme" className="form-control">
                      
                      <option value="10-Guy">10 Guy</option>
                    
                      <option value="1950s-Middle-Finger">1950s Middle Finger</option>
                    
                      <option value="1990s-First-World-Problems">1990s First World Problems</option>
                    
                      <option value="1st-World-Canadian-Problems">1st World Canadian Problems</option>
                    
                      <option value="2nd-Term-Obama">2nd Term Obama</option>
                    
                      <option value="Aaaaand-Its-Gone">Aaaaand Its Gone</option>
                    
                      <option value="Ace-Primo">Ace Primo</option>
                    
                      <option value="Actual-Advice-Mallard">Actual Advice Mallard</option>
                    
                      <option value="Adalia-Rose">Adalia Rose</option>
                    
                      <option value="Admiral-Ackbar-Relationship-Expert">Admiral Ackbar Relationship Expert</option>
                    
                      <option value="Advice-Dog">Advice Dog</option>
                    
                      <option value="Advice-Doge">Advice Doge</option>
                    
                      <option value="Advice-God">Advice God</option>
                    
                      <option value="Advice-Peeta">Advice Peeta</option>
                    
                      <option value="Advice-Tam">Advice Tam</option>
                    
                      <option value="Advice-Yoda">Advice Yoda</option>
                    
                      <option value="Afraid-To-Ask-Andy">Afraid To Ask Andy</option>
                    
                      <option value="Afraid-To-Ask-Andy-Closeup">Afraid To Ask Andy Closeup</option>
                    
                      <option value="Aint-Nobody-Got-Time-For-That">Aint Nobody Got Time For That</option>
                    
                      <option value="Alan-Greenspan">Alan Greenspan</option>
                    
                      <option value="Alarm-Clock">Alarm Clock</option>
                    
                      <option value="Albert-Cagestein">Albert Cagestein</option>
                    
                      <option value="Albert-Einstein-1">Albert Einstein 1</option>
                    
                      <option value="Alien-Meeting-Suggestion">Alien Meeting Suggestion</option>
                    
                      <option value="Alright-Gentlemen-We-Need-A-New-Idea">Alright Gentlemen We Need A New Idea</option>
                    
                      <option value="Always-Has-Been">Always Has Been</option>
                    
                      <option value="Alyssa-Silent-Hill">Alyssa Silent Hill</option>
                    
                      <option value="Am-I-The-Only-One-Around-Here">Am I The Only One Around Here</option>
                    
                      <option value="American-Chopper-Argument">American Chopper Argument</option>
                    
                      <option value="Ancient-Aliens">Ancient Aliens</option>
                    
                      <option value="And-everybody-loses-their-minds">And everybody loses their minds</option>
                    
                      <option value="And-then-I-said-Obama">And then I said Obama</option>
                    
                      <option value="Angry-Asian">Angry Asian</option>
                    
                      <option value="Angry-Baby">Angry Baby</option>
                    
                      <option value="Angry-Birds-Pig">Angry Birds Pig</option>
                    
                      <option value="Angry-Bride">Angry Bride</option>
                    
                      <option value="Angry-Chef-Gordon-Ramsay">Angry Chef Gordon Ramsay</option>
                    
                      <option value="Angry-Chicken-Boss">Angry Chicken Boss</option>
                    
                      <option value="Angry-Dumbledore">Angry Dumbledore</option>
                    
                      <option value="Angry-Koala">Angry Koala</option>
                    
                      <option value="Angry-Rant-Randy">Angry Rant Randy</option>
                    
                      <option value="Angry-Toddler">Angry Toddler</option>
                    
                      <option value="Annoying-Childhood-Friend">Annoying Childhood Friend</option>
                    
                      <option value="Annoying-Facebook-Girl">Annoying Facebook Girl</option>
                    
                      <option value="Anri-Stares">Anri Stares</option>
                    
                      <option value="Anti-Joke-Chicken">Anti Joke Chicken</option>
                    
                      <option value="Apathetic-Xbox-Laser">Apathetic Xbox Laser</option>
                    
                      <option value="Archer">Archer</option>
                    
                      <option value="Are-Your-Parents-Brother-And-Sister">Are Your Parents Brother And Sister</option>
                    
                      <option value="Are-you-a-Wizard">Are you a Wizard</option>
                    
                      <option value="Arrogant-Rich-Man">Arrogant Rich Man</option>
                    
                      <option value="Art-Attack">Art Attack</option>
                    
                      <option value="Art-Student-Owl">Art Student Owl</option>
                    
                      <option value="Arthur-Fist">Arthur Fist</option>
                    
                      <option value="Asshole-Ref">Asshole Ref</option>
                    
                      <option value="Aunt-Carol">Aunt Carol</option>
                    
                      <option value="Austin-Powers-Honestly">Austin Powers Honestly</option>
                    
                      <option value="Aw-Yeah-Rage-Face">Aw Yeah Rage Face</option>
                    
                      <option value="Awkward-Moment-Sealion">Awkward Moment Sealion</option>
                    
                      <option value="Awkward-Olympics">Awkward Olympics</option>
                    
                      <option value="BANE-AND-BRUCE">BANE AND BRUCE</option>
                    
                      <option value="BM-Employees">BM Employees</option>
                    
                      <option value="Babushkas-On-Facebook">Babushkas On Facebook</option>
                    
                      <option value="Baby-Cry">Baby Cry</option>
                    
                      <option value="Baby-Godfather">Baby Godfather</option>
                    
                      <option value="Baby-Insanity-Wolf">Baby Insanity Wolf</option>
                    
                      <option value="Back-In-My-Day">Back In My Day</option>
                    
                      <option value="Bad-Advice-Cat">Bad Advice Cat</option>
                    
                      <option value="Bad-Joke-Eel">Bad Joke Eel</option>
                    
                      <option value="Bad-Luck-Bear">Bad Luck Bear</option>
                    
                      <option value="Bad-Luck-Brian">Bad Luck Brian</option>
                    
                      <option value="Bad-Luck-Hannah">Bad Luck Hannah</option>
                    
                      <option value="Bad-Pun-Anna-Kendrick">Bad Pun Anna Kendrick</option>
                    
                      <option value="Bad-Pun-Dog">Bad Pun Dog</option>
                    
                      <option value="Bad-Wife-Worse-Mom">Bad Wife Worse Mom</option>
                    
                      <option value="Bah-Humbug">Bah Humbug</option>
                    
                      <option value="Bane">Bane</option>
                    
                      <option value="Bane-Permission">Bane Permission</option>
                    
                      <option value="Barack-And-Kumar-2013">Barack And Kumar 2013</option>
                    
                      <option value="Barba">Barba</option>
                    
                      <option value="Barbosa-And-Sparrow">Barbosa And Sparrow</option>
                    
                      <option value="Barney-Stinson-Win">Barney Stinson Win</option>
                    
                      <option value="Baromney">Baromney</option>
                    
                      <option value="Baron-Creater">Baron Creater</option>
                    
                      <option value="Bart-Simpson-Peeking">Bart Simpson Peeking</option>
                    
                      <option value="Batman-And-Superman">Batman And Superman</option>
                    
                      <option value="Batman-Slapping-Robin">Batman Slapping Robin</option>
                    
                      <option value="Batman-Smiles">Batman Smiles</option>
                    
                      <option value="Batmobile">Batmobile</option>
                    
                      <option value="Bazooka-Squirrel">Bazooka Squirrel</option>
                    
                      <option value="Be-Like-Bill">Be Like Bill</option>
                    
                      <option value="Bear-Grylls">Bear Grylls</option>
                    
                      <option value="Beard-Baby">Beard Baby</option>
                    
                      <option value="Bebo">Bebo</option>
                    
                      <option value="Because-Race-Car">Because Race Car</option>
                    
                      <option value="Ben-Barba-Pointing">Ben Barba Pointing</option>
                    
                      <option value="Bender">Bender</option>
                    
                      <option value="Benito">Benito</option>
                    
                      <option value="Bernie-I-Am-Once-Again-Asking-For-Your-Support">Bernie I Am Once Again Asking For Your Support</option>
                    
                      <option value="Beyonce-Knowles-Superbowl">Beyonce Knowles Superbowl</option>
                    
                      <option value="Beyonce-Knowles-Superbowl-Face">Beyonce Knowles Superbowl Face</option>
                    
                      <option value="Beyonce-Superbowl-Yell">Beyonce Superbowl Yell</option>
                    
                      <option value="Big-Bird">Big Bird</option>
                    
                      <option value="Big-Bird-And-Mitt-Romney">Big Bird And Mitt Romney</option>
                    
                      <option value="Big-Bird-And-Snuffy">Big Bird And Snuffy</option>
                    
                      <option value="Big-Ego-Man">Big Ego Man</option>
                    
                      <option value="Big-Family-Comeback">Big Family Comeback</option>
                    
                      <option value="Bike-Fall">Bike Fall</option>
                    
                      <option value="Bill-Murray-Golf">Bill Murray Golf</option>
                    
                      <option value="Bill-Nye-The-Science-Guy">Bill Nye The Science Guy</option>
                    
                      <option value="Bill-OReilly">Bill OReilly</option>
                    
                      <option value="Billy-Graham-Mitt-Romney">Billy Graham Mitt Romney</option>
                    
                      <option value="Bitch-Please">Bitch Please</option>
                    
                      <option value="Black-Girl-Wat">Black Girl Wat</option>
                    
                      <option value="Blank-Blue-Background">Blank Blue Background</option>
                    
                      <option value="Blank-Colored-Background">Blank Colored Background</option>
                    
                      <option value="Blank-Comic-Panel-1x2">Blank Comic Panel 1x2</option>
                    
                      <option value="Blank-Comic-Panel-2x1">Blank Comic Panel 2x1</option>
                    
                      <option value="Blank-Comic-Panel-2x2">Blank Comic Panel 2x2</option>
                    
                      <option value="Blank-Nut-Button">Blank Nut Button</option>
                    
                      <option value="Blank-Starter-Pack">Blank Starter Pack</option>
                    
                      <option value="Blank-Transparent-Square">Blank Transparent Square</option>
                    
                      <option value="Blank-Yellow-Sign">Blank Yellow Sign</option>
                    
                      <option value="Blob">Blob</option>
                    
                      <option value="Blue-Futurama-Fry">Blue Futurama Fry</option>
                    
                      <option value="Boardroom-Meeting-Suggestion">Boardroom Meeting Suggestion</option>
                    
                      <option value="Bonobo-Lyfe">Bonobo Lyfe</option>
                    
                      <option value="Booty-Warrior">Booty Warrior</option>
                    
                      <option value="Bothered-Bond">Bothered Bond</option>
                    
                      <option value="Brace-Yourselves-X-is-Coming">Brace Yourselves X is Coming</option>
                    
                      <option value="Brian-Burke-On-The-Phone">Brian Burke On The Phone</option>
                    
                      <option value="Brian-Griffin">Brian Griffin</option>
                    
                      <option value="Brian-Williams-Was-There">Brian Williams Was There</option>
                    
                      <option value="Brian-Williams-Was-There-2">Brian Williams Was There 2</option>
                    
                      <option value="Brian-Williams-Was-There-3">Brian Williams Was There 3</option>
                    
                      <option value="Brian-Wilson-Vs-ZZ-Top">Brian Wilson Vs ZZ Top</option>
                    
                      <option value="Britney-Spears">Britney Spears</option>
                    
                      <option value="Bubba-And-Barack">Bubba And Barack</option>
                    
                      <option value="Buddy-Christ">Buddy Christ</option>
                    
                      <option value="Buddy-The-Elf">Buddy The Elf</option>
                    
                      <option value="Buff-Doge-vs-Cheems">Buff Doge vs Cheems</option>
                    
                      <option value="Bullets">Bullets</option>
                    
                      <option value="Burn-Kitty">Burn Kitty</option>
                    
                      <option value="Business-Cat">Business Cat</option>
                    
                      <option value="But-Thats-None-Of-My-Business">But Thats None Of My Business</option>
                    
                      <option value="But-Thats-None-Of-My-Business-Neutral">But Thats None Of My Business Neutral</option>
                    
                      <option value="Butthurt-Dweller">Butthurt Dweller</option>
                    
                      <option value="CASHWAG-Crew">CASHWAG Crew</option>
                    
                      <option value="CURLEY">CURLEY</option>
                    
                      <option value="Captain-Hindsight">Captain Hindsight</option>
                    
                      <option value="Captain-Phillips-Im-The-Captain-Now">Captain Phillips Im The Captain Now</option>
                    
                      <option value="Captain-Picard-Facepalm">Captain Picard Facepalm</option>
                    
                      <option value="Car-Salesman-Slaps-Hood">Car Salesman Slaps Hood</option>
                    
                      <option value="Casper">Casper</option>
                    
                      <option value="Castaway-Fire">Castaway Fire</option>
                    
                      <option value="Ceiling-Cat">Ceiling Cat</option>
                    
                      <option value="Cel-Jesuno">Cel Jesuno</option>
                    
                      <option value="Cereal-Guy">Cereal Guy</option>
                    
                      <option value="Cereal-Guy-Spitting">Cereal Guy Spitting</option>
                    
                      <option value="Cereal-Guys-Daddy">Cereal Guys Daddy</option>
                    
                      <option value="Chad-Johnson">Chad Johnson</option>
                    
                      <option value="Chainsaw-Bear">Chainsaw Bear</option>
                    
                      <option value="Challenge-Accepted-Rage-Face">Challenge Accepted Rage Face</option>
                    
                      <option value="Change-My-Mind">Change My Mind</option>
                    
                      <option value="Charlie-Sheen-Derp">Charlie Sheen Derp</option>
                    
                      <option value="Chavez">Chavez</option>
                    
                      <option value="Chef-Gordon-Ramsay">Chef Gordon Ramsay</option>
                    
                      <option value="Chemistry-Cat">Chemistry Cat</option>
                    
                      <option value="Chester-The-Cat">Chester The Cat</option>
                    
                      <option value="Chicken-Bob">Chicken Bob</option>
                    
                      <option value="Chief-Keef">Chief Keef</option>
                    
                      <option value="Chihuahua-dog">Chihuahua dog</option>
                    
                      <option value="Chill-Out-Lemur">Chill Out Lemur</option>
                    
                      <option value="Chinese-Cat">Chinese Cat</option>
                    
                      <option value="Chocolate-Spongebob">Chocolate Spongebob</option>
                    
                      <option value="Chubby-Bubbles-Girl">Chubby Bubbles Girl</option>
                    
                      <option value="Chuck-Norris">Chuck Norris</option>
                    
                      <option value="Chuck-Norris-Approves">Chuck Norris Approves</option>
                    
                      <option value="Chuck-Norris-Finger">Chuck Norris Finger</option>
                    
                      <option value="Chuck-Norris-Flex">Chuck Norris Flex</option>
                    
                      <option value="Chuck-Norris-Guns">Chuck Norris Guns</option>
                    
                      <option value="Chuck-Norris-Laughing">Chuck Norris Laughing</option>
                    
                      <option value="Chuck-Norris-Phone">Chuck Norris Phone</option>
                    
                      <option value="Chuck-Norris-With-Guns">Chuck Norris With Guns</option>
                    
                      <option value="Chuckchuckchuck">Chuckchuckchuck</option>
                    
                      <option value="City-Bear">City Bear</option>
                    
                      <option value="Cleavage-Girl">Cleavage Girl</option>
                    
                      <option value="Clefable">Clefable</option>
                    
                      <option value="Close-Enough">Close Enough</option>
                    
                      <option value="Clown-Applying-Makeup">Clown Applying Makeup</option>
                    
                      <option value="College-Freshman">College Freshman</option>
                    
                      <option value="College-Liberal">College Liberal</option>
                    
                      <option value="Comic-Book-Guy">Comic Book Guy</option>
                    
                      <option value="Computer-Guy">Computer Guy</option>
                    
                      <option value="Computer-Guy-Facepalm">Computer Guy Facepalm</option>
                    
                      <option value="Computer-Horse">Computer Horse</option>
                    
                      <option value="Condescending-Goku">Condescending Goku</option>
                    
                      <option value="Condescending-Wonka">Condescending Wonka</option>
                    
                      <option value="Confession-Bear">Confession Bear</option>
                    
                      <option value="Confused-Cam">Confused Cam</option>
                    
                      <option value="Confused-Gandalf">Confused Gandalf</option>
                    
                      <option value="Confused-Granddad">Confused Granddad</option>
                    
                      <option value="Confused-Lebowski">Confused Lebowski</option>
                    
                      <option value="Confused-Mel-Gibson">Confused Mel Gibson</option>
                    
                      <option value="Conspiracy-Keanu">Conspiracy Keanu</option>
                    
                      <option value="Consuela">Consuela</option>
                    
                      <option value="Contradictory-Chris">Contradictory Chris</option>
                    
                      <option value="Cool-Cat-Stroll">Cool Cat Stroll</option>
                    
                      <option value="Cool-Obama">Cool Obama</option>
                    
                      <option value="Cool-Story-Bro">Cool Story Bro</option>
                    
                      <option value="Corona">Corona</option>
                    
                      <option value="Costanza">Costanza</option>
                    
                      <option value="Coulson">Coulson</option>
                    
                      <option value="Courage-Wolf">Courage Wolf</option>
                    
                      <option value="Crazy-Dawg">Crazy Dawg</option>
                    
                      <option value="Crazy-Girlfriend-Praying-Mantis">Crazy Girlfriend Praying Mantis</option>
                    
                      <option value="Crazy-Hispanic-Man">Crazy Hispanic Man</option>
                    
                      <option value="Creeper-Dog">Creeper Dog</option>
                    
                      <option value="Creepy-Condescending-Wonka">Creepy Condescending Wonka</option>
                    
                      <option value="Criana">Criana</option>
                    
                      <option value="Crosseyed-Goku">Crosseyed Goku</option>
                    
                      <option value="Crying-Because-Of-Cute">Crying Because Of Cute</option>
                    
                      <option value="Cute-Cat">Cute Cat</option>
                    
                      <option value="Cute-Dog">Cute Dog</option>
                    
                      <option value="Cute-Puppies">Cute Puppies</option>
                    
                      <option value="DJ-Pauly-D">DJ Pauly D</option>
                    
                      <option value="Dad-Joke-Dog">Dad Joke Dog</option>
                    
                      <option value="Dafuq-Did-I-Just-Read">Dafuq Did I Just Read</option>
                    
                      <option value="Dallas-Cowboys">Dallas Cowboys</option>
                    
                      <option value="Dancing-Trollmom">Dancing Trollmom</option>
                    
                      <option value="Darth-Maul">Darth Maul</option>
                    
                      <option value="Darti-Boy">Darti Boy</option>
                    
                      <option value="Dat-Ass">Dat Ass</option>
                    
                      <option value="Dat-Boi">Dat Boi</option>
                    
                      <option value="Dating-Site-Murderer">Dating Site Murderer</option>
                    
                      <option value="Dave-Chappelle">Dave Chappelle</option>
                    
                      <option value="Dead-Space">Dead Space</option>
                    
                      <option value="Deadpool-Pick-Up-Lines">Deadpool Pick Up Lines</option>
                    
                      <option value="Deadpool-Surprised">Deadpool Surprised</option>
                    
                      <option value="Depressed-Cat">Depressed Cat</option>
                    
                      <option value="Depression-Dog">Depression Dog</option>
                    
                      <option value="Derp">Derp</option>
                    
                      <option value="Derpina">Derpina</option>
                    
                      <option value="Determined-Guy-Rage-Face">Determined Guy Rage Face</option>
                    
                      <option value="Dexter">Dexter</option>
                    
                      <option value="Dick-Cheney">Dick Cheney</option>
                    
                      <option value="Disappointed-Tyson">Disappointed Tyson</option>
                    
                      <option value="Disaster-Girl">Disaster Girl</option>
                    
                      <option value="Distracted-Boyfriend">Distracted Boyfriend</option>
                    
                      <option value="Do-I-Care-Doe">Do I Care Doe</option>
                    
                      <option value="Doge">Doge</option>
                    
                      <option value="Doge-2">Doge 2</option>
                    
                      <option value="Dolph-Ziggler-Sells">Dolph Ziggler Sells</option>
                    
                      <option value="Donald-Trump-sewing-his-name-into-the-American-Flag">Donald Trump sewing his name into the American Flag</option>
                    
                      <option value="Dont-You-Squidward">Dont You Squidward</option>
                    
                      <option value="DoucheBag-DJ">DoucheBag DJ</option>
                    
                      <option value="Doug">Doug</option>
                    
                      <option value="Down-Syndrome">Down Syndrome</option>
                    
                      <option value="Downcast-Dark-Souls">Downcast Dark Souls</option>
                    
                      <option value="Downvoting-Roman">Downvoting Roman</option>
                    
                      <option value="Dr-Crane">Dr Crane</option>
                    
                      <option value="Dr-Evil">Dr Evil</option>
                    
                      <option value="Dr-Evil-Laser">Dr Evil Laser</option>
                    
                      <option value="Drake-Bad-Good">Drake Bad Good</option>
                    
                      <option value="Drake-Hotline-Bling">Drake Hotline Bling</option>
                    
                      <option value="Drunk-Baby">Drunk Baby</option>
                    
                      <option value="Duck-Face">Duck Face</option>
                    
                      <option value="Duck-Face-Chicks">Duck Face Chicks</option>
                    
                      <option value="Dumb-Blonde">Dumb Blonde</option>
                    
                      <option value="Dwight-Schrute">Dwight Schrute</option>
                    
                      <option value="Dwight-Schrute-2">Dwight Schrute 2</option>
                    
                      <option value="ERMAHGERD-TWERLERT">ERMAHGERD TWERLERT</option>
                    
                      <option value="Edu-Camargo">Edu Camargo</option>
                    
                      <option value="Edward-Elric-1">Edward Elric 1</option>
                    
                      <option value="Efrain-Juarez">Efrain Juarez</option>
                    
                      <option value="Eighties-Teen">Eighties Teen</option>
                    
                      <option value="Eminem">Eminem</option>
                    
                      <option value="Empty-Red-And-Black">Empty Red And Black</option>
                    
                      <option value="Endel-Tulviste">Endel Tulviste</option>
                    
                      <option value="Engineering-Professor">Engineering Professor</option>
                    
                      <option value="Epic-Handshake">Epic Handshake</option>
                    
                      <option value="Epicurist-Kid">Epicurist Kid</option>
                    
                      <option value="Ermahgerd-Berks">Ermahgerd Berks</option>
                    
                      <option value="Ermahgerd-Beyonce">Ermahgerd Beyonce</option>
                    
                      <option value="Ermahgerd-IPHERN-3GM">Ermahgerd IPHERN 3GM</option>
                    
                      <option value="Error-404">Error 404</option>
                    
                      <option value="Evil-Baby">Evil Baby</option>
                    
                      <option value="Evil-Cows">Evil Cows</option>
                    
                      <option value="Evil-Kermit">Evil Kermit</option>
                    
                      <option value="Evil-Otter">Evil Otter</option>
                    
                      <option value="Evil-Plotting-Raccoon">Evil Plotting Raccoon</option>
                    
                      <option value="Evil-Toddler">Evil Toddler</option>
                    
                      <option value="Excited-Cat">Excited Cat</option>
                    
                      <option value="Excited-Minions">Excited Minions</option>
                    
                      <option value="Expanding-Brain">Expanding Brain</option>
                    
                      <option value="Eye-Of-Sauron">Eye Of Sauron</option>
                    
                      <option value="FFFFFFFUUUUUUUUUUUU">FFFFFFFUUUUUUUUUUUU</option>
                    
                      <option value="FRANGO">FRANGO</option>
                    
                      <option value="Fabulous-Frank-And-His-Snake">Fabulous Frank And His Snake</option>
                    
                      <option value="Face-You-Make-Robert-Downey-Jr">Face You Make Robert Downey Jr</option>
                    
                      <option value="Facepalm-Bear">Facepalm Bear</option>
                    
                      <option value="Fake-Hurricane-Guy">Fake Hurricane Guy</option>
                    
                      <option value="Family-Guy-Brian">Family Guy Brian</option>
                    
                      <option value="Family-Guy-Peter">Family Guy Peter</option>
                    
                      <option value="Family-Tech-Support-Guy">Family Tech Support Guy</option>
                    
                      <option value="Fast-Furious-Johnny-Tran">Fast Furious Johnny Tran</option>
                    
                      <option value="Fat-Cat">Fat Cat</option>
                    
                      <option value="Fat-Val-Kilmer">Fat Val Kilmer</option>
                    
                      <option value="Father-Ted">Father Ted</option>
                    
                      <option value="Fear-And-Loathing-Cat">Fear And Loathing Cat</option>
                    
                      <option value="Feels-Bad-Frog---Feels-Bad-Man">Feels Bad Frog   Feels Bad Man</option>
                    
                      <option value="Felix-Baumgartner">Felix Baumgartner</option>
                    
                      <option value="Felix-Baumgartner-Lulz">Felix Baumgartner Lulz</option>
                    
                      <option value="Fernando-Litre">Fernando Litre</option>
                    
                      <option value="Fifa-E-Call-Of-Duty">Fifa E Call Of Duty</option>
                    
                      <option value="Fim-De-Semana">Fim De Semana</option>
                    
                      <option value="Finding-Neverland">Finding Neverland</option>
                    
                      <option value="Fini">Fini</option>
                    
                      <option value="Finn-The-Human">Finn The Human</option>
                    
                      <option value="First-Day-On-The-Internet-Kid">First Day On The Internet Kid</option>
                    
                      <option value="First-World-Frat-Guy">First World Frat Guy</option>
                    
                      <option value="First-World-Problems">First World Problems</option>
                    
                      <option value="First-World-Problems-Cat">First World Problems Cat</option>
                    
                      <option value="First-World-Stoner-Problems">First World Stoner Problems</option>
                    
                      <option value="Fk-Yeah">Fk Yeah</option>
                    
                      <option value="Flavor-Flav">Flavor Flav</option>
                    
                      <option value="Foal-Of-Mine">Foal Of Mine</option>
                    
                      <option value="Folean-Dynamite">Folean Dynamite</option>
                    
                      <option value="Forever-Alone">Forever Alone</option>
                    
                      <option value="Forever-Alone-Christmas">Forever Alone Christmas</option>
                    
                      <option value="Forever-Alone-Happy">Forever Alone Happy</option>
                    
                      <option value="Foul-Bachelor-Frog">Foul Bachelor Frog</option>
                    
                      <option value="Foul-Bachelorette-Frog">Foul Bachelorette Frog</option>
                    
                      <option value="Friend-Zone-Fiona">Friend Zone Fiona</option>
                    
                      <option value="Frowning-Nun">Frowning Nun</option>
                    
                      <option value="Frustrated-Boromir">Frustrated Boromir</option>
                    
                      <option value="Frustrating-Mom">Frustrating Mom</option>
                    
                      <option value="Futurama-Fry">Futurama Fry</option>
                    
                      <option value="Futurama-Leela">Futurama Leela</option>
                    
                      <option value="Futurama-Zoidberg">Futurama Zoidberg</option>
                    
                      <option value="Gaga-Baby">Gaga Baby</option>
                    
                      <option value="Gandhi">Gandhi</option>
                    
                      <option value="Gangnam-Style">Gangnam Style</option>
                    
                      <option value="Gangnam-Style-PSY">Gangnam Style PSY</option>
                    
                      <option value="Gangnam-Style2">Gangnam Style2</option>
                    
                      <option value="Gangster-Baby">Gangster Baby</option>
                    
                      <option value="Gasp-Rage-Face">Gasp Rage Face</option>
                    
                      <option value="George-Bush">George Bush</option>
                    
                      <option value="George-Washington">George Washington</option>
                    
                      <option value="Ghetto-Jesus">Ghetto Jesus</option>
                    
                      <option value="Ghost-Nappa">Ghost Nappa</option>
                    
                      <option value="Giovanni-Vernia">Giovanni Vernia</option>
                    
                      <option value="Give-me-Karma---Beating-the-dead-horse">Give me Karma   Beating the dead horse</option>
                    
                      <option value="Gladys-Falcon">Gladys Falcon</option>
                    
                      <option value="God">God</option>
                    
                      <option value="Gollum">Gollum</option>
                    
                      <option value="Good-Fellas-Hilarious">Good Fellas Hilarious</option>
                    
                      <option value="Good-Guy-Greg">Good Guy Greg</option>
                    
                      <option value="Good-Guy-Pizza-Rolls">Good Guy Pizza Rolls</option>
                    
                      <option value="Good-Guy-Putin">Good Guy Putin</option>
                    
                      <option value="Good-Guy-Socially-Awkward-Penguin">Good Guy Socially Awkward Penguin</option>
                    
                      <option value="Google-Chrome">Google Chrome</option>
                    
                      <option value="Gordo">Gordo</option>
                    
                      <option value="Got-Room-For-One-More">Got Room For One More</option>
                    
                      <option value="Gotta-Go-Cat">Gotta Go Cat</option>
                    
                      <option value="Grandma-Finds-The-Internet">Grandma Finds The Internet</option>
                    
                      <option value="Green-Day">Green Day</option>
                    
                      <option value="Grumpy-Cat">Grumpy Cat</option>
                    
                      <option value="Grumpy-Cat-Bed">Grumpy Cat Bed</option>
                    
                      <option value="Grumpy-Cat-Birthday">Grumpy Cat Birthday</option>
                    
                      <option value="Grumpy-Cat-Christmas">Grumpy Cat Christmas</option>
                    
                      <option value="Grumpy-Cat-Does-Not-Believe">Grumpy Cat Does Not Believe</option>
                    
                      <option value="Grumpy-Cat-Halloween">Grumpy Cat Halloween</option>
                    
                      <option value="Grumpy-Cat-Happy">Grumpy Cat Happy</option>
                    
                      <option value="Grumpy-Cat-Mistletoe">Grumpy Cat Mistletoe</option>
                    
                      <option value="Grumpy-Cat-Not-Amused">Grumpy Cat Not Amused</option>
                    
                      <option value="Grumpy-Cat-Reverse">Grumpy Cat Reverse</option>
                    
                      <option value="Grumpy-Cat-Sky">Grumpy Cat Sky</option>
                    
                      <option value="Grumpy-Cat-Star-Wars">Grumpy Cat Star Wars</option>
                    
                      <option value="Grumpy-Cat-Table">Grumpy Cat Table</option>
                    
                      <option value="Grumpy-Cat-Top-Hat">Grumpy Cat Top Hat</option>
                    
                      <option value="Grumpy-Cats-Father">Grumpy Cats Father</option>
                    
                      <option value="Grumpy-Toad">Grumpy Toad</option>
                    
                      <option value="Grus-Plan">Grus Plan</option>
                    
                      <option value="Guinness-World-Record">Guinness World Record</option>
                    
                      <option value="Guy-Fawkes">Guy Fawkes</option>
                    
                      <option value="Guy-Holding-Cardboard-Sign">Guy Holding Cardboard Sign</option>
                    
                      <option value="Hal-Jordan">Hal Jordan</option>
                    
                      <option value="Hamtaro">Hamtaro</option>
                    
                      <option value="Han-Solo">Han Solo</option>
                    
                      <option value="Happy-Guy-Rage-Face">Happy Guy Rage Face</option>
                    
                      <option value="Happy-Minaj">Happy Minaj</option>
                    
                      <option value="Happy-Minaj-2">Happy Minaj 2</option>
                    
                      <option value="Happy-Star-Congratulations">Happy Star Congratulations</option>
                    
                      <option value="Hard-To-Swallow-Pills">Hard To Swallow Pills</option>
                    
                      <option value="Hardworking-Guy">Hardworking Guy</option>
                    
                      <option value="Harley-Quinn">Harley Quinn</option>
                    
                      <option value="Harmless-Scout-Leader">Harmless Scout Leader</option>
                    
                      <option value="Harper-WEF">Harper WEF</option>
                    
                      <option value="Harry-Potter-Ok">Harry Potter Ok</option>
                    
                      <option value="Hawkward">Hawkward</option>
                    
                      <option value="He-Needs-The-Vaccine">He Needs The Vaccine</option>
                    
                      <option value="He-Will-Never-Get-A-Girlfriend">He Will Never Get A Girlfriend</option>
                    
                      <option value="Headbanzer">Headbanzer</option>
                    
                      <option value="Headless-Rider-DRRR">Headless Rider DRRR</option>
                    
                      <option value="Heavy-Breathing-Cat">Heavy Breathing Cat</option>
                    
                      <option value="Hedonism-Bot">Hedonism Bot</option>
                    
                      <option value="Hello-Kassem">Hello Kassem</option>
                    
                      <option value="Hello-Kitty">Hello Kitty</option>
                    
                      <option value="Helpful-Tyler-Durden">Helpful Tyler Durden</option>
                    
                      <option value="Henry-David-Thoreau">Henry David Thoreau</option>
                    
                      <option value="Hercules-Hades">Hercules Hades</option>
                    
                      <option value="Heres-Johnny">Heres Johnny</option>
                    
                      <option value="Herm-Edwards">Herm Edwards</option>
                    
                      <option value="Hey-Internet">Hey Internet</option>
                    
                      <option value="Hide-Yo-Kids-Hide-Yo-Wife">Hide Yo Kids Hide Yo Wife</option>
                    
                      <option value="Hide-the-Pain-Harold">Hide the Pain Harold</option>
                    
                      <option value="High-Dog">High Dog</option>
                    
                      <option value="High-Expectations-Asian-Father">High Expectations Asian Father</option>
                    
                      <option value="Hillary-Clinton">Hillary Clinton</option>
                    
                      <option value="Hillary-Clinton-Cellphone">Hillary Clinton Cellphone</option>
                    
                      <option value="Hipster-Ariel">Hipster Ariel</option>
                    
                      <option value="Hipster-Barista">Hipster Barista</option>
                    
                      <option value="Hipster-Kitty">Hipster Kitty</option>
                    
                      <option value="Hohoho">Hohoho</option>
                    
                      <option value="Homophobic-Seal">Homophobic Seal</option>
                    
                      <option value="Hoody-Cat">Hoody Cat</option>
                    
                      <option value="Hora-Extra">Hora Extra</option>
                    
                      <option value="Hornist-Hamster">Hornist Hamster</option>
                    
                      <option value="Horny-Harry">Horny Harry</option>
                    
                      <option value="Hot-Caleb">Hot Caleb</option>
                    
                      <option value="Hot-Scale">Hot Scale</option>
                    
                      <option value="Hotline-Miami-Richard">Hotline Miami Richard</option>
                    
                      <option value="House-Bunny">House Bunny</option>
                    
                      <option value="How-About-No-Bear">How About No Bear</option>
                    
                      <option value="How-Tough-Are-You">How Tough Are You</option>
                    
                      <option value="Hypnotoad">Hypnotoad</option>
                    
                      <option value="Hypocritical-Islam-Terrorist">Hypocritical Islam Terrorist</option>
                    
                      <option value="Hysterical-Tom">Hysterical Tom</option>
                    
                      <option value="I-Am-Not-A-Gator-Im-A-X">I Am Not A Gator Im A X</option>
                    
                      <option value="I-Bet-Hes-Thinking-About-Other-Women">I Bet Hes Thinking About Other Women</option>
                    
                      <option value="I-Forsee">I Forsee</option>
                    
                      <option value="I-Guarantee-It">I Guarantee It</option>
                    
                      <option value="I-Have-No-Idea-What-I-Am-Doing">I Have No Idea What I Am Doing</option>
                    
                      <option value="I-Have-No-Idea-What-I-Am-Doing-Dog">I Have No Idea What I Am Doing Dog</option>
                    
                      <option value="I-Know-Fuck-Me-Right">I Know Fuck Me Right</option>
                    
                      <option value="I-Know-That-Feel-Bro">I Know That Feel Bro</option>
                    
                      <option value="I-Lied-2">I Lied 2</option>
                    
                      <option value="I-See-Dead-People">I See Dead People</option>
                    
                      <option value="I-Should-Buy-A-Boat-Cat">I Should Buy A Boat Cat</option>
                    
                      <option value="I-Too-Like-To-Live-Dangerously">I Too Like To Live Dangerously</option>
                    
                      <option value="I-Was-Told-There-Would-Be">I Was Told There Would Be</option>
                    
                      <option value="I-Will-Find-You-And-Kill-You">I Will Find You And Kill You</option>
                    
                      <option value="Idiot-Nerd-Girl">Idiot Nerd Girl</option>
                    
                      <option value="Idiotaco">Idiotaco</option>
                    
                      <option value="If-You-Know-What-I-Mean-Bean">If You Know What I Mean Bean</option>
                    
                      <option value="Ill-Have-You-Know-Spongebob">Ill Have You Know Spongebob</option>
                    
                      <option value="Ill-Just-Wait-Here">Ill Just Wait Here</option>
                    
                      <option value="Im-Curious-Nappa">Im Curious Nappa</option>
                    
                      <option value="Im-Fabulous-Adam">Im Fabulous Adam</option>
                    
                      <option value="Im-The-Captain-Now">Im The Captain Now</option>
                    
                      <option value="Imagination-Spongebob">Imagination Spongebob</option>
                    
                      <option value="Impossibru-Guy-Original">Impossibru Guy Original</option>
                    
                      <option value="Inception">Inception</option>
                    
                      <option value="Inhaling-Seagull">Inhaling Seagull</option>
                    
                      <option value="Inigo-Montoya">Inigo Montoya</option>
                    
                      <option value="Innocent-Sasha">Innocent Sasha</option>
                    
                      <option value="Insanity-Puppy">Insanity Puppy</option>
                    
                      <option value="Insanity-Wolf">Insanity Wolf</option>
                    
                      <option value="Intelligent-Dog">Intelligent Dog</option>
                    
                      <option value="Internet-Explorer">Internet Explorer</option>
                    
                      <option value="Internet-Guide">Internet Guide</option>
                    
                      <option value="Interupting-Kanye">Interupting Kanye</option>
                    
                      <option value="Invalid-Argument-Vader">Invalid Argument Vader</option>
                    
                      <option value="Is-This-A-Pigeon">Is This A Pigeon</option>
                    
                      <option value="Islam-Rage---Angry-Muslim">Islam Rage   Angry Muslim</option>
                    
                      <option value="Its-Finally-Over">Its Finally Over</option>
                    
                      <option value="Its-Not-Going-To-Happen">Its Not Going To Happen</option>
                    
                      <option value="Its-True-All-of-It-Han-Solo">Its True All of It Han Solo</option>
                    
                      <option value="Jack-Nicholson-The-Shining-Snow">Jack Nicholson The Shining Snow</option>
                    
                      <option value="Jack-Sparrow-Being-Chased">Jack Sparrow Being Chased</option>
                    
                      <option value="Jackie-Chan-WTF">Jackie Chan WTF</option>
                    
                      <option value="Jammin-Baby">Jammin Baby</option>
                    
                      <option value="Jay-Knows-Facts">Jay Knows Facts</option>
                    
                      <option value="Jehovas-Witness-Squirrel">Jehovas Witness Squirrel</option>
                    
                      <option value="Jerkoff-Javert">Jerkoff Javert</option>
                    
                      <option value="Jersey-Santa">Jersey Santa</option>
                    
                      <option value="Jessica-Nigri-Cosplay">Jessica Nigri Cosplay</option>
                    
                      <option value="Jesus-Talking-To-Cool-Dude">Jesus Talking To Cool Dude</option>
                    
                      <option value="Jim-Lehrer-The-Man">Jim Lehrer The Man</option>
                    
                      <option value="Joe-Biden">Joe Biden</option>
                    
                      <option value="John-Riley-Condescension">John Riley Condescension</option>
                    
                      <option value="Joker">Joker</option>
                    
                      <option value="Joker-Rainbow-Hands">Joker Rainbow Hands</option>
                    
                      <option value="Jon-Stewart-Skeptical">Jon Stewart Skeptical</option>
                    
                      <option value="Joo-Espontneo">Joo Espontneo</option>
                    
                      <option value="Joseph-Ducreux">Joseph Ducreux</option>
                    
                      <option value="Justin-Bieber-Suit">Justin Bieber Suit</option>
                    
                      <option value="Karate-Kid">Karate Kid</option>
                    
                      <option value="Karate-Kyle">Karate Kyle</option>
                    
                      <option value="Keep-Calm-And-Carry-On-Aqua">Keep Calm And Carry On Aqua</option>
                    
                      <option value="Keep-Calm-And-Carry-On-Black">Keep Calm And Carry On Black</option>
                    
                      <option value="Keep-Calm-And-Carry-On-Purple">Keep Calm And Carry On Purple</option>
                    
                      <option value="Keep-Calm-And-Carry-On-Red">Keep Calm And Carry On Red</option>
                    
                      <option value="Kevin-Hart">Kevin Hart</option>
                    
                      <option value="Kevin-Hart-The-Hell">Kevin Hart The Hell</option>
                    
                      <option value="Kill-You-Cat">Kill You Cat</option>
                    
                      <option value="Kill-Yourself-Guy">Kill Yourself Guy</option>
                    
                      <option value="Kim-Jong-Il-Y-U-No">Kim Jong Il Y U No</option>
                    
                      <option value="Kim-Jong-Un-Sad">Kim Jong Un Sad</option>
                    
                      <option value="Koala">Koala</option>
                    
                      <option value="Kobe">Kobe</option>
                    
                      <option value="Kool-Kid-Klan">Kool Kid Klan</option>
                    
                      <option value="Krusty-Krab-Vs-Chum-Bucket">Krusty Krab Vs Chum Bucket</option>
                    
                      <option value="Krusty-Krab-Vs-Chum-Bucket-Blank">Krusty Krab Vs Chum Bucket Blank</option>
                    
                      <option value="Kyon-Face-Palm">Kyon Face Palm</option>
                    
                      <option value="LIGAF">LIGAF</option>
                    
                      <option value="LOL-Guy">LOL Guy</option>
                    
                      <option value="Lame-Pun-Coon">Lame Pun Coon</option>
                    
                      <option value="Larfleeze">Larfleeze</option>
                    
                      <option value="Larry-The-Cable-Guy">Larry The Cable Guy</option>
                    
                      <option value="Laughing-Goat">Laughing Goat</option>
                    
                      <option value="Laughing-Leo">Laughing Leo</option>
                    
                      <option value="Laughing-Men-In-Suits">Laughing Men In Suits</option>
                    
                      <option value="Laughing-Villains">Laughing Villains</option>
                    
                      <option value="Laundry-Viking">Laundry Viking</option>
                    
                      <option value="Lazy-College-Senior">Lazy College Senior</option>
                    
                      <option value="Left-Exit-12-Off-Ramp">Left Exit 12 Off Ramp</option>
                    
                      <option value="Legal-Bill-Murray">Legal Bill Murray</option>
                    
                      <option value="Leonardo-Dicaprio-Cheers">Leonardo Dicaprio Cheers</option>
                    
                      <option value="Leonardo-Dicaprio-Wolf-Of-Wall-Street">Leonardo Dicaprio Wolf Of Wall Street</option>
                    
                      <option value="Lethal-Weapon-Danny-Glover">Lethal Weapon Danny Glover</option>
                    
                      <option value="Lewandowski-E-Reus">Lewandowski E Reus</option>
                    
                      <option value="Liam-Neeson-Taken">Liam Neeson Taken</option>
                    
                      <option value="Liam-Neeson-Taken-2">Liam Neeson Taken 2</option>
                    
                      <option value="Life-Sucks">Life Sucks</option>
                    
                      <option value="Lil-Wayne">Lil Wayne</option>
                    
                      <option value="Lion-King">Lion King</option>
                    
                      <option value="Little-Romney">Little Romney</option>
                    
                      <option value="Look-At-All-These">Look At All These</option>
                    
                      <option value="Look-At-Me">Look At Me</option>
                    
                      <option value="Look-Son">Look Son</option>
                    
                      <option value="Luiz-Fabiano">Luiz Fabiano</option>
                    
                      <option value="Macklemore-Thrift-Store">Macklemore Thrift Store</option>
                    
                      <option value="Mad-Money-Jim-Cramer">Mad Money Jim Cramer</option>
                    
                      <option value="Mad-Moxxi">Mad Moxxi</option>
                    
                      <option value="Malicious-Advice-Mallard">Malicious Advice Mallard</option>
                    
                      <option value="Mamimoe">Mamimoe</option>
                    
                      <option value="Manning-Broncos">Manning Broncos</option>
                    
                      <option value="Mario-Hammer-Smash">Mario Hammer Smash</option>
                    
                      <option value="Marked-Safe-From">Marked Safe From</option>
                    
                      <option value="Maroney-And-Obama-Not-Impressed">Maroney And Obama Not Impressed</option>
                    
                      <option value="Marvel-Civil-War">Marvel Civil War</option>
                    
                      <option value="Marvel-Civil-War-1">Marvel Civil War 1</option>
                    
                      <option value="Marvel-Civil-War-2">Marvel Civil War 2</option>
                    
                      <option value="Matanza">Matanza</option>
                    
                      <option value="Matrix-Morpheus">Matrix Morpheus</option>
                    
                      <option value="Maury-Lie-Detector">Maury Lie Detector</option>
                    
                      <option value="Mayu-Watanabe">Mayu Watanabe</option>
                    
                      <option value="McKayla-Maroney-Not-Impressed">McKayla Maroney Not Impressed</option>
                    
                      <option value="McKayla-Maroney-Not-Impressed2">McKayla Maroney Not Impressed2</option>
                    
                      <option value="McMelch">McMelch</option>
                    
                      <option value="Mega-Rage-Face">Mega Rage Face</option>
                    
                      <option value="Member-Berries">Member Berries</option>
                    
                      <option value="Meme-Dad-Creature">Meme Dad Creature</option>
                    
                      <option value="Memeo">Memeo</option>
                    
                      <option value="Men-In-Black">Men In Black</option>
                    
                      <option value="Men-Laughing">Men Laughing</option>
                    
                      <option value="Merida-Brave">Merida Brave</option>
                    
                      <option value="Metal-Jesus">Metal Jesus</option>
                    
                      <option value="Mexican-Pizza">Mexican Pizza</option>
                    
                      <option value="Michael-Jackson-Popcorn">Michael Jackson Popcorn</option>
                    
                      <option value="Michael-Phelps-Death-Stare">Michael Phelps Death Stare</option>
                    
                      <option value="Minegishi-Minami">Minegishi Minami</option>
                    
                      <option value="Minegishi-Minami2">Minegishi Minami2</option>
                    
                      <option value="Minor-Mistake-Marvin">Minor Mistake Marvin</option>
                    
                      <option value="Misunderstood-Mitch">Misunderstood Mitch</option>
                    
                      <option value="Mitch-McConnell">Mitch McConnell</option>
                    
                      <option value="Mocking-Spongebob">Mocking Spongebob</option>
                    
                      <option value="Modern-Warfare-3">Modern Warfare 3</option>
                    
                      <option value="Molly-Weasley">Molly Weasley</option>
                    
                      <option value="Money-Man">Money Man</option>
                    
                      <option value="Money-Money">Money Money</option>
                    
                      <option value="Monkey-Business">Monkey Business</option>
                    
                      <option value="Monkey-OOH">Monkey OOH</option>
                    
                      <option value="Monkey-Puppet">Monkey Puppet</option>
                    
                      <option value="Morgan-Freeman-Good-Luck">Morgan Freeman Good Luck</option>
                    
                      <option value="Morpheus">Morpheus</option>
                    
                      <option value="Morty">Morty</option>
                    
                      <option value="Mother-Of-God">Mother Of God</option>
                    
                      <option value="Mozart-Not-Sure">Mozart Not Sure</option>
                    
                      <option value="Mr-Black-Knows-Everything">Mr Black Knows Everything</option>
                    
                      <option value="Mr-Krabs-Blur-Meme">Mr Krabs Blur Meme</option>
                    
                      <option value="Mr-Mackey">Mr Mackey</option>
                    
                      <option value="Mr-T">Mr T</option>
                    
                      <option value="Mr-T-Pity-The-Fool">Mr T Pity The Fool</option>
                    
                      <option value="Mugatu-So-Hot-Right-Now">Mugatu So Hot Right Now</option>
                    
                      <option value="Multi-Doge">Multi Doge</option>
                    
                      <option value="Murica">Murica</option>
                    
                      <option value="Muschamp">Muschamp</option>
                    
                      <option value="Musically-Oblivious-8th-Grader">Musically Oblivious 8th Grader</option>
                    
                      <option value="NPC">NPC</option>
                    
                      <option value="Nabilah-Jkt48">Nabilah Jkt48</option>
                    
                      <option value="Nailed-It">Nailed It</option>
                    
                      <option value="Nakagawa-Haruka">Nakagawa Haruka</option>
                    
                      <option value="Natsu">Natsu</option>
                    
                      <option value="Neil-deGrasse-Tyson">Neil deGrasse Tyson</option>
                    
                      <option value="Net-Noob">Net Noob</option>
                    
                      <option value="Nice-Guy-Loki">Nice Guy Loki</option>
                    
                      <option value="Nickleback">Nickleback</option>
                    
                      <option value="Nicolas-Cage---You-dont-say">Nicolas Cage   You dont say</option>
                    
                      <option value="Nilo">Nilo</option>
                    
                      <option value="Nissim-Ourfali">Nissim Ourfali</option>
                    
                      <option value="No-Bullshit-Business-Baby">No Bullshit Business Baby</option>
                    
                      <option value="No-I-Cant-Obama">No I Cant Obama</option>
                    
                      <option value="No-Nappa-Its-A-Trick">No Nappa Its A Trick</option>
                    
                      <option value="No-Patrick">No Patrick</option>
                    
                      <option value="Not-Bad-Obama">Not Bad Obama</option>
                    
                      <option value="Not-Okay-Rage-Face">Not Okay Rage Face</option>
                    
                      <option value="Not-a-Meme,-Just-Boobs">Not a Meme, Just Boobs</option>
                    
                      <option value="Nuclear-Explosion">Nuclear Explosion</option>
                    
                      <option value="OMG-Cat">OMG Cat</option>
                    
                      <option value="OMG-Karen">OMG Karen</option>
                    
                      <option value="Obama">Obama</option>
                    
                      <option value="Obama-Cowboy-Hat">Obama Cowboy Hat</option>
                    
                      <option value="Obama-No-Listen">Obama No Listen</option>
                    
                      <option value="Obama-Romney-Pointing">Obama Romney Pointing</option>
                    
                      <option value="Obi-Wan-Kenobi">Obi Wan Kenobi</option>
                    
                      <option value="Oblivious-Hot-Girl">Oblivious Hot Girl</option>
                    
                      <option value="Officer-Cartman">Officer Cartman</option>
                    
                      <option value="Oh-My-God-Orange">Oh My God Orange</option>
                    
                      <option value="Oh-No">Oh No</option>
                    
                      <option value="Okay-Guy-Rage-Face">Okay Guy Rage Face</option>
                    
                      <option value="Okay-Guy-Rage-Face2">Okay Guy Rage Face2</option>
                    
                      <option value="Okay-Truck">Okay Truck</option>
                    
                      <option value="Oku-Manami">Oku Manami</option>
                    
                      <option value="Onde">Onde</option>
                    
                      <option value="One-Does-Not-Simply">One Does Not Simply</option>
                    
                      <option value="Oprah-You-Get-A">Oprah You Get A</option>
                    
                      <option value="Oprah-You-Get-A-Car-Everybody-Gets-A-Car">Oprah You Get A Car Everybody Gets A Car</option>
                    
                      <option value="Optimistic-Niall">Optimistic Niall</option>
                    
                      <option value="Ordinary-Muslim-Man">Ordinary Muslim Man</option>
                    
                      <option value="Original-Bad-Luck-Brian">Original Bad Luck Brian</option>
                    
                      <option value="Original-I-Lied">Original I Lied</option>
                    
                      <option value="Original-Stoner-Dog">Original Stoner Dog</option>
                    
                      <option value="Osabama">Osabama</option>
                    
                      <option value="Our-Glorious-Leader-Nicolas-Cage">Our Glorious Leader Nicolas Cage</option>
                    
                      <option value="Over-Educated-Problems">Over Educated Problems</option>
                    
                      <option value="Overjoyed">Overjoyed</option>
                    
                      <option value="Overly-Attached-Father">Overly Attached Father</option>
                    
                      <option value="Overly-Attached-Girlfriend">Overly Attached Girlfriend</option>
                    
                      <option value="Overly-Attached-Nicolas-Cage">Overly Attached Nicolas Cage</option>
                    
                      <option value="Overly-Manly-Man">Overly Manly Man</option>
                    
                      <option value="Overly-Suave-IT-Guy">Overly Suave IT Guy</option>
                    
                      <option value="PPAP">PPAP</option>
                    
                      <option value="PTSD-Clarinet-Boy">PTSD Clarinet Boy</option>
                    
                      <option value="Packers">Packers</option>
                    
                      <option value="Panik-Kalm-Panik">Panik Kalm Panik</option>
                    
                      <option value="Papa-Fking-John">Papa Fking John</option>
                    
                      <option value="Paranoid-Parrot">Paranoid Parrot</option>
                    
                      <option value="Pat-Quinn">Pat Quinn</option>
                    
                      <option value="Pathetic-Spidey">Pathetic Spidey</option>
                    
                      <option value="Patrick-Bateman">Patrick Bateman</option>
                    
                      <option value="Patrick-Henry">Patrick Henry</option>
                    
                      <option value="Patrick-Says">Patrick Says</option>
                    
                      <option value="Patriotic-Eagle">Patriotic Eagle</option>
                    
                      <option value="Paul-Ryan">Paul Ryan</option>
                    
                      <option value="Paul-Wonder-Years">Paul Wonder Years</option>
                    
                      <option value="Pedobear">Pedobear</option>
                    
                      <option value="Pedophile-Orochimaru">Pedophile Orochimaru</option>
                    
                      <option value="Pelosi">Pelosi</option>
                    
                      <option value="Penguin-Gang">Penguin Gang</option>
                    
                      <option value="Pentagon-Hexagon-Octagon">Pentagon Hexagon Octagon</option>
                    
                      <option value="Pepperidge-Farm-Remembers">Pepperidge Farm Remembers</option>
                    
                      <option value="Perfection-Michael-Fassbender">Perfection Michael Fassbender</option>
                    
                      <option value="Permission-Bane">Permission Bane</option>
                    
                      <option value="Persian-Cat-Room-Guardian">Persian Cat Room Guardian</option>
                    
                      <option value="Persian-Cat-Room-Guardian-Single">Persian Cat Room Guardian Single</option>
                    
                      <option value="Perturbed-Portman">Perturbed Portman</option>
                    
                      <option value="Peter-Griffin-News">Peter Griffin News</option>
                    
                      <option value="Peter-Parker-Cry">Peter Parker Cry</option>
                    
                      <option value="Philosoraptor">Philosoraptor</option>
                    
                      <option value="Photogenic-College-Football-Player">Photogenic College Football Player</option>
                    
                      <option value="Photogenic-Scene-Guy">Photogenic Scene Guy</option>
                    
                      <option value="Picard-Wtf">Picard Wtf</option>
                    
                      <option value="Pickle-Rick">Pickle Rick</option>
                    
                      <option value="Pickup-Line-Panda">Pickup Line Panda</option>
                    
                      <option value="Pickup-Master">Pickup Master</option>
                    
                      <option value="Pickup-Professor">Pickup Professor</option>
                    
                      <option value="Pillow-Pet">Pillow Pet</option>
                    
                      <option value="Pink-Escalade">Pink Escalade</option>
                    
                      <option value="Pinky-and-the-Brain">Pinky and the Brain</option>
                    
                      <option value="Pissed-Off-Obama">Pissed Off Obama</option>
                    
                      <option value="Police-Officer-Testifying">Police Officer Testifying</option>
                    
                      <option value="Pony-Shrugs">Pony Shrugs</option>
                    
                      <option value="Pope-Nicolas-Cage">Pope Nicolas Cage</option>
                    
                      <option value="Portuguese">Portuguese</option>
                    
                      <option value="Pothead-Fry">Pothead Fry</option>
                    
                      <option value="Predator">Predator</option>
                    
                      <option value="Premature-Pete">Premature Pete</option>
                    
                      <option value="Presidential-Alert">Presidential Alert</option>
                    
                      <option value="Priority-Peter">Priority Peter</option>
                    
                      <option value="Professor-Oak">Professor Oak</option>
                    
                      <option value="Proper-Lady">Proper Lady</option>
                    
                      <option value="Psy-Horse-Dance">Psy Horse Dance</option>
                    
                      <option value="Put-It-Somewhere-Else-Patrick">Put It Somewhere Else Patrick</option>
                    
                      <option value="Putin">Putin</option>
                    
                      <option value="Question-Rage-Face">Question Rage Face</option>
                    
                      <option value="Questionable-Strategy-Kobe">Questionable Strategy Kobe</option>
                    
                      <option value="Quit-Hatin">Quit Hatin</option>
                    
                      <option value="RPG-Fan">RPG Fan</option>
                    
                      <option value="Rarity">Rarity</option>
                    
                      <option value="Rasta-Science-Teacher">Rasta Science Teacher</option>
                    
                      <option value="Really-Evil-College-Teacher">Really Evil College Teacher</option>
                    
                      <option value="Rebecca-Black">Rebecca Black</option>
                    
                      <option value="Redditors-Wife">Redditors Wife</option>
                    
                      <option value="Rediculously-Well-Mannered-Athlete">Rediculously Well Mannered Athlete</option>
                    
                      <option value="Redneck-Randal">Redneck Randal</option>
                    
                      <option value="Reimu-Hakurei">Reimu Hakurei</option>
                    
                      <option value="Relaxed-Office-Guy">Relaxed Office Guy</option>
                    
                      <option value="Religious-Couple">Religious Couple</option>
                    
                      <option value="Rena-Matsui">Rena Matsui</option>
                    
                      <option value="Rich-Guy-Dont-Care">Rich Guy Dont Care</option>
                    
                      <option value="Rich-Raven">Rich Raven</option>
                    
                      <option value="Richard-Benson">Richard Benson</option>
                    
                      <option value="Rick">Rick</option>
                    
                      <option value="Rick-Grimes">Rick Grimes</option>
                    
                      <option value="Rick-and-Carl">Rick and Carl</option>
                    
                      <option value="Rick-and-Carl-3">Rick and Carl 3</option>
                    
                      <option value="Rick-and-Carl-Long">Rick and Carl Long</option>
                    
                      <option value="Rick-and-Carl-Longer">Rick and Carl Longer</option>
                    
                      <option value="Ridiculously-Photogenic-Guy">Ridiculously Photogenic Guy</option>
                    
                      <option value="Ridiculously-Photogenic-Judge">Ridiculously Photogenic Judge</option>
                    
                      <option value="Right-In-The-Childhood">Right In The Childhood</option>
                    
                      <option value="Rmoney-Again">Rmoney Again</option>
                    
                      <option value="Rob-In-The-Hood">Rob In The Hood</option>
                    
                      <option value="Robots">Robots</option>
                    
                      <option value="Rocket-Raccoon">Rocket Raccoon</option>
                    
                      <option value="Rodgers-Doublecheck">Rodgers Doublecheck</option>
                    
                      <option value="Roll-Safe-Think-About-It">Roll Safe Think About It</option>
                    
                      <option value="Romney">Romney</option>
                    
                      <option value="Romney-And-Ryan">Romney And Ryan</option>
                    
                      <option value="Romney-Bong">Romney Bong</option>
                    
                      <option value="Romneys-Hindenberg">Romneys Hindenberg</option>
                    
                      <option value="Ron-Burgundy">Ron Burgundy</option>
                    
                      <option value="Ron-Swanson">Ron Swanson</option>
                    
                      <option value="Running-Away-Balloon">Running Away Balloon</option>
                    
                      <option value="Ryan-Gosling">Ryan Gosling</option>
                    
                      <option value="Sad-Axl">Sad Axl</option>
                    
                      <option value="Sad-Baby">Sad Baby</option>
                    
                      <option value="Sad-Cat">Sad Cat</option>
                    
                      <option value="Sad-Keanu">Sad Keanu</option>
                    
                      <option value="Sad-Pablo-Escobar">Sad Pablo Escobar</option>
                    
                      <option value="Sad-Spiderman">Sad Spiderman</option>
                    
                      <option value="Sad-X-All-The-Y">Sad X All The Y</option>
                    
                      <option value="Sadly-I-Am-Only-An-Eel">Sadly I Am Only An Eel</option>
                    
                      <option value="Samuel-Jackson-Glance">Samuel Jackson Glance</option>
                    
                      <option value="Samuel-L-Jackson">Samuel L Jackson</option>
                    
                      <option value="Sarcastic-Anthony">Sarcastic Anthony</option>
                    
                      <option value="Sassy-Iguana">Sassy Iguana</option>
                    
                      <option value="Satisfied-Seal">Satisfied Seal</option>
                    
                      <option value="Saw-Fulla">Saw Fulla</option>
                    
                      <option value="Say-That-Again-I-Dare-You">Say That Again I Dare You</option>
                    
                      <option value="Scared-Cat">Scared Cat</option>
                    
                      <option value="Scary-Harry">Scary Harry</option>
                    
                      <option value="Scene-Wolf">Scene Wolf</option>
                    
                      <option value="Scooby-Doo">Scooby Doo</option>
                    
                      <option value="Scott-Howson">Scott Howson</option>
                    
                      <option value="Scrooge-McDuck">Scrooge McDuck</option>
                    
                      <option value="Scrooge-McDuck-2">Scrooge McDuck 2</option>
                    
                      <option value="Scumbag-Boss">Scumbag Boss</option>
                    
                      <option value="Scumbag-Brain">Scumbag Brain</option>
                    
                      <option value="Scumbag-Daylight-Savings-Time">Scumbag Daylight Savings Time</option>
                    
                      <option value="Scumbag-Girl">Scumbag Girl</option>
                    
                      <option value="Scumbag-Job-Market">Scumbag Job Market</option>
                    
                      <option value="Scumbag-MSNBC">Scumbag MSNBC</option>
                    
                      <option value="Scumbag-Minecraft">Scumbag Minecraft</option>
                    
                      <option value="Scumbag-Miraak">Scumbag Miraak</option>
                    
                      <option value="Scumbag-Muslim">Scumbag Muslim</option>
                    
                      <option value="Scumbag-Parents">Scumbag Parents</option>
                    
                      <option value="Scumbag-Redditor">Scumbag Redditor</option>
                    
                      <option value="Scumbag-Steve">Scumbag Steve</option>
                    
                      <option value="Secure-Parking">Secure Parking</option>
                    
                      <option value="See-Nobody-Cares">See Nobody Cares</option>
                    
                      <option value="Self-Loathing-Otter">Self Loathing Otter</option>
                    
                      <option value="Selfish-Ozzy">Selfish Ozzy</option>
                    
                      <option value="Sergeant-Hartmann">Sergeant Hartmann</option>
                    
                      <option value="Serious-Xzibit">Serious Xzibit</option>
                    
                      <option value="Seriously-Face">Seriously Face</option>
                    
                      <option value="Sexual-Deviant-Walrus">Sexual Deviant Walrus</option>
                    
                      <option value="Sexually-Oblivious-Girlfriend">Sexually Oblivious Girlfriend</option>
                    
                      <option value="Sexually-Oblivious-Rhino">Sexually Oblivious Rhino</option>
                    
                      <option value="Sexy-Railroad-Spiderman">Sexy Railroad Spiderman</option>
                    
                      <option value="Shaq-Only-Smokes-The-Dankest">Shaq Only Smokes The Dankest</option>
                    
                      <option value="Sheltering-Suburban-Mom">Sheltering Suburban Mom</option>
                    
                      <option value="Shocked-Ape">Shocked Ape</option>
                    
                      <option value="Short-Satisfaction-VS-Truth">Short Satisfaction VS Truth</option>
                    
                      <option value="Shouter">Shouter</option>
                    
                      <option value="Shrek-Cat">Shrek Cat</option>
                    
                      <option value="Shut-Up-And-Take-My-Money-Fry">Shut Up And Take My Money Fry</option>
                    
                      <option value="Shutup-Batty-Boy">Shutup Batty Boy</option>
                    
                      <option value="Sidious-Error">Sidious Error</option>
                    
                      <option value="Sigmund-Freud">Sigmund Freud</option>
                    
                      <option value="Simba-Shadowy-Place">Simba Shadowy Place</option>
                    
                      <option value="Simpsons-Grandpa">Simpsons Grandpa</option>
                    
                      <option value="Simsimi">Simsimi</option>
                    
                      <option value="Since-When-Were-You-Under-The-Impression">Since When Were You Under The Impression</option>
                    
                      <option value="Sinestro">Sinestro</option>
                    
                      <option value="Skeptical-Baby">Skeptical Baby</option>
                    
                      <option value="Skeptical-Swardson">Skeptical Swardson</option>
                    
                      <option value="Skinhead-John-Travolta">Skinhead John Travolta</option>
                    
                      <option value="Skype">Skype</option>
                    
                      <option value="Sleeping-Shaq">Sleeping Shaq</option>
                    
                      <option value="Slenderman">Slenderman</option>
                    
                      <option value="Slick-Fry">Slick Fry</option>
                    
                      <option value="Slowpoke">Slowpoke</option>
                    
                      <option value="Small-Dog">Small Dog</option>
                    
                      <option value="Small-Face-Romney">Small Face Romney</option>
                    
                      <option value="Smilin-Biden">Smilin Biden</option>
                    
                      <option value="Smiling-Cat">Smiling Cat</option>
                    
                      <option value="Smiling-Jesus">Smiling Jesus</option>
                    
                      <option value="Smirk-Rage-Face">Smirk Rage Face</option>
                    
                      <option value="Smug-Bear">Smug Bear</option>
                    
                      <option value="Snape">Snape</option>
                    
                      <option value="Snoop">Snoop</option>
                    
                      <option value="So-God-Made-A-Farmer">So God Made A Farmer</option>
                    
                      <option value="So-I-Got-That-Goin-For-Me-Which-Is-Nice">So I Got That Goin For Me Which Is Nice</option>
                    
                      <option value="So-I-Got-That-Goin-For-Me-Which-Is-Nice-2">So I Got That Goin For Me Which Is Nice 2</option>
                    
                      <option value="So-I-Guess-You-Can-Say-Things-Are-Getting-Pretty-Serious">So I Guess You Can Say Things Are Getting Pretty Serious</option>
                    
                      <option value="So-Many-Shirts">So Many Shirts</option>
                    
                      <option value="So-Much-Drama">So Much Drama</option>
                    
                      <option value="Socially-Awesome-Awkward-Penguin">Socially Awesome Awkward Penguin</option>
                    
                      <option value="Socially-Awesome-Penguin">Socially Awesome Penguin</option>
                    
                      <option value="Socially-Awkward-Awesome-Penguin">Socially Awkward Awesome Penguin</option>
                    
                      <option value="Socially-Awkward-Couple">Socially Awkward Couple</option>
                    
                      <option value="Socially-Awkward-Penguin">Socially Awkward Penguin</option>
                    
                      <option value="Solemn-Lumberjack">Solemn Lumberjack</option>
                    
                      <option value="SonTung">SonTung</option>
                    
                      <option value="Sotally-Tober">Sotally Tober</option>
                    
                      <option value="South-Park-Craig">South Park Craig</option>
                    
                      <option value="Spacey-Casey">Spacey Casey</option>
                    
                      <option value="Spangles">Spangles</option>
                    
                      <option value="Sparta-Leonidas">Sparta Leonidas</option>
                    
                      <option value="Speechless-Colbert-Face">Speechless Colbert Face</option>
                    
                      <option value="Spiderman-Camera">Spiderman Camera</option>
                    
                      <option value="Spiderman-Computer-Desk">Spiderman Computer Desk</option>
                    
                      <option value="Spiderman-Hospital">Spiderman Hospital</option>
                    
                      <option value="Spiderman-Laugh">Spiderman Laugh</option>
                    
                      <option value="Spiderman-Peter-Parker">Spiderman Peter Parker</option>
                    
                      <option value="Sponegebob-Coffee">Sponegebob Coffee</option>
                    
                      <option value="Spongebob-Ight-Imma-Head-Out">Spongebob Ight Imma Head Out</option>
                    
                      <option value="Spongegar">Spongegar</option>
                    
                      <option value="Squidward">Squidward</option>
                    
                      <option value="Star-Wars-No">Star Wars No</option>
                    
                      <option value="Star-Wars-Yoda">Star Wars Yoda</option>
                    
                      <option value="Stephen-Harper-Podium">Stephen Harper Podium</option>
                    
                      <option value="Steve-Harvey">Steve Harvey</option>
                    
                      <option value="Steve-Jobs">Steve Jobs</option>
                    
                      <option value="Stoner-Dog">Stoner Dog</option>
                    
                      <option value="Stoner-PhD">Stoner PhD</option>
                    
                      <option value="Stop-Cop">Stop Cop</option>
                    
                      <option value="Storytelling-Grandpa">Storytelling Grandpa</option>
                    
                      <option value="Subtle-Pickup-Liner">Subtle Pickup Liner</option>
                    
                      <option value="Success-Kid">Success Kid</option>
                    
                      <option value="Success-Kid-Girl">Success Kid Girl</option>
                    
                      <option value="Success-Kid-Original">Success Kid Original</option>
                    
                      <option value="Successful-Black-Man">Successful Black Man</option>
                    
                      <option value="Sudden-Clarity-Clarence">Sudden Clarity Clarence</option>
                    
                      <option value="Sudden-Disgust-Danny">Sudden Disgust Danny</option>
                    
                      <option value="Super-Birthday-Squirrel">Super Birthday Squirrel</option>
                    
                      <option value="Super-Cool-Ski-Instructor">Super Cool Ski Instructor</option>
                    
                      <option value="Super-Kami-Guru-Allows-This">Super Kami Guru Allows This</option>
                    
                      <option value="Superior-Wadsworth">Superior Wadsworth</option>
                    
                      <option value="Surpised-Frodo">Surpised Frodo</option>
                    
                      <option value="Surprised-CatMan">Surprised CatMan</option>
                    
                      <option value="Surprised-Coala">Surprised Coala</option>
                    
                      <option value="Surprised-Koala">Surprised Koala</option>
                    
                      <option value="Surprised-Pikachu">Surprised Pikachu</option>
                    
                      <option value="Surprized-Vegeta">Surprized Vegeta</option>
                    
                      <option value="Suspicious-Cat">Suspicious Cat</option>
                    
                      <option value="Sweaty-Concentrated-Rage-Face">Sweaty Concentrated Rage Face</option>
                    
                      <option value="TED">TED</option>
                    
                      <option value="TSA-Douche">TSA Douche</option>
                    
                      <option value="Table-Flip-Guy">Table Flip Guy</option>
                    
                      <option value="Take-A-Seat-Cat">Take A Seat Cat</option>
                    
                      <option value="Talk-To-Spongebob">Talk To Spongebob</option>
                    
                      <option value="Tamou">Tamou</option>
                    
                      <option value="Team-Rocket">Team Rocket</option>
                    
                      <option value="Tears-Of-Joy">Tears Of Joy</option>
                    
                      <option value="Tech-Impaired-Duck">Tech Impaired Duck</option>
                    
                      <option value="Tennis-Defeat">Tennis Defeat</option>
                    
                      <option value="Terry-Davis">Terry Davis</option>
                    
                      <option value="That-Would-Be-Great">That Would Be Great</option>
                    
                      <option value="Thats-Just-Something-X-Say">Thats Just Something X Say</option>
                    
                      <option value="Thats-a-paddlin">Thats a paddlin</option>
                    
                      <option value="The-Bobs">The Bobs</option>
                    
                      <option value="The-Critic">The Critic</option>
                    
                      <option value="The-Most-Interesting-Cat-In-The-World">The Most Interesting Cat In The World</option>
                    
                      <option value="The-Most-Interesting-Justin-Bieber">The Most Interesting Justin Bieber</option>
                    
                      <option value="The-Most-Interesting-Man-In-The-World">The Most Interesting Man In The World</option>
                    
                      <option value="The-Probelm-Is">The Probelm Is</option>
                    
                      <option value="The-Problem-Is">The Problem Is</option>
                    
                      <option value="The-Rock-Driving">The Rock Driving</option>
                    
                      <option value="The-Rock-It-Doesnt-Matter">The Rock It Doesnt Matter</option>
                    
                      <option value="The-Scroll-Of-Truth">The Scroll Of Truth</option>
                    
                      <option value="These-Arent-The-Droids-You-Were-Looking-For">These Arent The Droids You Were Looking For</option>
                    
                      <option value="Theyre-The-Same-Picture">Theyre The Same Picture</option>
                    
                      <option value="Think">Think</option>
                    
                      <option value="Third-World-Skeptical-Kid">Third World Skeptical Kid</option>
                    
                      <option value="Third-World-Success-Kid">Third World Success Kid</option>
                    
                      <option value="This-Is-Fine">This Is Fine</option>
                    
                      <option value="This-Is-Where-Id-Put-My-Trophy-If-I-Had-One">This Is Where Id Put My Trophy If I Had One</option>
                    
                      <option value="Thumbs-Up-Emoji">Thumbs Up Emoji</option>
                    
                      <option value="Time-To-Fap">Time To Fap</option>
                    
                      <option value="Today-Was-A-Good-Day">Today Was A Good Day</option>
                    
                      <option value="Tom-Hardy-">Tom Hardy </option>
                    
                      <option value="Tomas-Rosicky">Tomas Rosicky</option>
                    
                      <option value="Too-Damn-High">Too Damn High</option>
                    
                      <option value="Too-Drunk-At-Party-Tina">Too Drunk At Party Tina</option>
                    
                      <option value="Too-Kool-Kyle">Too Kool Kyle</option>
                    
                      <option value="Torreshit">Torreshit</option>
                    
                      <option value="Tough-Guy-Wanna-Be">Tough Guy Wanna Be</option>
                    
                      <option value="Trailer-Park-Boys-Bubbles">Trailer Park Boys Bubbles</option>
                    
                      <option value="Travelonshark">Travelonshark</option>
                    
                      <option value="Troll-Face">Troll Face</option>
                    
                      <option value="Troll-Face-Colored">Troll Face Colored</option>
                    
                      <option value="True-Story">True Story</option>
                    
                      <option value="Trump-Bill-Signing">Trump Bill Signing</option>
                    
                      <option value="Turkey">Turkey</option>
                    
                      <option value="Tuxedo-Winnie-The-Pooh">Tuxedo Winnie The Pooh</option>
                    
                      <option value="Two-Buttons">Two Buttons</option>
                    
                      <option value="UNO-Draw-25-Cards">UNO Draw 25 Cards</option>
                    
                      <option value="USA-Lifter">USA Lifter</option>
                    
                      <option value="Ugly-Twins">Ugly Twins</option>
                    
                      <option value="Uncle-Sam">Uncle Sam</option>
                    
                      <option value="Unhappy-Baby">Unhappy Baby</option>
                    
                      <option value="Unhelpful-High-School-Teacher">Unhelpful High School Teacher</option>
                    
                      <option value="Unicorn-MAN">Unicorn MAN</option>
                    
                      <option value="Unpopular-Opinion-Puffin">Unpopular Opinion Puffin</option>
                    
                      <option value="Unsettled-Tom">Unsettled Tom</option>
                    
                      <option value="Unwanted-House-Guest">Unwanted House Guest</option>
                    
                      <option value="V-For-Vendetta">V For Vendetta</option>
                    
                      <option value="Vali-Corleone">Vali Corleone</option>
                    
                      <option value="Vengeance-Dad">Vengeance Dad</option>
                    
                      <option value="Viking-Dudes">Viking Dudes</option>
                    
                      <option value="Vladimir-Putin">Vladimir Putin</option>
                    
                      <option value="WTF">WTF</option>
                    
                      <option value="Waiting-Skeleton">Waiting Skeleton</option>
                    
                      <option value="Warning-Sign">Warning Sign</option>
                    
                      <option value="We-Will-Rebuild">We Will Rebuild</option>
                    
                      <option value="Weird-Stuff-I-Do-Potoo">Weird Stuff I Do Potoo</option>
                    
                      <option value="Welcome-To-The-Internets">Welcome To The Internets</option>
                    
                      <option value="Well-That-Escalated-Quickly">Well That Escalated Quickly</option>
                    
                      <option value="What-Do-We-Want">What Do We Want</option>
                    
                      <option value="What-Do-We-Want-3">What Do We Want 3</option>
                    
                      <option value="What-Year-Is-It">What Year Is It</option>
                    
                      <option value="Whisper-Sloth">Whisper Sloth</option>
                    
                      <option value="Who-Killed-Hannibal">Who Killed Hannibal</option>
                    
                      <option value="Why-Cant-I">Why Cant I</option>
                    
                      <option value="Why-Cant-I-Hold-All-These-Limes">Why Cant I Hold All These Limes</option>
                    
                      <option value="Why-Is-The-Rum-Gone">Why Is The Rum Gone</option>
                    
                      <option value="Why-Not-Both">Why Not Both</option>
                    
                      <option value="Will-Ferrell">Will Ferrell</option>
                    
                      <option value="Wink">Wink</option>
                    
                      <option value="Woah-Kitty">Woah Kitty</option>
                    
                      <option value="Woman-Yelling-At-Cat">Woman Yelling At Cat</option>
                    
                      <option value="Wrong-Neighboorhood-Cats">Wrong Neighboorhood Cats</option>
                    
                      <option value="Wrong-Number-Rita">Wrong Number Rita</option>
                    
                      <option value="X,-X-Everywhere">X, X Everywhere</option>
                    
                      <option value="X-All-The-Y">X All The Y</option>
                    
                      <option value="X-Everywhere">X Everywhere</option>
                    
                      <option value="X-X-Everywhere">X X Everywhere</option>
                    
                      <option value="Y-U-No">Y U No</option>
                    
                      <option value="Yakuza">Yakuza</option>
                    
                      <option value="Yall-Got-Any-More-Of">Yall Got Any More Of</option>
                    
                      <option value="Yall-Got-Any-More-Of-That">Yall Got Any More Of That</option>
                    
                      <option value="Yao-Ming">Yao Ming</option>
                    
                      <option value="Yo-Dawg-Heard-You">Yo Dawg Heard You</option>
                    
                      <option value="Yo-Mamas-So-Fat">Yo Mamas So Fat</option>
                    
                      <option value="You-Dont-Say">You Dont Say</option>
                    
                      <option value="You-Dont-Want-No-Part-Of-This">You Dont Want No Part Of This</option>
                    
                      <option value="You-Get-An-X-And-You-Get-An-X">You Get An X And You Get An X</option>
                    
                      <option value="You-Should-Feel-Bad-Zoidberg">You Should Feel Bad Zoidberg</option>
                    
                      <option value="You-The-Real-MVP">You The Real MVP</option>
                    
                      <option value="You-The-Real-MVP-2">You The Real MVP 2</option>
                    
                      <option value="You-Underestimate-My-Power">You Underestimate My Power</option>
                    
                      <option value="You-Were-The-Chosen-One-Star-Wars">You Were The Chosen One Star Wars</option>
                    
                      <option value="Young-And-Reckless">Young And Reckless</option>
                    
                      <option value="Young-Cardi-B">Young Cardi B</option>
                    
                      <option value="Youre-Too-Slow-Sonic">Youre Too Slow Sonic</option>
                    
                      <option value="Yuko-With-Gun">Yuko With Gun</option>
                    
                      <option value="ZNMD">ZNMD</option>
                    
                      <option value="Zoidberg-Jesus">Zoidberg Jesus</option>
                    
                      <option value="Zombie-Bad-Luck-Brian">Zombie Bad Luck Brian</option>
                    
                      <option value="Zombie-Overly-Attached-Girlfriend">Zombie Overly Attached Girlfriend</option>
                    
                      <option value="Zorg">Zorg</option>
                    
                      <option value="Zuckerberg">Zuckerberg</option>
                    
                      <option value="Zura-Janai-Katsura-Da">Zura Janai Katsura Da</option>
                    
                      <option value="confession-kid">confession kid</option>
                    
            </select>
          </label>
          <label>
            Top text:
            <input
              type="text" 
              value={inputTopText}
              placeholder="Top Text"
              onChange={(e) => setTopText(e.currentTarget.value)}
            />
          </label>
          <label>
            Bottom text:
            <input
              type="text" 
              value={inputBottomText}
              placeholder="Bottom Text"
              onChange={(e) => setBottomText(e.currentTarget.value)}
            />
          </label>
        </div>
        <div className="generate-meme__form__right">
          <input type="submit" value="Generate Meme" className="form-submit"/>
        </div>
      </form>
      <hr className="line-break"/>
    </div>
  )
}

export default GenerateMeme