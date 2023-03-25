import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Orders from "./Pages/Orders"

function MyRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/hamburguer-react-project" element={<Home />} />
                <Route path="/hamburguer-react-project/order" element={<Orders />} />
            </Routes>
        </Router>
    )
}

export default MyRoutes