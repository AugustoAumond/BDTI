import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import App from './App';
import Tasks from "./components/tasks/Tasks";

function MainRoutes (){
    return (
    <Router>
        <Routes>
            <Route path="/" element={<App />}>
            </Route>
        </Routes>
    </Router>
    )
}
export default MainRoutes;