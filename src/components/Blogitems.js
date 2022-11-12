
import React, { Component } from 'react'

export class Blogitems extends Component {
  render() {
    let{title , description, imageurl,newsurl}= this.props;
    return (
      <div>
        <div className="container">
        <div className="card my-4"  style={{width: "18rem"}}>
  <img src={!imageurl?"https://cdn.newsday.com/ace/c:MzM2NTAwZTMtYmE2Yi00:ODllNDQ4/landscape/1280":imageurl} className="card-img-top" alt="cover"/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newsurl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
    </div>
      </div>
    )
  }
}

export default Blogitems




