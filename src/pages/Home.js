import React, { Component } from 'react'
import CocktailList from '../components/CocktailList'
import SearchForms from '../components/SearchForms'

export default class Home extends Component {

constructor(props) {
    super(props)

    this.state = {
         response:''
    }
    this.callbacfunction=this.callbacfunction.bind(this);
}

    
  callbacfunction(data)
  {
      
      this.setState({response:data})
      
    
  }
    
    
    render() {
        return (
            <div>
                
            <SearchForms searchaction={this.callbacfunction}>
             </SearchForms>
            <CocktailList listlength={this.state.response}></CocktailList>
            
            
           </div>
        )
    }
}
