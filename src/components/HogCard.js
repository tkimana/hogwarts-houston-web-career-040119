import React from 'react'
import HogInfo from './HogInfo';


class HogCard extends React.Component{
     constructor(){
         super()
         this.state={
             isGreased: false
         }
     }

     greasedHog=()=>{
       this.setState({
          isGreased: !this.state.isGreased
       })
     }

    render(){
        const imageName= this.props.hog.name.toLowerCase().replace(/ /gi,"_")
        return(
            <div
                 style={{'display': 'inline-block',"margin": "10px","padding": "10px", "border":"2px","borderStyle":"dashed"}}>
                  <b><img src={require(`../hog-imgs/${imageName}.jpg`)} alt="" /></b>
                    <h2><b><p>{this.props.hog.name}</p></b></h2>
                   <p>{this.props.hog.specialty}</p>
              

                     {this.state.isGreased 
                        ? 
                        <div>
                            <HogInfo hog= {this.props.hog}/> 
                        <button onClick={this.greasedHog}>Hide Details</button>
                        </div>
                        :   <button onClick={this.greasedHog}>Show Details</button>}


             
        </div>

        )
    }

}



export default HogCard;