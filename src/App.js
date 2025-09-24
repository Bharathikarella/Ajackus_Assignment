import { Routers } from './routes/Routers'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
<>
 <ToastContainer position="top-right" autoClose={3000} />
<Routers/>
</>
  )
}

export default App