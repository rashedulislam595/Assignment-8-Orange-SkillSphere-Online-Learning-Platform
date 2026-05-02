
export const GetAllCourses =async()=>{
    const res = await fetch('https://skillsphere-courses-server.onrender.com/courses')
    const data = await res.json()
    return data
}