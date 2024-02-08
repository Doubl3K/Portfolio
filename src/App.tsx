import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import Header from "./Meta/header";


function App() {

  return (
    <>

      <div className="meta">
        <Header />
        <CssBaseline />
      </div>

      <div className="ui bg-dark">
        <h1>Kevin Kinner</h1>
        <p className='underline font-bold bg-red-700'>WebDev who makes code go brr, until exceptions and beyond</p>
        <button>test</button>
      </div>
    
    </>
  )
}

export default App
