import React from 'react'
//import PropTypes from "prop-types";
import axios from "axios";
import HistoryTable from "../components/HistoryTable"
import "./About.css";

class About extends React.Component{
  state={
    items:[],
    histories:[]
  };

  getHistory = async()=>{
    // const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    // this.setState({movies, isLoading:false})
  }
  componentDidMount(){
   this.getHistory();
  }
  render(){
    const {items, histories} = this.state;
    return (      
      
      <div className="about__container">
        <span>
          고객님의 이름으로 나무한그루가 심어집니다 :)
        </span>
      <span>Eco Friends</span>
    </div>
    ) 
  }
}

export default About;
