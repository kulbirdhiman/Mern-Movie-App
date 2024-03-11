import {Outlet} from 'react-router-dom';
import {ToastContainer} from 'react-toastify'
import Navigation from './pages/auth/Navigation';
function App() {
console.log("this is working")
  return (
    <>
    <ToastContainer />
    <Navigation />
    <main className='p-3'> 
     <Outlet />
    </main>
    </>
  )
}

export default App
