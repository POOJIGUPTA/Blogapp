
import Blogitems from '../components/Blogitems'

import React, { Component } from 'react'
import Spinner from '../components/Spinner';

// import Post from './Post';

export class Blogcomponent extends Component {
    
        
    constructor(){
        super();
        this.state ={
            articles : [],
            loading : false,
            page: 1,
        }
    }
   
    async componentDidMount(props){
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apikey}&page=1&pagesize=12`;
        this.setState({loading :true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles : parsedData.articles, totalResults: parsedData.totalResults, loading:false})
       
    }
    handlenext=async(props)=>{
        if(!(this.state.page +1 > Math.ceil(this.state.totalResults/12))){
            let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apikey}&page=${this.state.page +1}&pagesize=12`;
        this.setState({loading :true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page + 1,
            articles : parsedData.articles,
            loading :false
        })
        }
        
    }
    handleprev= async(props)=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=0${this.props.apikey}&page=${this.state.page - 1}&pagesize=12`;
        this.setState({loading :true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles : parsedData.articles,
            loading :false
        })
        
    }
  render() {
    return (
        <div className="container">
            <h2 className="text-center" style={{marginTop:'100px'}}>BLOGS OF THE DAY</h2>
            {this.state.loading && <Spinner/>}
        <div className="row" >
            {!this.state.loading && this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                <Blogitems  title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0, 90):""} imageurl={element.urlToImage} newsurl={element.url}/>
                
                </div>
            }
            )}
            <div className="container d-flex justify-content-between" >
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark mx-4" onClick={this.handleprev} >Previous</button>
            <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handlenext} >Next</button>
            </div>

        
        </div>

        
       
    </div>
      
    )
  }
}

export default Blogcomponent

