import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'


export const useRequest = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)
const [isPending, setIsPending] = useState(false)
const navigate = useNavigate();

const apiKey = "4497b48c-ab6f-4f31-8e00-3891923563dc"
const url = "https://reisty-ap1.azurewebsites.net/api/waitlist/submit_request"
const request  = async (firstName, lastName, emailAddress, phoneNumber, restaurantName,  country, restaurantRole, reistyUserRole) =>{
    setError(null)
    setIsPending(true)
    setSuccess(false)

    // create user

    try {
        const item = {firstName, lastName, emailAddress, phoneNumber,restaurantName,  country,  restaurantRole, reistyUserRole }
        const result = await fetch(url,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                "ApiKey":apiKey,
               "Accept":"text/plain",
            },
            body:JSON.stringify(item)
            
        })
        const res = await result.json();
        console.log(res)
   

        if (res.status){
            setError(null) 
            setIsPending(false)
            setSuccess(true)
        }
        else{
            setError(res.errorMessage)
            setIsPending(false)
        }
    } catch (res) {
        console.log("Sammy",res)
        setIsPending(false)
    }
}
    
    useEffect(()=>{
        return () => setIsCancelled(true)
        }, [])

 
    return {error, isPending, request, success}
}

