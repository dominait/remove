import Link from "next/link"
 function Card ( {id, email, gender, variant }){
    return (
       
            <header className="bg-zinc-100 w-fit  py-12 px-6 mx-auto">
                <h1>{email}</h1>
                <p>{gender}</p>
                <p>{id}</p>
                <p><Link  className="text-blue-500" href="/employees">employees</Link></p>
                
            </header>
     
    )
 }



 export {Card}