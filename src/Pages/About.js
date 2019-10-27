import React, {Component} from 'react'
import pic from '../images/pic.jpg'
import pic2 from '../images/pic2.PNG'

class About extends Component {
    render() {
        return(		  
		
<div className="page" style={{ height: '500px', overflowY: 'scroll'}}>       
 
  <div className="card" style={{width:'400px'}}>
    <img className="card-img-top" src={pic} alt="Card image" style={{width:'100%'}} />
    <div className="card-body">
      <h4 className="card-title">John Doe</h4>
      <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      <a href="#" className="btn btn-primary">See Profile</a>
    </div>
  </div>

  <br/>
  <div className="card" style={{width:'400px'}}>
    <img className="card-img-top" src={pic} alt="Card image" style={{width:'100%'}} />
    <div className="card-body">
      <h4 className="card-title">John Doe</h4>
      <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      <a href="#" className="btn btn-primary">See Profile</a>
    </div>
  </div>
 

</div>

        )
    }
}
export default About