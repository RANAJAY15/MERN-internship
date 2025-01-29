import Update_Number from "./Update_Number"
import Update_Text from "./Update_Text"


const Memo = () => {
    var [num,setNum] =useState(0)
    var [num1,setNum1]=useState(0)
    return (
        <div>
            <h2>This is memo</h2>
            <Update_Number value={num}/>
            <NavBar/>
            <h2>this is React.memo</h2>
            <UpdateText val={num}/>
            <button onClick={()=>setNum(num+1)}>+</button>

            <Update_Number value={num}/>
            <button onClick={()=>setNum(num+2)}>+</button>
            <Update_Text />
            <UpdateNum val={num1}/>
            <button onClick={()=>setNum1(num1+1)}>+</button>
        </div>
    )
}