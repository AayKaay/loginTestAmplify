import React, {useState} from "react";
import "./App.css";



function List() {
  const [listArr,setlistArr] = useState([
    {
      task:"Complete the Assignment",
      key:1,
      done:false
    },
    {
      task:"Complete the this Project",
      key:2,
      done:false
    },
    {
      task:"Learn react",
      key:3,
      done:false
    },
  ])
  const doneTask = (index,e) => {
    const listt = [...listArr];
    listt[index].done = true;
    setlistArr(listt);
    e.target.disabled = true;
    console.log(e)
  };

  return (
    <div className="todo-list" >      
      
        {listArr.map((lis,index)=> (
          <div className="todo"  style={{ textDecoration: lis.done ? "line-through" : "" }}>
            {lis.task}
            <div>
              <button onClick={(e) => doneTask(index,e)}  onMouseEnter={(e) =>{
                e.target.style.color="red";
              }} 
              onMouseLeave ={(e) =>{
                e.target.style.color="Black";
              }}  >
                Complete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
// function List() {  
  
//   return (
//     <div className="list">
//         <div>
//           {ListArray.map(lis => (
//             <div className="listItem" >
//               <span className="listKey"> {lis.key}.</span>  {lis.task}       
//               <button className="doneButton">
//                 Done
//               </button>
            
//             </div>
//           ))}
//   </div>    
//     </div>
//   );
// }

export default List;