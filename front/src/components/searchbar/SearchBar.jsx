import { useState } from "react";


const SearchBar = ({onSearch}) => {
    const [id, setId]= useState('')

    const handleChange= (event) =>{
        setId(event.target.value)
    }
    const handleChangeinput= ()=>{
        setId('')
    }
    return(
        <div className="flex justify-center order-last">
            <div className="m-2 p-2.3">
                 <input
                 type='search' 
                 onChange={handleChange}
                 value={id}
                 className="border-2 border-fuchsia-200 min-w-0  rounded hover:border-fuchsia-500  bg-white p-3.5 text-fuchsia-900 focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 "
                 placeholder="Search by ID"
                 />
            </div>
            <div className="m-2 p-2.3">

        <button 
        onClick={()=>{onSearch(id); handleChangeinput()}}
        className="border-2 rounded-full p-6 h-12 w-12 hover:border-fuchsia-500 bg-[url('./assets/search.jpg')] bg-cover"
        ></button> 
            </div>
     </div>   
    )
}
export default SearchBar;