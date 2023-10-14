
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import React,{useState} from "react";

function Colorpicker({ colors }){
    const [SColor,SetColor]=useState('yellow');
    const [listcolor,Setlistcolor]=useState(false);
    const handleButtonClick = () => {
        Setlistcolor(!listcolor);
      };
    
      const handleColorClick = (color) => {
        SetColor(color);
        Setlistcolor(false);
      };
    return(
        <div>
        <h1 class="mt-5">Color Picker</h1>
        <div class="container d-flex flex-column align-items-center justify-content-center col-6" style={{height:"400px",border:"1px solid black",borderRadius:"30px",backgroundColor:SColor}}>
      {listcolor && (
        <div class="row" >
            {colors.map((color, index) => (
              <div class="container m-1 btn"
                key={index}
                onClick={() => handleColorClick(color)}
                style={{ backgroundColor: color,width:"30px",marginLeft:"5px", height:"30px",border:"1px solid black"}}
              ></div>
            ))}
        </div>
      )}
      <div class="row">
       <button class="btn btn-primary container" style={{width:"fit-content"}} onClick={handleButtonClick}>Pick a color</button>
       </div>
        </div>
        </div>
    )
}

export default Colorpicker;