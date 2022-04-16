import { Route, Routes } from "react-router"
import { AddCity } from "../Components/AddCity"
import { AddCountry } from "../Components/AddCountry"
import {Edit }from "../Components/Edit"

import { TableIs } from "../Components/UItable"



export const AllRoutes = ()=>{


    return(
     
        <Routes>
             <Route path="/" element= {<TableIs/>}></Route>
            <Route path="/add-country" element= {<AddCountry/>}></Route>
            <Route path="/add-city" element= {<AddCity/>}></Route>
            <Route path="/edit/:id" element = {<Edit/>}></Route>
        </Routes>

    )


}