import { Outlet } from "react-router-dom";
import Footer from "./application/dashboard/components/Footer";
import NavBar from "./application/pages/NavBar";

function App() {
  return <>
  <NavBar/>
  <Outlet />
  <Footer />
</>
}

export default App;
