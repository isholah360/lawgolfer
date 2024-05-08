
import './plan.css'

function Plan(props) {
    const {naming, amount} = props;
  return (
    <div>
      <div className="plcard">
        <div className='standard'>{naming}</div>
        <div className='amount'>{amount}</div>
        <div>Free Guide Book</div>
        <div> Discount Events</div>
        <div> 4 Hours Session</div>
        <div>24/7 Full Support</div>
        <button>Get Started</button>
      </div>
    </div>
  )
}

export default Plan
