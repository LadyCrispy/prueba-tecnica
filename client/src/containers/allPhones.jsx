import PhoneList from '../Components/Phone-list'
import {connect} from 'react-redux'
import {fillPhones} from '../actions/index'


const mapStateToProps= state =>({
    allPhones: state.phones
})

const mapDispatchToProps = dispatch =>({
    fillPhones: allPhones=> dispatch(fillPhones(allPhones))
})




export default connect( mapStateToProps , mapDispatchToProps)(PhoneList)