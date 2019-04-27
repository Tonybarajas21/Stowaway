import React, { Component, StyleSheet, Text, View, Image, } from 'react';
import "./profile.css";

// import { ReactiveBase, DataSearch } from '@appbaseio/reactivesearch';




var user = {
  basicInfo: {
    name: "Chad",
    location: "Los Angeles, CA",
    photo: "./../utils/profile/boat3.PNG",
    pics: "http://lorempixel.com/400/200/",
    bio: "Hey bro, I'm Chad! I'm a total fucking douchebag with a kick ass boat who is willing to take your dumb ass out on a lake with me, a total fucking stranger!!"
  }
}





class Avatar extends React.Component {
  render() {
    var image = this.props.image,
        style = {
          width: this.props.width || 75,
          height: this.props.height || 75
        }; 
    
    if (!image) return null;
    
    return (
     <div className="avatar" style={style}>
           <img src={this.props.image} /> 
      </div>
    );
  }
}

class MainPanel extends React.Component {
  render() {
    var info = this.props.info;
    if (!info) return null;

    return (
     <div>
        <div className="top">
            <Avatar 
               image={info.photo} 
               width={100}
               height={100}
            /> 
            <h2>{info.name}</h2>
            <h3>{info.location}</h3>
        </div>
        
        <div className="bottom">
          <h4>Captain:</h4>
          <p>{info.bio}</p>
        </div>
      </div>
    );
  }
}


class UserProfile extends React.Component {
  render() {
    return (
      <div id="user-profile">
        <MainPanel info={user.basicInfo} />
      </div>
    )
  }
}

// React.render(<UserProfile />, document.getElementById('root'))

export default UserProfile





