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

      <div className='ui'>
        <h1>Kevin Kinner</h1>
        <p>WebDev who makes code go brr, until exceptions and beyond</p>
      </div>
    
    </>
  )
}

export default App
