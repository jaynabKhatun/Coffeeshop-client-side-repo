import { useLoaderData } from "react-router-dom"
import Coffee from "./Coffee";
import { useState } from "react";




function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)
  console.log(coffees);


  return (
    <div className="m-20">

      <h1 className="text-2xl text-purple-800">Coffee Project:{coffees.length}</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {
          coffees.map(coffee =>
            <Coffee key={coffee._id}

              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}


            ></Coffee>)
        }
      </div >

    </div>
  )
}

export default App
