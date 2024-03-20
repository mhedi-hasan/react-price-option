import './App.css'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
function App() {

  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-4xl text-blue-600 text-center items-center py-5 border-2 border-red-700 font-extrabold bg-gray-400'>Vite + React</h1>
      <h3 className='text-2xl mx-auto w-2/5 font-bold justify-center flex  bg-slate-400 rounded-xl items-center text-center border-red-500 border-2 mt-4'>My name is Mehedi Hasan</h3>
    </>
  )
}

export default App
