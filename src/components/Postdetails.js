import React, { Component } from 'react'

export class Postdetails extends Component {
  render() {
    let { title , author, publishedAt}= this.props
    return (
      <div>
        <div className="card mb-3" style={{marginTop:'100px'}}>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{author}</p>
    <p className="card-text"><small className="text-muted">{publishedAt}</small></p>
  </div>
</div>
      </div>
    )
}
}

export default Postdetails
