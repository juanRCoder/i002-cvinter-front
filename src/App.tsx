import { Outlet } from "react-router-dom"
import ScrollToTop from "./application/dashboard/components/ScrollTop";

function App() {
  return <>
    <ScrollToTop />
    <Outlet />
  </>
}

export default App;
