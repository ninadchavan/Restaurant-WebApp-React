import React, {useEffect, useState} from 'react';
import './CategoryDisplay.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function CategoryDisplay(){
    
    const[isLoading, setLoading] = useState(true);
    const[categorydata,setcategorydata] = useState()

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php").then(res => {
            console.log(res)
            setcategorydata(res.data.categories)
            setLoading(false);
        }).catch(err => console.log(err))
    },[])
    if(isLoading){
        return(
            <div className="Load"></div>
        )
    }
    // console.log(categorydata)

    // const categorylink = categorydata.map((items,i) => {
    //     const catlink = "/categories/" + items.strCategory
    //     return(
    //         <Route path={catlink} component={DisplayDish(items.strCategory)}/>
    //     )
    // })

    const displaydata = categorydata.map((items,i) => {
        // const catlink = "/categories/" + items.strCategory
        return(
            <div className='row categ'>
                <div className='col-sm-2'>
                    <img src={items.strCategoryThumb}></img>
                </div>
                <div className='col-sm-8 title_descr'>
                    <h3>{items.strCategory}</h3>
                    <h6>{items.strCategoryDescription}</h6>
                </div>
                <div className='col-sm-2 but'>
                    <Link to={`/categories/${items.strCategory}`}>
                        <button className="btn btn-success">Browse {items.strCategory} Dishes</button>
                    </Link>
                </div>
            </div>

        )
    })

    return(
        <div>
            <div className="categ-cards">
                {displaydata}
            </div>
            {/* <Switch>
                {categorylink}
            </Switch> */}
        </div>
    )
}