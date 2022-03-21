import { useState } from "react";
import Episode from "./components/episode-component";
import episodeData from "./episodes.json";
//import IEpisode from "./components/IEpisode"



// test episodes pulling correctly-
// console.log(`Imported ${episodes.length} episode(s)`);
// console.log(`First episode's name is ${episodes[0].name}`);

function App(): JSX.Element {
  const episodeBlocks = episodeData.map(Episode);
  const [search,setSearch] = useState<string>("")

  return (
    <>
      <header>
        <input 
          placeholder = "Type to Search"
          value = {search}
          onChange = {(event)=> {setSearch(event.target.value)}}
        >
        </input>
      </header>
      <br></br>
      <main>{episodeBlocks}</main>
      <br></br>
      <br></br>
      <br></br>
      <footer>
        {" "}
        Use of the TVmaze API is licensed by CC BY-SA. This means the data can
        freely be used for any purpose, as long as TVmaze is properly credited
        as source and your application complies with the ShareAlike provision.
        You can satisfy the attribution requirement by linking back to TVmaze
        from within your application or website, for example using the URLs
        available in the API.
        <a href="https://www.tvmaze.com/api#licensing"> See more here </a>
      </footer>
    </>
  );
}

export default App;
