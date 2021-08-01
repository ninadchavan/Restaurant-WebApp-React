import React,{Component, useState} from 'react';
import "./FeedbackForm.css"

export default function FeedbackForm(){

    var feedbackdata = JSON.parse(sessionStorage.getItem('PastComments') || "[]")
    // if(sessionStorage.getItem('PastComments')){
    //     setfeedbackdata(sessionStorage.getItem('PastComments'))
    // }

    var currentfeedback = {
        usr:"",
        rat:"",
        comm:""
    }

    const[username,setusername]=useState('')
    const[rating,setrating]=useState('')
    const[comment,setcomment]=useState('')

    const[eusername,seteusername]=useState('')
    const[erating,seterating]=useState('')
    const[ecomment,setecomment]=useState('')

    const[ucolor,setucolor]=useState('')
    const[ecolor,setecolor]=useState('')
    const[pcolor,setpcolor]=useState('')

    const[correct,setcorrect]=useState(true)

    function validate(){
        if(username.length > 0){
            currentfeedback.usr = username
            setusername('')
            seteusername('')
            setucolor('green')
        }
        else{
            seteusername("Please Enter a Username")
            setucolor("red")
            setcorrect(false)
        }

        if(rating > 0 && rating < 6){
            currentfeedback.rat = rating
            setrating('')
            seterating('')
            setecolor('green')
        }
        else{
            seterating('Please Select a rating')
            setecolor('red')
            setcorrect(false)
        }

        if(comment.length > 0){
            currentfeedback.comm = comment
            setcomment('')
            setecomment('')
            setpcolor('green');
        }
        else{
            setecomment("Please Enter your Comment")
            setpcolor('red')
            setcorrect(false)
        }

        if(correct){
            feedbackdata = [...feedbackdata,currentfeedback]
            sessionStorage.setItem("PastComments",JSON.stringify(feedbackdata))
        }

        console.log(username + rating + comment)
    }

    const pastcomments = feedbackdata.map((item,i) => {
        return(
            <div className="card-inside">
                <p><span>Username:</span> {item.usr}</p>
                <p><span>Rating:</span> {item.rat}</p>
                <p><span>Comment:</span> {item.comm}</p>
            </div>
        )
    })

    return(
        <div>
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <h1>Feedback Form</h1>

                    <input type="text" placeholder="Enter Your Username" className="form-control" style={{borderColor:ucolor}}
                    value={username} onChange={(e) => {setusername(e.target.value)}}></input>
                    <p>{eusername}</p>
                    
                    <select placeholder="Select a Rating" className="form-control" style={{borderColor:ecolor}}
                    value={rating} onChange={(e) => {setrating(e.target.value)}}>
                        <option hidden>Select Your Rating</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <p>{erating}</p>
                    
                    <textarea placeholder="Enter Your Comment" className="form-control" style={{borderColor:pcolor}}
                    value={comment} onChange={(e) => {setcomment(e.target.value)}}></textarea>
                    <p>{ecomment}</p>

                    <button className="btn btn-primary" onClick={validate}>Submit</button>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-8 card">
                    <h1>Past Comments</h1>
                    {pastcomments}
                </div>
            </div>
        </div>
    )
}


