
import { Card } from "../../components/card/Card"

async function generateStaticParams() {
  const res = await fetch(`${process.env.API_PATH}/employees`)
  const employees = await res.json()
  return employees.map(e=> console.log({id:e.id.toString()}))
}

async function getEmployee(id){
     const res = await fetch(`${process.env.API_PATH}/employee/${id}`)
    const employee = await res.json()
    
     return employee
 
}

 async function Employee ({params}) {
    const id = params.id
    const employee =  await getEmployee(id)
    
  return (
    <>
      
    
      <header className="text-center pt-28">
        <h2 className="text-5xl text-slate-900">Employee Page Component </h2>
      </header>
      <main className=" min-h-screen py-24">
         <Card variant="bg-lime-400 w-fit py-8 px-4 mx-auto" {...employee}/>
      </main>
  
     
    </>
  );
}

export default Employee