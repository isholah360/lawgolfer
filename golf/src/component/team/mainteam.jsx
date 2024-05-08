import "./team.css";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function Mainteam({theIcon, theMax, theMin, theMember}) {
  return (
    <div>
      <div className="member-team">
        <div className="icon-random">
          <div className="the-icon">
            <img src={theIcon} alt="" />
          </div>
          <div className="the-random">
            <div className="rand-active">{getRandomInt(theMin, theMax)} <span>+</span></div>
            <div className="active-mem">{theMember}</div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Mainteam;
