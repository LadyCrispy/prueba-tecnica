import React, {Component} from 'react'
import {Link} from 'react-router-dom'
 

class PhoneListCard extends Component{
    
    
    render(){
    return(

        <div className='phone-card'>
            
            <Link onClick={this.getThePhone} to={`/phone/detail/${this.props.id}`}><h3>{this.props.name}</h3></Link> 
            <img src={this.props.imageFileName} alt="phone"/>
            <h4>Manufacturer: {this.props.manufacturer}</h4>
            <p>Description:</p>
            <p className='description'>{this.props.description}</p>
            <aside>Price: {this.props.price}€</aside>

        </div>

    )
    }  
}



export default PhoneListCard


