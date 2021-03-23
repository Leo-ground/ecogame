import React from "react";
//import PropTypes from "prop-types";

function Item({itemNum,useItem}){
    return (
        <div className="userInfo">
            {
                itemNum===1
                ?(<div onClick={useItem}>
                    <img style={imageStyle} src="/img/item/water.png"/>
                </div>)
                :(<div onClick={useItem}>
                    <img style={imageStyle} src="/img/item/com.png"/>
                </div>)

            }
        </div>
    );
}

const imageStyle={
    height: '200px'
}

// Movie.propTypes={
//     id:PropTypes.number.isRequired,
//     year: PropTypes.number.isRequired,
//     title:PropTypes.string.isRequired,
//     summary:PropTypes.string.isRequired,
//     poster:PropTypes.string.isRequired,
//     genres:PropTypes.arrayOf(PropTypes.string).isRequired
// }
 
export default Item;