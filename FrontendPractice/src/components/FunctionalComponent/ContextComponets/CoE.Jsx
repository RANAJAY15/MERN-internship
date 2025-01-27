import ExamResults from "./ExamResults";    
const CoE = (res) => {
  return (
    <div>
        <h4>Paper correction is done.</h4>
      <h5>Mark updating in Process</h5>
      <ExamResults sgpa={res.sgpa} cgpa={res.cgpa}></ExamResults>

    </div>

  );
};
import ExamResults from "./ExamResults";
const COE = () =>{
    return(
        <div>
            <h3>paper correction is Done</h3>
            <h3>Mark published</h3>
            <ExamResults />
        </div>
    )
}
export default CoE;