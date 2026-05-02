"use client"
import { useState, useEffect } from 'react';

export const useFetch = (endpoint:string) => {

    const [data,setData]=useState([])
    const [loading,setLoading]=useState<boolean>(true)
    const [err,setErr]=useState<any>()
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

    useEffect(()=>{
        const fetchData= async ()=>{
            try{
                const res= await fetch(`${BASE_URL}${endpoint}`)

                if(!res.ok){
                    throw new Error(`Error: ${res.status} ${res.statusText}`)
                }
                const resData=await res.json()
                setData(resData)
            }
            catch(error){
                setErr(error)
            }
            finally{
                setLoading(false)
            }
        }

        fetchData();
    },[endpoint]);

    return({data,loading,err})
}
