import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faConciergeBell } from '@fortawesome/free-solid-svg-icons'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'

const DetailCards = () => {
    const element1 = <FontAwesomeIcon icon={faConciergeBell} />
    const element2 = <FontAwesomeIcon icon={faTruck} />
    const element3 = <FontAwesomeIcon icon={faMoneyBillWave} />
    return (
        <div className="container mt-5">
           
      <div className=" row ">
        <div className="col-md-4 mb-1 ">
          <div className="card myCard">
            <div className="card-body myCardBody">
                
              <h5 className="card-title myCardTitle"><span className="icon">{element1} </span> 24/7 hours service</h5>
              <p className="card-text">We are open for you 24 hours in a day and 7 days in a week.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-1">
          <div className="card myCard">
            <div className="card-body myCardBody">
          
              <h5 className="card-title myCardTitle">  <span className="icon">{element3} </span> Cash on delivery</h5>
              <p className="card-text">Cash on delivery method available for now.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-1">
          <div className="card myCard">
            <div className="card-body myCardBody">
            
              <h5 className="card-title myCardTitle"><span className="icon">{element2} </span> Delivery in 30 mints</h5>
              <p className="card-text">We try our best to deliver your order on time.</p>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default DetailCards;
