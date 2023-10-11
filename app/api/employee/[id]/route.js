import { readFile } from "fs/promises"

async function GET (req, {params}) {
   const {id} =  params
   const filePath = `${process.cwd()}/app/data/employees.json`
   const fileContents = await readFile(filePath, 'utf-8')
   const courses = await JSON.parse(fileContents)
   const course =  courses.find(e => e.id == id)
   return Response.json(course)
}

export {GET}