import { EmployeeCard } from "../components/card/EmployeeCard"
async function getEmployees(){
     const res = await fetch(`${process.env.API_PATH}/employees`)
    const employees = res.json()
     return employees
 
}

 async function Employees ({children}) {
    const employees = await getEmployees()
      

     return (
        <>
          
        
          <header className="text-center pt-28">
            <h2 className="text-5xl text-slate-900">Employees Page Component </h2>
          </header>
          <main className=" min-h-screen py-24 grid grid-cols-6 gap-8">
           {
             employees.map(e=> <EmployeeCard key={e.id} {...e}/>)
           }
          </main>
      
         
        </>
      );
  
}

export default Employees