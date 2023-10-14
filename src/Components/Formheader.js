import React from 'react';
import form_image from "../images/download1.jpg";
import { FiStar, FiSettings } from 'react-icons/fi';
import { AiOutlineEye } from 'react-icons/ai';
import { IconButton, Button, Avatar } from '@material-ui/core';
import avatarimage from "../images/2.png"
import { IoMdFolderOpen } from 'react-icons/io';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import "./formheader.css";

function Formheader() {
  return (
    <div className='form_header'>  
      <div className="form_header_left">
        <img src={form_image} style={{ height: "40px", width: "60px" }} alt="Form" />
        <input type="text" placeholder="Untitled form" className="form_name" />
        <IoMdFolderOpen className="form_header_icon" style={{ marginRight: "10px" }}></IoMdFolderOpen>
        <FiStar className="form_header_icon" style={{ marginRight: "10px" }} />
        <span style={{ fontSize: "12px", fontWeight: "600" }}>All changes saved in Drive</span>
      </div>
      <div className="form_header_right">
        <IconButton>
          <ColorLensIcon fontSize="small" className="form_header_icon" />
        </IconButton>
        <IconButton>
          <AiOutlineEye className="form_header_icon" />
        </IconButton>
        <IconButton>
          <FiSettings className="form_header_icon" />
        </IconButton>
        <Button variant="contained" color="primary" component="a" href="#acontained-buttons">
          Send
        </Button>
        <IconButton>
          <MoreVertIcon className="form_header_icon" />
        </IconButton>
         
      </div>
    </div>
  );
}

export default Formheader;
