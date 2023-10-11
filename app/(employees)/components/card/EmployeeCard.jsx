import Link from "next/link" 
 function EmployeeCard ( {id, email, gender }){
    return (
       
            <div className="bg-zinc-50 rounded-md max-w-[260px] py-12 px-4 shadow">
                <h1>{email}</h1>
                <p>{gender}</p>
                <p>{id}</p>
                 <p><Link className="text-blue-500" href={`/employee/${id}`}>  go to employee page  </Link></p>
            </div>
     
    )
 }



 export {EmployeeCard}