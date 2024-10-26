import React from 'react'


//rafce to generate this 
//http://localhost:3000//users page
//do not make multiple pages  in one folder cuz its not gonna work 

type User = {
    id: number;
    name: string; 
}

const UsersPage = async () => {

    //if we use chache, it wil be server side: static rendering 
    //const res = await fetch("https://jsonplaceholder.typicode/users", { next: {revalidate: 10 } })
    const res = await fetch("https://jsonplaceholder.typicode/users", {cache: 'no-store' } )

    // the above setting will enable dynamic rendering 


    // this mean it will revalidate (upadate ) cache every 10 seconds 

    const users: User[] = await res.json();

  return (
    <div>
    <div>page</div>
    <p> {new Date().toLocaleTimeString()}  </p>
    <ul>
        {users.map( user => <li key = {user.id}> {user.name}  </li> )}
    </ul>
    
    </div>
    
  )
}

export default UsersPage