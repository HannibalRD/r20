import { useState } from "react";




function App() {

  let key = 0
  const [tareas, setTareas] = useState([])
  const [tarea, setTarea] = useState('')
  const [bg, setBg] = useState('')
  function borrar(index) {
    const updatedItems = [...tareas];
    updatedItems.splice(index,1);
 
    return setTareas(updatedItems);
  }
  console.log(tareas)
  function filtrar(indexTo) {
    const updatedItems = tareas.filter((tarea,index) => index !== indexTo);
  
    return setTareas(updatedItems);
  }
  return (
      <>
        <div className="grid grid-cols-2">
          <div className="grid grid-rows-3">

            <label className="m-8">Tarea
              <input className="ml-4 border border-black"
                onChange={e => setTarea(e.target.value)}
                type="text"
                name={tarea}
              />
            </label>
            <button className="border border-red-500 h-[30px]" onClick={() => {
              setTareas([
                ...tareas,
                { name: tarea,estilos:bg }
              ])
            }}>Enviar</button>
            <select className="h-[30px] border border-black" name="selectedFruit"             
            // value={bg} 
            onChange={e => setBg(e.target.value)}
            defaultValue={bg} >
              <option value='bg-indigo-500' className='bg-indigo-500'>Manzana</option>
              <option value='bg-pink-500' className='bg-pink-500' >Plátano</option>
              <option value='bg-orange-500' className='bg-orange-500'>Naranja</option>
            </select>
          </div>
          <div className="list-none w-[100%]">
            {
              tareas.map((tarea,index) => (<p className={`m-5 text-[20px] ${tarea.estilos}`} key={index}>{tarea.name}<button onClick={() => filtrar(index)}className={`border border-black ml-[134px] w-[40px]  ${tarea.estilos}`}>X</button></p>))
            }

          </div>
        </div>
      </>
    )

}

export default App;