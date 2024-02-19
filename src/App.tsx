import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import { Drawer } from './Components/Drawer/Dawer';
import Header from "./Meta/header";


function App() {

  return (
    <>
        <CssBaseline />
        <Header />
      <div className="ui">
        <Drawer />
      </div>
    
    </>
  )
}

export default App
