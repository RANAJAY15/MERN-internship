import { usememo } from "react";

var slowFunction = () => {
    for (var slow = 0; slow < 1000000000; slow++) {

    }
}
const UseMemo = () => {
    var [num, setNum] = useState(0);
    var dark =false
    var styling = {
        backgroundcolor: dark ? "black" : "white", color: dark ? "white" : "black"
    }
    return (
        <div>
            <h2>This is Memo hook</h2>
            <input type="number" value={num} onChange={(e) => setNum(e.target.value)}></input>
            <button>toggle</button><button onClick={() => setNum(0)} >reset</button>
            <h2 style={styling}>The num is {num}</h2>
        </div>
    )
}
export default UseMemo;