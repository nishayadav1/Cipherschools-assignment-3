import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

export default class ButtonAppBar extends Component {

constructor(props){
    super(props)
    this.state={
        clicked:false,
        entry:''
    }
}

handlechange=()=>{
    this.setState({clicked:true})
}
write=(event)=>{
    this.setState({entry : event.target.value})

}
save=()=>{
    this.setState({clicked:false})
    this.props.additem(this.state.entry)

}
render(){
  return (
  <div >
    <br/><br/>
    <IconButton aria-label="add" onClick={this.handlechange}>
    </IconButton>
    {this.state.clicked ?
    <>
        <TextField id="Basic" label="Any value" onChange={this.write}/>
        <Button variant="contained" color="secondary" size="large" startIcon={<SaveIcon />} onClick={this.save}/>
    </>    
    }
 </div>)}
}
