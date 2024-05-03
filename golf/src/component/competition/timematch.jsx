function Timematch({place, maindt, tyme, nameone, nametwo}) {
  return (
    <div>
      <div className="mt-date-time">
        <div className="mt-date">
          <div style={{ fontSize: "2rem" }}>{maindt}</div>
          <div>MAY</div>
        </div>
        <div className="mt-time">
          {place} <br /> {tyme}, {nameone} - <br /> {nametwo}
        </div>
      </div>
    </div>
  );
}

export default Timematch;
