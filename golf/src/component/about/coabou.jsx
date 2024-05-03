import "./coabout.css";

function Coabou() {
  return (
    <div>
      <div className="cobout">
        <div className="cobout-img">
          <img src="assets/bt-golf.jpg" alt="" />
        </div>
        <div className="cobout-cont">
          <span >Welcome</span> 
          <div style={{padding:".0rem 0 .7rem 0", color:"#ad5d24"}}>TO OUR GOLF CLUB</div>
          <div style={{lineHeight:"25px", width:"25rem", fontFamily: "san-serif"}}>
            Founded in 1964 by a team of professional golf players our club is
            based in one of the most picturesque areas of the country and is
            ideal for family membership.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coabou;
