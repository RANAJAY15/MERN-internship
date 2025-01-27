const ExamResults=(res)=>{}
    import { useContext } from "react";
    import { ThemeProvider } from "../Hooks/Student";
    const ExamResults = () =>{
        const res = useContext(ThemeProvider)
        return(
            <div>
                <h2>Results Published and your SGPA {res.sgpa} , CGPA {res.cgpa}</h2>
                {console.log(res)}
                <h3>Result published and Your SGPA is {res.sgpa} , CGPA is {res.cgpa}</h3>
            </div>
        )
    }
