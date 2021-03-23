import React from "react";
//import PropTypes from "prop-types";
import Gagebar from './Gagebar'

function UserInfo({id,gage_bar,usedPoint,storeagePoint,levelNum,levelName,img}){
    return (
        <div  className="userInfo">
            <div style={infoStyle} className="userInfo__data">
                {/* <h3 className="userInfo__usedPoint">사용한 포인트: {usedPoint}</h3> */}
                <h3 className="userInfo__storeagePoint">포인트: {storeagePoint}</h3>    
                <h3 className="userInfo__level">{id}님의 현재레벨: {levelName}</h3>
            </div>
            
            <div style={imgStyle}>
                <img  src={img} alt={levelName} title={levelName}/>
                {/* <h3 className="userInfo__gagebar">게이지바: {gage_bar}</h3> */}
                <Gagebar  gageBar={gage_bar} />
            </div>
             
        </div>
    );
}

// Movie.propTypes={
//     id:PropTypes.number.isRequired,
//     year: PropTypes.number.isRequired,
//     title:PropTypes.string.isRequired,
//     summary:PropTypes.string.isRequired,
//     poster:PropTypes.string.isRequired,
//     genres:PropTypes.arrayOf(PropTypes.string).isRequired
// }
const imgStyle={
    display:"flex",
    flexDirection:"column",
	justifyContent:"center",
	alignItems:"center"
}

const infoStyle={
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
	alignItems:"center"
}

 
 
export default UserInfo;