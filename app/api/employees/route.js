import { readFile } from "fs/promises"

async function GET (req) {
   const filePath = `${process.cwd()}/app/data/employees.json`
   const fileContents = await readFile(filePath, 'utf-8')
   const courses = await JSON.parse(fileContents)
   return Response.json(courses)
}

export {GET}