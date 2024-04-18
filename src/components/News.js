import React, { Component } from 'react'
import NewsUpdate from './NewsUpdate'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export class News extends Component {

  static defultProps = {
    category: "general",
  }

  static propTypes = {
    category: this.propTypes,
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }
  

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=f04a12dcbeb14576a70b546f77f890aa&page=1&pageSize=12`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles,
    totalResults: parsedData.totalResults,
    page: this.state.page, })
    
  }

  nextclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=f04a12dcbeb14576a70b546f77f890aa&page=${this.state.page + 1}&pageSize=12`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
      totalResults: parsedData.totalResults,
    })
  }

  previousclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=f04a12dcbeb14576a70b546f77f890aa&page=${this.state.page - 1}&pageSize=12`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
      totalResults: parsedData.totalResults,
    })
  }

  fetchMoreData = async() =>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=f04a12dcbeb14576a70b546f77f890aa&page=${this.state.page + 1}&pageSize=12`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
      totalResults: parsedData.totalResults,
    })
  };


  render() {
    return (
      <div className="container my-3">
        <div className='container d-flex justify-content-between' >
          <button disabled={this.state.page <= 1} type="button" className='btn btn-primary' onClick={this.previousclick}>Previous</button>
          <button type="button" className='btn btn-primary' onClick={this.nextclick}>Next</button>
        </div>
        <h2 className='text-center'>TOP HEADLINES</h2>
        <h5>Total {this.state.totalResults} results</h5>
        {/* <InfiniteScroll datalength={this.state.articles.length} next={this.fetchMoreData} hasMore ={this.state.articles.length!=this.state.totalResults} loader={<h1>Loading...</h1>}></InfiniteScroll> */}
        {this.state.loading && <Spinner />}
        <div className='row'>
          {this.state.articles.map((element) => {
            return (<div className='col-md-4' key={element.url}>
              <NewsUpdate author={element.author} date={element.publishedAt} title={element.title}  imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>);
          })}
        </div>
        {this.state.loading && <Spinner />}
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page <= 1} type="button" className='btn btn-primary' onClick={this.previousclick}>Previous</button>
          <button type="button" className='btn btn-primary' onClick={this.nextclick}>Next</button>
        </div>
      </div>
    )
  }
}

export default News