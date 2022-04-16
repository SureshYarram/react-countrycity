import axios from "axios"
import { useEffect, useState } from "react"



export const AddCity = ()=>{
        const[data,setData] = useState([]);
         const [formdata,setFormdata] = useState({
            city:"" ,
            population:"",
            country:"",


         })
        useEffect(()=>{
            GetData()
        },[])
   const GetData = ()=>{
  axios.get("http://localhost:8080/countries").then((res)=>{
            setData(res.data)
  })       
   }
        
     const HandleChange  = (e)=>{
         const {id,value} = e.target;
         setFormdata({...formdata,[id]:value})
     }

     const HandleSubmit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8080/cities",formdata)
           
      e.target.reset();
        
    }
    return(

        <div className="addcity">
            <h1>Add City</h1>
            <form onSubmit={HandleSubmit}>
                <label>City :</label> <br />
            <input type="text" placeholder="Enter your city" id="city" onChange={HandleChange}/> <br /><br />
            <label >Population :</label> <br />
          <input type="number"  placeholder="Enter population" id="population" onChange={HandleChange}/><br /><br />
          <label>Select Country :</label> <br />
                <select  name="countries" id="country" onChange={HandleChange}>
                    <option value="">-----</option>
                {data.map((el)=>(
                    <option key={el.id} value={el.country}>{el.country}</option>
                
             )
             )}
             </select> <br /><br />
                 <input type="submit"/>

            </form>
        </div>
    )

}