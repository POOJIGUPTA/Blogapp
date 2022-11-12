import React, { Component } from 'react'
// import { loremIpsum } from 'react-lorem-ipsum';

export class About extends Component {
  render() {
    return (
      <div className="container" style={{marginTop:'150px'}}>
        <div className="accordion my-5" id="accordionExample" >
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        DESCRIPTION
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>It is blog view website where you can view daily trendy Blogs.</strong> View this site to get updated with current blogs worldwide.
      </div>
    </div>
  </div>
  <div className="accordion-item my-5">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        About Developer
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body"> I am frontend Developer currently pursuing 3rd year of my 4 year Btech degree from MAHARAJA SURAJMAL INSTITUTE OF TECHNOLOGY. I'm a keen learner who loves to design and code. I focus on using my potential as a fresher by doing my absolute best. 
        
      </div>
    </div>
  </div>

  
  
</div>
      </div>
    )
  }
}

export default About
