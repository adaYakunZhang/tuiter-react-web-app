import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter, Link} from "react-router-dom";
import {Route, Routes} from "react-router";

function App() {
    return(
        <div>
            <BrowserRouter>
                <div className="container">
                    <Routes>
                        <Route path="/*" element={<Labs/>}/>
                        <Route path="/hello" element={<HelloWorld/>}/>
                        <Route path="/tuiter/*" element={<Tuiter/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
  );
}

export default App;
