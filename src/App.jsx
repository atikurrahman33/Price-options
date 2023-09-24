import './App.css'

import Navbar from './componants/Navbar/Navbar'
import LineChart from './componants/lineChart/LineChart'
import PriceOptions from './componants/priceOptions/PriceOptions'





function App() {
  
  return (
    <>
      
     <div>
     

     <Navbar></Navbar>
     
     <h1 className='text-7xl bg-red-600'>Vite + React</h1>
     <PriceOptions></PriceOptions>
     <LineChart></LineChart>
     
     </div>
         
    </>
  )
}

export default App
