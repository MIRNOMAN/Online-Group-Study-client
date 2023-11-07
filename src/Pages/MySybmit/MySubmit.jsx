import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";



const MySubmit = () => {
    const {user} = useAuth();
    const [values, setValues] = useState([])
    const [myAsgmt, setMyAsgmt] = useState([]); 

   useEffect(() =>{
    axios.get('http://localhost:5000/mySubmittedAssignment')
    .then(res => setValues(res.data))
  
   },[])
    useEffect(() => {
     const validUser = values.filter(item => item.email === user.email)
     setMyAsgmt(validUser)
    },[values,user.email])

    console.log(myAsgmt)
    return (
        <div>
            
        </div>
    );
};

export default MySubmit;