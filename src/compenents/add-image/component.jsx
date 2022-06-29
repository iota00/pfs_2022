import React, { Component } from "react";
import "./component.css";
import "../../assets/FONTS/fonts.css"

const Add = ({fileUrl, setFileUrl, changeImage}) => {


  return (
      <div className="page">
        <div className="container">
          <h1 className="heading">Add your Image</h1>
          <div className="img-holder">
           {fileUrl && <img src={fileUrl} alt="image" id="img" className="img" />}
          </div>
          <input
            type="file"
            accept="image/*"
            name="image-upload"
            id="input"
            onChange={changeImage}
          />
          
            
            <label className="image-upload" htmlFor="input">
              
              Choose your Nft
            </label>
            
        </div>
      </div>
    );
}
/*
export class App extends Component {
  state = {
    profileImg:null
  };
  imageHandler = e => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  render() {
    const { profileImg } = this.state;
    console.log({profileImg})
    return (
      <div className="page">
        <div className="container">
          <h1 className="heading">Add your Image</h1>
          <div className="img-holder">
            <img src={profileImg} alt="" id="img" className="img" />
          </div>
          <input
            type="file"
            accept="image/*"
            name="image-upload"
            id="input"
            onChange={this.imageHandler}
          />
          
            
            <label className="image-upload" htmlFor="input">
              
              Choose your Nft
            </label>
            
        </div>
      </div>
    );
  }
}
*/


export default Add;
