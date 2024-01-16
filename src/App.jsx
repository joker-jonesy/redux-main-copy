import "./App.css";
import {Routes, Route} from "react-router-dom";
import Characters from "./feature/Characters.jsx";
import Character from "./feature/Character.jsx";

function App() {
    return (
        <div>
            <div className="App">
                <Routes>
                    <Route index element={<Characters/>}/>
                    <Route path={"/character/:id"} element={<Character/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
