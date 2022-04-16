import axios from "axios"
import { useState } from "react"
export const AddCountry = ()=>{
    const [country,setCountry] = useState("");

        const HandleSubmit = (e)=>{
            const payload = {
                "country":country
            }
            e.preventDefault();
            axios.post("http://localhost:8080/countries",payload)
             e.target.reset();
        }
           
    return(

             <div className="addcity">
                    <h1>Add Country</h1>
                   <form onSubmit={HandleSubmit}>
                   <label htmlFor="">Country</label><br />
                 <input type="text"  placeholder="Enter country name" onChange={(e)=>setCountry(e.target.value)} /> <br /><br />
                   <input type="submit" value="Submit" />
                    </form>
             </div>
      
        )
}