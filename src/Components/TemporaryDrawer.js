import React from "react";
import MenuIcon from "@material-ui/icons/Menu"
import {IconButton, ListItemText} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Divider from "@material-ui/core/Divider"

import formimage from "../images/forms_2020q4_48dp.png"
import exclesheetimage from "../images/sheets.jpg"
import docimage from "../images/docs.png"
import slidesimage from "../images/slides.png"
import driveimage from "../images/drive.png"
import {FiSettings} from "react-icons/fi"
import {BiHelpCircle} from "react-icons/bi"
import "./Drawer.css"


const useStyles = makeStyles({
    listItem:{
        marginLeft:"20px",fontSize:"14px",fontWeight:"500",color:"grey"
    },
    slideImage:{
        height:"20px",width:"20px"
    }
});

function TemporaryDrawer(){
    const classes = useStyles();
    var [state,setstate] = React.useState({
        lete: false
    })
    const toggleDrawer = (anchor, open) => (event) => {
        setstate({ ...state, [anchor]: open });
    };

    const list =(anchor)=>(
        <div style={{width:"250px"}} role="presentation">
            <Divider/>
          <List>
            <ListItem>
                <ListItemText style={{ fontSize:"48px",marginLeft:"5px"}}>
                    <span style={{color:"blue",fontWeight:"700",fontSize:"22px",fontFamily:"'Product Sans' , Arial,sans-serif"}}>G</span>
                    <span style={{color:"red",fontWeight:"500",fontSize:"22px",fontFamily:"'Product Sans' , Arial,sans-serif"}}>o</span>
                    <span style={{color:"yellow",fontWeight:"500",fontSize:"22px",fontFamily:"'Product Sans' , Arial,sans-serif"}}>o</span>
                    <span style={{color:"blue",fontWeight:"500",fontSize:"22px",fontFamily:"'Product Sans' , Arial,sans-serif"}}>g</span>
                    <span style={{color:"green",fontWeight:"500",fontSize:"22px",fontFamily:"'Product Sans' , Arial,sans-serif"}}>l</span>
                    <span style={{color:"red",fontWeight:"500",fontSize:"22px",marginRight:"10px",fontFamily:"'Product Sans' , Arial,sans-serif"}}>e</span>
                    <span style={{color:"#5f6368",fontWeight:"500",fontSize:"22px",fontFamily:"'Product Sans' , Arial,sans-serif"}}>Doce</span>

                </ListItemText>
            
            </ListItem>
          </List>
          <Divider/>
          <List style={{marginLeft:"8px",marginRight:"8px",marginTop:"15px"}}>
            <ListItem className="list_item">
            <img src={docimage} className={classes.slideImage} />
            <div className={classes.listItem} >Docs</div>
            </ListItem>

            <ListItem className="list_item">
            <img src={exclesheetimage} className={classes.slideImage}/>
            <div className={classes.listItem} >Sheets</div>
            </ListItem>

            <ListItem className="list_item">
            <img src={slidesimage} className={classes.slideImage}/>
            <div className={classes.listItem} >Slides</div>
            </ListItem>

            <ListItem className="list_item">
            <img src={formimage} className={classes.slideImage}/>
            <div className={classes.listItem} >Forms</div>
            </ListItem>
        
          </List>
          <Divider/>  
          <List>
            <ListItem className="list_item">
                <FiSettings/>
                <div> Settings</div>
            </ListItem>

            <ListItem className="list_item">
                <BiHelpCircle/>
                <div> Help & Feedback</div>
            </ListItem>
          </List>
    
        
          <List >
            <ListItem className="list_item">
            <img src={driveimage} className={classes.slideImage} />
            <div className={classes.listItem} >Drive</div>
            </ListItem>
            </List>
          

        </div>
    )

    return(

        <div>
             <React.Fragment>
             <IconButton onClick={toggleDrawer("left",true)}>
                <MenuIcon/>

            </IconButton>
            <Drawer open= {state['left']} onClose={toggleDrawer("left",false)} anchor={'left'}>
            {list('left')}
            </Drawer>
 
            
            </React.Fragment>

             

        </div>
    )

}
export default TemporaryDrawer;