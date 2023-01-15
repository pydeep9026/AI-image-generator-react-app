import React, { useState } from "react";
import './styles.css'


const Search=(props)=>{
    const {getdatafromsearchcomponent}=props



    const [inputvalue,setinputvalue]=useState('')
    const handleinputvalue=(e)=>{
        const {value}=e.target;
        setinputvalue(value)

    }


    
    const handlesubmit=(e)=>{
        e.preventDefault()
        getdatafromsearchcomponent(inputvalue)

    }

    return(
        <div onSubmit={handlesubmit} className="search">
            <form className="Search">
                <input name="search" onChange={handleinputvalue} value={inputvalue} placeholder="describe image details here..." id="search"/>
                <button type="submit"> generate</button>
            </form>



        </div>
    )
}

export default Search;