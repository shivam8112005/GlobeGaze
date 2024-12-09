import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import pagination from './pagination';
// import Pagination from './pagination';



import Pagination from './Pagination';
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
     page:0,
     loading:false
    }
    
    
  }
  //businessentertainmentgeneralhealthsciencesportstechnology
//componentDidMount is used to do any thing like fetch data or api just after the rendering of components on dom
 async componentDidMount(){
    // console.log("cdm");
    // this.setState({loading:true})
    // // const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=6e6312a61f6745ad9d227f8d22d095eb&pageSize=${this.props.pagesize}`;
    // const url=`https://newsapi90.p.rapidapi.com/topic/${this.props.category}?language=en-US&region=${this.props.country}`
    // let data= await fetch(url);
    // let parseData= await data.json();
    // console.log(parseData);
    // this.setState({articles: parseData.articles, totalResults: parseData.totalResults, loading:false})

    // const url = 'https://newsapi90.p.rapidapi.com/trendingTopics?region=US';
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'x-rapidapi-key': '80776cd168msh624b0d29df5c6c5p10f474jsna3751aed83e0',
    //     'x-rapidapi-host': 'newsapi90.p.rapidapi.com'
    //   }
    // };
    
    // try {
    //   const response = await fetch(url, options);
    //   const result = await response.text();
    //   console.log(result);
    // } catch (error) {
    //   console.error(error);
    // }
// api=414069ce70mshf7eefb7310ac5f4p117c40jsnb0ed7a939c3a;

    this.setState({loading:true})
    this.props.setProgress(10);
     const url = `https://google-news13.p.rapidapi.com/${this.props.category}?lr=en-US`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': `${this.props.apiKey}`,
        'x-rapidapi-host': 'google-news13.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      // this.props.setProgress(40);
      const data=await response.json();
      console.log(data);
      this.props.setProgress(70);
      const items = data.items; // Assuming 'items' contains the articles
      const totalResults = items.length;
      this.setState({articles:items, totalResults: totalResults, loading:false});
      this.props.setProgress(100);
      console.log(this.state.articles.length, " length");
    } catch (error) {
      console.error(error);
    }


    // const url = 'https://newsapi90.p.rapidapi.com/topic/latest?language=en-US&region=US';
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'x-rapidapi-key': '1d2e8c209cmsh96bc515df52a257p1399c2jsn89e3241a54a4',
    //     'x-rapidapi-host': 'newsapi90.p.rapidapi.com'
    //   }
    // };
    
    // try {
    //   const response = await fetch(url, options);
    //   // const result = await response.text();
    //   const data=await response.json();
    //   console.log(data);
    //   this.setState({articles:data});
    // } catch (error) {
    //   console.error(error);
    // }
    
  }
   scrollToTop=()=> {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling effect
    });
}
//   handleNextClick=async ()=>{
// console.log("next");
// this.scrollToTop();
// console.log(this.state.articles.length);

//   console.log(this.state.page);

//   // const main=document.querySelector(".main");
//   // main.innerHTML="";

//   // this.setState({loading:true})
  
// // const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=6e6312a61f6745ad9d227f8d22d095eb&page=${this.state.page+1 }&pageSize=${this.props.pagesize}`;
// // const url=`https://newsapi90.p.rapidapi.com/${this.props.category}?region=${this.props.country}`
// // let data= await fetch(url);
// // let parseData= await data.json();
// // this.setState({page:this.state.page+1, articles: parseData.articles})
// // this.setState({loading:false})
// // console.log(parseData);




// // const url = 'https://google-news13.p.rapidapi.com/latest?lr=en-US';
// // const options = {
// //   method: 'GET',
// //   headers: {
// //     'x-rapidapi-key': '1d2e8c209cmsh96bc515df52a257p1399c2jsn89e3241a54a4',
// //     'x-rapidapi-host': 'google-news13.p.rapidapi.com'
// //   }
// // };

// // try {
// //   const response = await fetch(url, options);
// //   const data=await response.json();
// //   console.log(data);
// //   const items = data.items; // Assuming 'items' contains the articles
// //       const totalResults = items.length;
// //       this.setState({page:this.state.page+1, articles:items, loading:false});
// // } catch (error) {
// //   console.error(error);
// // }


// // }
// // this.setState({articles: parseData.articles})
// this.setState({page:this.state.page+this.props.pagesize});

// console.log(this.state.page);


//   }
  handleNextClick1 = async () => {
    console.log("next");
    
    this.setState(
      (prevState) => ({ page: prevState.page + this.props.pagesize }),
      () => {
        this.scrollToTop(); // Ensures scroll happens after state update
        console.log(this.state.page, "Current Page after Next Click");
      }
    );
  };
  handlePrevCick1= async () => {
    console.log("prev");
    
    this.setState(
      (prevState) => ({ page: prevState.page - this.props.pagesize }),
      () => {
        this.scrollToTop(); // Ensures scroll happens after state update
        console.log(this.state.page, "Current Page after Prev Click");
      }
    );
  };
//   handlePrevCick=async ()=>{
//  console.log("prev");
//  this.scrollToTop();
//  console.log(this.state.articles.length);
// console.log(this.state.page);


// // // console.log("next");
// // this.setState({loading:true})
// // // const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=6e6312a61f6745ad9d227f8d22d095eb&page=${this.state.page-1 }&pageSize=${this.props.pagesize}`;
// // // const url=`https://newsapi90.p.rapidapi.com/${this.props.category}?region=${this.props.country}`
// // // let data= await fetch(url);
// // // let parseData= await data.json();
// // // this.setState({page:this.state.page-1, articles: parseData.articles, loading:false})
// // // console.log(parseData);


// // const url = 'https://google-news13.p.rapidapi.com/latest?lr=en-US';
// // const options = {
// //   method: 'GET',
// //   headers: {
// //     'x-rapidapi-key': '1d2e8c209cmsh96bc515df52a257p1399c2jsn89e3241a54a4',
// //     'x-rapidapi-host': 'google-news13.p.rapidapi.com'
// //   }
// // };

// // try {
// //   const response = await fetch(url, options);
// //   const data=await response.json();
// //   console.log(data);
// //   this.setState({articles:data.items});
// // } catch (error) {
// //   console.error(error);
// // }
// this.setState({page:this.state.page-this.props.pagesize});
// console.log(this.state.page);

//   }
  render() {
    console.log("render");
    
    return (
      <div className='container main' >
        <h2 className='text-center my-4 heading'>GlobeGaze Top HeadLines</h2>
        {this.state.loading && <Spinner/>}
       
        <div className="row">
       <Pagination items={this.state.articles} page={this.state.page} loading={this.state.loading}/>
      
         
            
        </div>
       <div className="container my-4 d-flex justify-content-around" >
       <button disabled={this.state.page-this.props.pagesize<0} type="button" className="btn btn-dark" onClick={this.handlePrevCick1}>&larr; Previous</button>
       <button type="button" disabled={this.state.page+this.props.pagesize>=this.state.articles.length} className="btn btn-dark" onClick={this.handleNextClick1}>Next &rarr;</button>
       </div>
      </div>
    )
  }
}
export default News

