"use client";

export interface User{
    id:string
    name:string
}

export default function Home() {
       return (
        <div>
            <a href="/users/">open users</a>
        </div>
    );
}
