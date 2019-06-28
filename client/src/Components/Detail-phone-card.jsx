import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class PhoneDetailCard extends Component{

    componentDidMount(){
        this.props.getThePhone(this.props.match.params._id)
    }

    render(){
        return(

            <div>
            {this.props.onePhone ? 
                <div className='detail-card'>
                    <h3>{this.props.onePhone.name}</h3>
                    <img src={this.props.onePhone.imageFileName} alt={this.props.onePhone.name}/>
                    <p>Color: {this.props.onePhone.color}</p>
                    <p>Screen: {this.props.onePhone.screen}</p>
                    <p>Processor: {this.props.onePhone.processor}</p>
                    <p>RAM: {this.props.onePhone.ram}</p>
                    <Link to='/' onClick={this.goToIndex}>Volver al listado</Link>
                </div>
            
                    :null
            
            }
            </div>
            
        )
    }
    

}



export default PhoneDetailCard