import React, { Component } from 'react'

export class NewsItem extends Component {
 
  render() {
    let {title, description, imageUrl, newsUrl}=this.props;
    return (
      <div>
        <div className="card my-3" style={{height: "25rem"}}>
  <img style={{height: "15rem"}} src={!imageUrl?"https://www.shutterstock.com/image-photo/newspaper-headline-business-news-260nw-262393247.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
