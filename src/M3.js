import { useState } from "react";

export default function M3(){
    const [employees,setEmployees] = useState([]);
    const [fname,setFname] = useState("");
    const[lname,setLname] = useState("")
    const [jobtitle,setTitle] = useState("");
    const [jobDesc,setJobdesc] = useState("");
    const[jobRole,setJobrole] = useState("");
    const[EditId,setEditId]=useState(null);
    function handleSubmit(e){
        e.preventDefault()
        if(EditId){
         const updateemp = employees.map((emp)=>emp.id === EditId ? {...emp,fname,lname,jobtitle,jobDesc,jobRole} : emp)

          setEmployees(updateemp)
          setEditId(null)
        }else{
          const newemp = {
            id:Date.now(),
            fname,lname,jobtitle,jobDesc,jobRole
           
          }
          const newemp1 = [...employees,newemp]
          setEmployees(newemp1)
        }
        setFname("")
        setLname("")
        setTitle("")
        setJobdesc("")
        setJobrole("")

    }
    function handleEdit(emp){
        setEditId(emp.id)
        setFname(emp.fname)
        setLname(emp.lname)
        setTitle(emp.jobtitle)
        setJobdesc(emp.jobDesc)
        setJobrole(emp.jobRole)
    }
    function handleDelete(id){
        const updemp = employees.filter(emp=>id!==emp.id)
        setEmployees(updemp)
    }
    return(
        <>
        <h1>employee form</h1>
        <form onSubmit={handleSubmit}>
            FIRST NAME: <input type="text"
                    value={fname}
                    required
                    onChange={(e)=>{setFname(e.target.value)}}/>
                    
            LAST NAME: <input type="text"
                    value={lname}
                    required
                    onChange={(e)=>{setLname(e.target.value)}}/>
                    <br/>
             JOB TITLE: <input type="text"
                    value={jobtitle}
                    required
                    onChange={(e)=>{setTitle(e.target.value)}}/>
                    
             JOB DESC: <input type="text"
                    value={jobDesc}
                    required
                    onChange={(e)=>{setJobdesc(e.target.value)}}/>
                    <br/>
            JOB ROLE: <input type="text"
                    value={jobRole}
                    required
                    onChange={(e)=>{setJobrole(e.target.value)}}/>
                    <br/>

            <button type="submit">{EditId ? "update":"add"}</button>
        </form>
        <br/>
        <table border="1">
            <thead>
                <tr>
                    <th>
                     FIRST NAME   

                    </th>
                    <th>
                     LAST NAME   

                    </th>
                    <th>
                     JOB TITLE    

                    </th>
                    <th>
                        JOB DESCRIPTION
                    </th>
                    <th>
                     JOB ROLE   

                    </th>
                    <th>ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((emp)=>(
                        <tr key={emp.id}>
                            <td>{emp.fname}</td>
                            <td>{emp.lname}</td>
                            <td>{emp.jobtitle}</td>
                            <td>{emp.jobDesc}</td>
                            <td>{emp.jobRole}</td>
                             <td><button onClick={()=>{handleEdit(emp)}}>edit</button>
                                 <button onClick={()=>{handleDelete(emp.id)}}>delete</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    
    </>)
}