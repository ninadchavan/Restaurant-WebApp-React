import React, {useEffect, useState} from 'react';
import './DisplayDish.css';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

export var temporarydata = []

export default function DisplayDish(){

    let {id} = useParams()
    console.log(id)

    const[isLoading, setLoading] = useState(true);
    const[dishdata,setdishdata] = useState()
    const[price,setprice] = useState('')

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + id).then(res => {
            console.log(res.data.meals)
            setdishdata(res.data.meals)
            setLoading(false);
        }).catch(err => console.log(err))
    },[])
    if(isLoading){
        return(
            <div className="Load"></div>
        )
    }
    else{
        const displaydata = dishdata.map((items,i) => {
            return(
                <div class="card">
                    <img src={items.strMealThumb} />
                    <h5>{items.strMeal}</h5>
                    <input type="text" className="form-control" placeholder="Enter a price" value="100"
                    onChange={(e) => {setprice(e.target.value)}}></input>
                    <Link to={{
                        pathname: "/orders",
                        state: {
                            dishname:items.strMeal,
                            dishprice:price
                        }
                    }}>
                        <button className="btn btn-success align-self-end">Order Now</button>
                    </Link>
                </div>
            )
        })
    
        return(
            <div className="DisplayDish">
                {displaydata}
            </div>
        )
    }
    
    // console.log(dishdata)
        
}