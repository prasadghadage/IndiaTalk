import React from "react";
import Menuicon from "../Menuicon";
import "./Header.css"
import Switch from '@mui/material/Switch';
const label ={inputProps:{'area-label':'switch demo'}}
const Header = ({getData, setCategory }) => {
  return (
    <div style={{color:'#989898'}}>
      <div style={{color:'black'}} className="inshorts-header">
        <div className="icon">
          <Menuicon getData={getData} setCategory={setCategory}></Menuicon>
        </div>
        <h2 style={{color:'black',fontFamily:'cursive'}}> <img className="logo_icon" src="https://img.freepik.com/free-icon/news-logo_318-38132.jpg" alt="x" />India Talk </h2>
    {/* <img
          style={{ top:'20px',cursor: "pointer", paddingTop: "0.5rem" }}
          src="https://img.freepik.com/free-icon/news-logo_318-38132.jpg "
          height="80%"
          alt="inshorts-logo"
  />*/}
       
   <div className="dark_mode_btn">
          <Switch className="dark_mode"  {...label} defaultChecked color="default" />
          </div>
         
      </div>
    </div>
  );
};

export default Header;
