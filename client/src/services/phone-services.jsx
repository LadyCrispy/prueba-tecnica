import axios from 'axios'

// export default class PhoneServices{
//     constructor(){
//         this.services= axios.create({
//             baseURL: 'http://localhost:3000/phone',
//             // withCredentials: true
//         })
//     }

//     getPhoneList = () => {
//         return this.services.get('/')
//             .then(res=>res.data)
//             .catch(err=>console.log(err))
//     }

// } 

export function loadPhones(){
    return(dispatch)=>{
        return axios.get('http://localhost:3000/phone')
            .then((response)=>{
                console.log(response.data)
                dispatch(fillPhones(response.data))
            })
    }
}

export function fillPhones(phones){
    return{
        type: 'SET_ALL_PHONES',
        phones: phones
    }
}