import Faculty from "./Faculty";
const Invigilator = (res) => {
  return (
    <div>
      <h3>Invigilation in Process</h3>
      <Faculty sgpa={res.sgpa} cgpa={res.cgpa}/>
    </div>
  );
};
const Invigilator = () =>{
    return(
        <div>
            <h3>Invigilator is Done</h3>
            <Faculty/>
        </div>
    )
}