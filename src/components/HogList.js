import React from 'react'
import HogCard from './HogCard'
import HogInfo from './HogInfo'


class HogList extends React.Component{
    render(){
        return(
            <div>
             
             {this.props.displayHogs.map(hog=> <HogCard hog={hog}/>)}
             <HogInfo/>  
            </div>
        )
    }

}



export default HogList;