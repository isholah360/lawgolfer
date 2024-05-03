import { useState } from "react";
import "./competit.css";
import Timematch from "./timematch";

function Competit() {
  const [visibleDiv, setVisibleDiv] = useState(1); // Default to showing the first div

  // Function to handle button clicks and update the visible div
  const handleButtonClick = (divNumber) => {
    setVisibleDiv(divNumber); // Set the state to the selected div
  };
  return (
    <div>
      <div className="competit-comp">
        <div className="compet-time">
          <div className="nextmatch">Next Matches</div>
          <hr style={{ width: "4rem" }} />
          <div className="glorious">
            MOST GOLF MATCHES ARE PLAYED ON SUNDAYS FROM 10 AM TO APPROXIMATELY
            2 PM
          </div>
          <Timematch
            place="McGladrey Classic"
            maindt="05"
            nameone="Kevin Gonzales"
            nametwo="Susan Rogers"
            tyme="10:00"
            onClick={() => handleButtonClick(1)}
          />
          <Timematch
            place="Barracuda Championship"
            maindt="07"
            nameone="Susan Rogers"
            nametwo="Robert Ross"
            tyme="10:00"
            onClick={() => handleButtonClick(2)}
          />
          <Timematch
            place="WGT Virtual Tour"
            maindt="18"
            nameone="Susan Rogers"
            nametwo="Robert Ross"
            tyme="10:00"
          />
          <Timematch
            place="Hero World Challenge"
            maindt="27"
            nameone="Susan Rogers"
            nametwo="Robert Ross"
            tyme="10:00"
            onClick={handleDisplay}
          />
        </div>
        <div className="the-competitors">
          <div className="competit-title">
            WE ARE VERY EXCITED TO GO OVER THIS EXCEPTIONAL TOURNAMENT THAT
            LITERALLY LEFT THE PLAYERS AND THE CROWD BREATHLESS!
          </div>
          <div className="compet-vs">
            {visibleDiv === 1 && <div>This is Div 1 (Visible by default)</div>}
            {visibleDiv === 2 && <div>This is Div 2</div>}
            {visibleDiv === 3 && <div>This is Div 3</div>}
            {visibleDiv === 4 && <div>This is Div 4</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competit;
