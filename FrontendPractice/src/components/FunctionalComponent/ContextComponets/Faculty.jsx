import CoE from "./CoE";
const Faculty=(res)=>{
const Faculty = () =>{
    return(
        <div>
            <h4>Paper correction is in Process</h4>
            <CoE sgpa={res.sgpa} cgpa={res.cgpa}></CoE>
            <h3>Paper correction is process</h3>
            <CoE/>
        </div>
    )
}