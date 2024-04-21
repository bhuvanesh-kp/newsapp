import React, { Component } from 'react'

export class NewsUpdate extends Component {
  render() {
    let {title ,imageUrl, newsUrl, author, source, date} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width:"25rem" ,height:"450px"}}>
          <div className='card-header '>
           <b>{date}</b>
          </div>
            <img src={imageUrl} className="card-img-top" alt="..." height="200px"/>
            <div className="card-body">
              <div style={{height:'100px'}}>
              <h5 className="card-title" style={{height:'100px'}}>{title}</h5>
              </div>
              <a href={newsUrl} className="btn btn-primary" target="_blank" rel="noreferrer">Read</a>  
            </div>
            <div className='card-footer text-sucess bg-primary' style={{color:"white"}}>
              <b title="Source Title">
                By : {author}
              </b>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsUpdate