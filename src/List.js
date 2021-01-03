import React, {useState,useEffect} from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { listTodos } from './graphql/queries'
import "./App.css";

function List() {
  const [listArr,setlistArr] = useState([
    {
      task:1
    },
    {
      task:2
    }
  ])
  const getDataFunction = async () => {
    var datArr =  await API.graphql(graphqlOperation(listTodos))   
    setlistArr(datArr.data.listTodos.items)   
    console.log(typeof(datArr.data.listTodos.items))   
    console.log((datArr.data.listTodos.items[0]))   
  }
  useEffect( () => {    
    getDataFunction()    
  },[])
  
  
  
const doneTask = (index,e) => {
  const listt = [...listArr];
  listt[index].done = true;
  setlistArr(listt);
  e.target.disabled = true;
  console.log(e)
};


  return (
    <div className="todo-list" >      
      <button onClick= {() => {
        API.graphql(graphqlOperation(listTodos))
        .then((res) => {
          console.log(res.data.listTodos.items)
        })
      }}>
        CLick to log data grom graphql
      </button>
      <button onClick= { () => {} }>
        CLick to add data
      </button>
        {listArr.map((lis,index)=> (
          <div className="todo"  style={{ textDecoration: lis.done ? "line-through" : "" }}>
            {lis.task}
            <div>
              <button onMouseEnter={(e) =>{
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