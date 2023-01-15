import { useState } from "react";
import AiItem from "../../components/ai-item";
import Search from "../../components/search";
import { Configuration, OpenAIApi} from "openai";
import "./styles.css";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});
const openai = new OpenAIApi(configuration);


const Homepage = () => {
  const [loadingstate, setloadingstate] = useState(false);

  const [animes, setanimes] = useState("");

  const getdatafromsearchcomponent = (searchdata) => {
    setloadingstate(true);

    async function getanimes() {
      const imageparameters={
        prompt:searchdata,
        n:1,
        size:"1024x1024"
      }
      const response = await openai.createImage(imageparameters)
      const image_url = response.data.data[0].url;
      setanimes(image_url)
      console.log(image_url);

      if (image_url && image_url.length > 0) {
        setloadingstate(false);
        setanimes(image_url);
      }
    }
    getanimes();
  };

  console.log(loadingstate, animes, "loadingstate recipes");


  return (
    <div className="homepage">
       <header>
            <a href="https://github.com/pydeep9026" class="logo"><i class="fa-solid fa-user-astronaut"> PRADEEP</i></a>
        </header>

        <div className="webname"><i class="fa-regular fa-file-image"></i>Text to AI Image Generator API</div>

      <Search getdatafromsearchcomponent={getdatafromsearchcomponent} />

      {loadingstate && (
        <div className="loadingmsg"> <i class="fa-solid fa-spinner"></i> loading.... please wait</div>
      )}
      <div className="aiimagediv">
      {
        animes && animes.length>0?(
        <AiItem  aiimage={animes}/>)
        :null
      }
      </div>
 

<div className="social">
       <div class="icon ig">
              <i class="fa-brands fa-instagram"></i>
              <span><a href="https://www.instagram.com/its_pradeep3602/">instagram</a></span>
        
          </div>

        
          <div class="icon lnk">
              <i class="fa-brands fa-linkedin-in"></i>
              <span><a href="https://www.linkedin.com/in/pradeep-singh-b57881207">linkedin</a></span>
              

          </div>
  

          <div class="icon git">
              <i class="fa-brands fa-github"></i>
              <span><a href="https://github.com/pydeep9026">GitHub</a></span>
          </div>
  
          <div class="icon yt">
              <i class="fa-brands fa-youtube"></i>
              <span><a href="https://www.youtube.com/channel/UCpELs_OjqZamSyctq0Q8DSw/">YouTube</a></span>
           </div>


           </div>

       

       


       <div class="copyright">
              <span>© Copyright 2022 </span>
              <span>This is a Website by <a href="https://www.linkedin.com/in/pradeep-singh-b57881207"> Pradeep Singh</a></span>
             </div>


             





    </div>

  );
};

export default Homepage;
