import React, { Component } from 'react'

export default class SearchForms extends Component {
    
    ontrigger=(event)=>{this.props.searchaction(this.state.username)}

    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             text:''
             
        }
      this.searchhandler=this.searchhandler.bind(this);
      this.searching=this.searching.bind(this);
    }
    
    searchhandler(e){
        this.setState({
         username: e.target.value
         
        })
    }

    searching(e)
    {
      e.preventDefault();
      this.setState({
          text:this.state.value  
      })
      
      this.ontrigger()
    }
    
    render() {
        
        return (
            
                 <div className="searchcontainer">
            <h1 className="searchtext">search your product here </h1>
           
        <form className="formcontrol">
            <input type="text" value={this.state.username} onChange={this.searchhandler}/> 
            <button type="submit" onClick={this.searching} ></button>
            
            
        </form>
    
        
        </div>
            
        )
    }
}
