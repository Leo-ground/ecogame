import './App.css';
import React from 'react'
import axios from "axios";
import UserInfo from './components/UserInfo'
import Item from './components/Item'
import Navigation from './components/Navigation'
import Modal from './components/Modal'
import {Transition, Spring,animated} from "react-spring/renderprops";

class App extends React.Component{
  state={
    cust_id:[],
    userGameInfo:[],
    item2:false,
    item1:false
  };



  getSessionId = async()=>{
    //const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    //this.setState({movies, isLoading:false})

    const {data:{cust_id}} = await axios.get("http://localhost/game/userId");
    console.log(" getSessionId cust_id: "+cust_id)
    this.setState({cust_id});    
    this.getUserInfo();
  }

  getUserInfo = async()=>{
    //const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    //this.setState({movies, isLoading:false})

    const {data:{userGameInfo}} = await axios.get("http://localhost/game/info/"+this.state.cust_id);
    console.log("user cust_id: "+this.state.cust_id)
    this.setState({userGameInfo})

  }
  componentDidMount(){
   this.getSessionId();
  }
  useItem1 = async()=>{
    const {data:{result}} = await axios.get("http://localhost/game/item/1/"+this.state.cust_id);
    console.log(result)
    this.setState({ item1:
      !this.state.item1})
    this.getUserInfo();
    this.setState({ item1:
      !this.state.item1})
  }

  useItem2 = async()=>{
    const {data:{result}} = await axios.get("http://localhost/game/item/2/"+this.state.cust_id);
    console.log(result)
    this.setState({ item2:
      !this.state.item2})
    this.getUserInfo();
    this.setState({ item2:
      !this.state.item2})
  }

  

  render(){
    const {userGameInfo} = this.state;

    const {cust_id} = this.state;

    const imgBind ={
      display:"flex",
      justifyContent: "space-between"
    }
    return (
      <div className="App">
        {/* <Modal/> */}
        <Navigation/>
        <UserInfo
                //key={movie.id} 
              usedPoint={userGameInfo.totalUsedItem_amount}
              gage_bar={userGameInfo.gage_bar}
              storeagePoint={userGameInfo.point_amount}
              levelNum={userGameInfo.game_level}
              levelName={userGameInfo.level_name}
              img={userGameInfo.img_src}
              id={cust_id}
              />
        <div style={imgBind}>
        <Transition 
            native 
            items={this.state.item1}
            from={{ transform: 'translate3d(-300px,0px,0)', opacity: 1 }}
            enter={{ transform: 'translate3d(350px,-300px,0)', opacity: 0 }}
            leave={{}}>
             {show =>show && (props =>(
              <animated.div style={props}>
                <Item 
                    itemNum={1}
                    useItem={this.useItem1}
                />
              </animated.div>
            ))}
         
          </Transition>
          <Item 
                      itemNum={1}
                      useItem={this.useItem1}
                    />
          {/* <Spring
                  from={{marginTop:-500, opacity:0}}
                  to={{marginTop:0, opacity:1}}
              >{props =>
                  <div style={props}>
                    <Item 
                      itemNum={1}
                      useItem={this.useItem1}
                    />
                  </div>}
         
          </Spring> */}
            
          
          <Transition 
            native 
            items={this.state.item2}
            from={{ transform: 'translate3d(400px,0px,0)', opacity: 1 }}
            enter={{ transform: 'translate3d(-30px,-200px,0)', opacity: 0 }}
            leave={{}}>
             {show =>show && (props =>(
              <animated.div style={props}>
                <Item 
                    itemNum={2}
                    useItem={this.useItem2}
                />
              </animated.div>
            ))}
         
          </Transition>
          <Item 
                    itemNum={2}
                    useItem={this.useItem2}
                />    
        </div>
        {/* {userGameInfo.map(Info =>
             
            )} */}
        
      </div>
    );
  }

  
}

export default App;
