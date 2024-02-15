import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import Header from "./Meta/header";


function App() {

  return (
    <>
        <Header />
        <CssBaseline />
      

      <div className="ui">
        <h1>Kevin Kinner</h1>
        <p className='underline font-bold bg-red-700'>WebDev who makes code go brr, until exceptions and beyond</p>
        <Button variant="contained">Contained</Button>
      </div>
    
    </>
  )
}

export default App
