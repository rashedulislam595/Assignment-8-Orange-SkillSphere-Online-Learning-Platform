
export const GetAllCourses =async()=>{
    const res = await fetch('http://localhost:3000/courses-data.json')
    const data = await res.json()
    return data
}