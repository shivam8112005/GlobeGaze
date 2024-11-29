import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {
 articles=[
  // {
  // "source": {
  // "id": "espn-cric-info",
  // "name": "ESPN Cric Info"
  // },
  // "author": null,
  // "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  // "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  // "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  // "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  // "publishedAt": "2020-04-27T11:41:47Z",
  // "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  // },
  // {
  // "source": {
  // "id": "espn-cric-info",
  // "name": "ESPN Cric Info"
  // },
  // "author": null,
  // "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  // "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  // "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  // "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  // "publishedAt": "2020-03-30T15:26:05Z",
  // "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  // }
  ];
  // page=1;
  static defaultProps={
country:"us",
pagesize:6,
category:"general"
  }
  static propTypes={
    country:PropTypes.string,
    pagesize:PropTypes.number  ,
    category:PropTypes.string
      }
  constructor(){
    super();
    console.log("hello I am a constructor from news component");
    this.state={
      articles:this.articles,
     page:1,
     loading:false

    }
    
  }
  //businessentertainmentgeneralhealthsciencesportstechnology
//componentDidMount is used to do any thing like fetch data or api just after the rendering of components on dom
 async componentDidMount(){
    console.log("cdm");
    this.setState({loading:true})
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=6e6312a61f6745ad9d227f8d22d095eb&pageSize=${this.props.pagesize}`;
    let data= await fetch(url);
    let parseData= await data.json();
    console.log(parseData);
    this.setState({articles: parseData.articles, totalResults: parseData.totalResults, loading:false})
    
  }
  handleNextClick=async ()=>{
console.log("next");
if(this.state.page<=Math.ceil(this.state.totalResults/this.props.pagesize)){
  console.log(this.state.page);
  console.log(Math.ceil(this.state.totalResults/this.props.pagesize));
  // const main=document.querySelector(".main");
  // main.innerHTML="";

  this.setState({loading:true})
  
const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=6e6312a61f6745ad9d227f8d22d095eb&page=${this.state.page+1 }&pageSize=${this.props.pagesize}`;
let data= await fetch(url);
let parseData= await data.json();
this.setState({page:this.state.page+1, articles: parseData.articles})
this.setState({loading:false})
console.log(parseData);

}
// this.setState({articles: parseData.articles})




  }
  handlePrevCick=async ()=>{
console.log("prev");


// console.log("next");
this.setState({loading:true})
const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=6e6312a61f6745ad9d227f8d22d095eb&page=${this.state.page-1 }&pageSize=${this.props.pagesize}`;
let data= await fetch(url);
let parseData= await data.json();
this.setState({page:this.state.page-1, articles: parseData.articles, loading:false})
console.log(parseData);

  }
  render() {
    console.log("render");
    
    return (
      <div className='container my-3 main' >
        <h2 className='text-center my-4 heading'>GlobeGaze Top HeadLines</h2>
        {this.state.loading && <Spinner/>}
       
        <div className="row">
        {!this.state.loading && this.state.articles.map((ele)=>{
          let des;
          if(ele.description!=null && ele.description.length>35){
           des= ele.description.substring(0,36)+"...";
        }let t;
        if(ele.title!=null && ele.title.length>30){
          t=ele.title.substring(0,31)+"...";
        }
          return <div className="col-md-4" key={ele.url}>
            <NewsItem  title={t} description={des} imageUrl={ele.urlToImage} newsUrl={ele.url}/>
            </div>
        })}
      
         
            
        </div>
       <div className="container d-flex justify-content-around my-4">
       <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevCick}>&larr; Previous</button>
       <button type="button" disabled={this.state.page===Math.ceil(this.state.totalResults/this.props.pagesize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
       </div>
      </div>
    )
  }
}
export default News

