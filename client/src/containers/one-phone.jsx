import PhoneDetailCard from '../Components/Detail-phone-card'
import  {getThePhone} from '../actions/index'
import {connect} from 'react-redux'


const mapStateToProps = state =>({
    onePhone: state.onePhone
})

const mapDispatchToProps = dispatch =>({
    getThePhone: id => dispatch(getThePhone(id))
})


export default connect( mapStateToProps , mapDispatchToProps)(PhoneDetailCard)
