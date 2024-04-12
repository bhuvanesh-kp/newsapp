import React, { Component } from 'react'

export class NewsUpdate extends Component {
  render() {
    let {title ,imageUrl, newsUrl, author, source, date} = this.props;
    return (
      <div className='my-3 bg-primary'>
        <div className="card" style={{width:"25rem"}}>
          <div className='card-header bg-warning'>
           <b>{source}</b>
          </div>
            <img src={imageUrl} className="card-img-top" alt="..." min-height="200px"/>
            <div className="card-body">
              <div style={{height:'100px'}}>
              <h5 className="card-title" style={{height:'100px'}}>{title}</h5>
              </div>
              <a href={newsUrl} className="btn btn-primary" target="_blank" rel="noreferrer">Read</a>  
            </div>
            <div className='card-footer text-sucess'>
              <b title="Source Title">
                By : {author?source:author}
              </b>
            {date}
            </div>
        </div>
      </div>
    )
  }
}

export default NewsUpdate