import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tab'
import Tab from '@material-ui/core/Tab'


const useStyles = makeStyles({
    rooty:{
        flexGrow:1,
    },
    tab:{
        fontSize:12,
        color:"#5f6368",
    textTransForm:"capitalize",
    height:10,
    fontWeight:"600",
    fontFamily: 'Google Sans,Roboto,Arial,sans-serif',
    },
    tabs:{
        height:10
    }
}) 

function Centeredtabs() {
    const classes = useStyles()
  return (
     <Paper className={classes.root}>
        <Tabs
        className={classes.tab}
        textColor="primary"
        indicateColor="primary"
        centered
        >
            <Tab label="Questions" className={classes.tab}>
            
            </Tab>
        </Tabs>
            <Tab label="Responses" className={classes.tab}>
                 
            </Tab>
     </Paper>
  )
}

export default Centeredtabs ;
