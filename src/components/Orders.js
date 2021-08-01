import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './Orders.css'

export default function Orders(props){
    const location = useLocation()
 
    console.log(location.state)
    var orderdata = location.state

    var currentorder = {
        dish:"",
        usr:"",
        p:""
    }

    const[username,setusername]=useState('')
    const[email,setemail]=useState('')
    const[contact,setcontact]=useState('')
    const[addr,setaddr]=useState('')

    const[eusername,seteusername]=useState('')
    const[eemail,seteemail]=useState('')
    const[econtact,setecontact]=useState('')
    const[eaddr,seteaddr]=useState('')

    const[ucolor,setucolor]=useState('')
    const[ecolor,setecolor]=useState('')
    const[ccolor,setccolor]=useState('')
    const[acolor,setacolor]=useState('')

    const[correct,setcorrect]=useState(true)
    console.log(sessionStorage.getItem('PastOrders'))
    var pastorders = JSON.parse(sessionStorage.getItem('PastOrders') || "[]")

    // if(sessionStorage.getItem('PastOrders')){
    //     setpastorders(JSON.parse(sessionStorage.getItem('PastOrders')))
    // }
    console.log(pastorders)

    function validate(){
        if(username.length > 0){
            currentorder.usr=username
            setusername('')
            seteusername('')
            setucolor('green')
        }
        else{
            seteusername("Please Enter a Name")
            setucolor("red")
            setcorrect(false)
        }

        if(email.match(/[^@\s]+@[^@\s]+/)){
            setemail('')
            seteemail('')
            setecolor('green')
        }
        else{
            seteemail('Enter valid email id')
            setecolor('red')
            setcorrect(false)
        }

        if(contact.length === 10 && contact.match(/(7|8|9)\d{9}/)){
            setcontact('')
            setecontact('')
            setccolor('green');
        }
        else{
            setecontact("Invalid Contact Number")
            setccolor('red')
            setcorrect(false)
        }

        if(username.length > 0){
            setaddr('')
            seteaddr('')
            setacolor('green');
        }
        else{
            seteaddr("Please Enter an Address")
            setacolor('red')
            setcorrect(false)
        }

        console.log(correct)
        if(correct){
            currentorder.dish=orderdata.dishname
            currentorder.p=orderdata.dishprice
            pastorders = [...pastorders,currentorder]
            sessionStorage.setItem('PastOrders', JSON.stringify(pastorders))
            console.log(sessionStorage.getItem('PastOrders'))
        }

        console.log(username + email + contact + addr)
    }

    const pastordersdata = pastorders.map((item,i) => {
        return(
            <div className="card-inside">
                <p><span>Username:</span> {item.usr}</p>
                <p><span>Ordered Dish:</span> {item.dish}</p>
                <p><span>Price:</span> {item.p}</p>
            </div>
        )
    })
    
    if(orderdata){
        return(
            <div>
                <div className="row">
                    <div className="col-md-5 container">
                        <h2>Order Details</h2>

                        <div className="card-name">
                            <h5><span>Dish Name:</span> {orderdata.dishname}</h5>
                            <h5><span>Dish Price:</span> {orderdata.dishprice}</h5>
                        </div>

                        <input type="text" placeholder="Enter your Name" className="form-control" style={{borderColor:ucolor}}
                        value={username} onChange={(e) => {setusername(e.target.value)}}></input>
                        <p>{eusername}</p>
                        
                        <input type="text" placeholder="Enter your Email" className="form-control" style={{borderColor:ecolor}}
                        value={email} onChange={(e) => {setemail(e.target.value)}}></input>
                        <p>{eemail}</p>
                        
                        <input type="text" placeholder="Enter you Contact Number" className="form-control" style={{borderColor:ccolor}}
                        value={contact} onChange={(e) => {setcontact(e.target.value)}}></input>
                        <p>{econtact}</p>
                        
                        <textarea placeholder="Enter your Address" className="form-control" style={{borderColor:acolor}}
                        value={addr} onChange={(e) => {setaddr(e.target.value)}}></textarea>
                        <p>{eaddr}</p>
        
                        <button className="btn btn-primary" onClick={validate}>Submit</button>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8 card">
                        <h1>Past Orders</h1>
                        <p>{console.log(pastorders)}</p>
                        {pastordersdata}
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <div>
                <div className="row justify-content-center">
                    <div className="col-md-8 card">
                        <h1>Past Orders</h1>
                        {pastordersdata}
                    </div>
                </div>
            </div>
        )
    }
    
}