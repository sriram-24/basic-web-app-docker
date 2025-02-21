"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
    const [users,setUsers] = useState([]);
    useEffect(()=>{ 
        async function getUsers(){ 
            const res = await fetch(process.env.NEXT_PUBLIC_SERVER_HOST);
            const data = await res.json();
            if(data) {
                setUsers(data)
            }
        }
        getUsers()
    },[])
    return (
        <div>
            {users && users.map((obj, index) => <div key={obj.id}>{obj.name}</div>)}
        </div>
    );
}
