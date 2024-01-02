import Card from "./components/card"
import {tasks} from "./data/domy-data"

function App() {


  return (
    <>
      <div className="content">
        <div className="main">
          <h1>Welcom</h1>
          {tasks.map((task)=>(
            <Card task={task} />
          ))}
            
            
         
        </div>
      </div>
    </>
  )
}

export default App
