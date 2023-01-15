import "./styles.css";
import { saveAs } from "file-saver";







const AiItem=(props)=>{


    const{id,aiimage}=props
    console.log(props,'anime-item-props');

    function downloadImage() {
        let url = {aiimage}.aiimage;
        saveAs(url, "aiimg"); 
    }


    return(
        <div className="item" key={id}>
            <img src={aiimage} alt="ai creation" className="aiimage"/>
            <div className="imagedownloader">download this image?
            <button onClick={downloadImage}>Download!</button>
            </div>
      
            
        </div>
    )

}

export default AiItem;
