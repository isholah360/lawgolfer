

import { Outlet } from 'react-router-dom'
import './App.css'
import Navi from './component/navigate/navigate'
import Lognav from './component/loginnv/lognav'



function App() {

  return (
    <>
    <Lognav/>
    <Navi/>
    <Outlet/>
    </>
  )
}

export default App
