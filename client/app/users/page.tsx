"use client";
import React, {useState, useEffect} from 'react'
import { User } from '../page';

function  Users() {
  const [users,setUsers] = useState([]);
    useEffect(()=>{ 
        async function getUsers(){
            const host: string = process.env.NEXT_PUBLIC_SERVER_HOST || ""
            const res = await fetch(host);
            const data = await res.json();
            if(data) {
                setUsers(data)
            }
        }
        getUsers()
    },[])
    return (
        <div>
            {users && users.map((user:User) => <div key={user.id}>{user.name}</div>)}
        </div>
    );

}

export default Users
