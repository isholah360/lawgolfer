import './ecom.css'

function Ecomcard({ecoDesc, ecoPrice, ecoImg}) {
  return (
    <div>
      <div className="the-ecom-crd">
        <img src={ecoImg} alt="assets" />
        <div className="desc-price">
          <div className="ecom-des">{ecoDesc}</div>
          <div className="ecom-price">{ecoPrice}</div>
        </div>
      </div>
    </div>
  )
}

export default Ecomcard
