import React, {Component} from 'react'
import PhoneListCard from './Phones-card'
import axios from 'axios'



class PhoneList extends Component{
    
    componentDidMount () {
        axios.get("http://localhost:3000/api/phones")
        .then(res => res.data)
        .then(phones => {
            console.log(this.props.fillPhones(phones))
            this.props.fillPhones(phones)})
        .catch(err => console.log(err))
      }

      
    render(){
        return(
            <div className='phones-wrapper'>
                {this.props.allPhones ? this.props.allPhones.map((phone, idx)=> <PhoneListCard key={idx} {...phone}/> ) : null}
            </div>
        )
    }

}


export default PhoneList