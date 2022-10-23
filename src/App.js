import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import Nav from "./nav";
import {BrowserRouter, Link} from "react-router-dom";
import {Route, Routes} from "react-router";

function App() {
    return(
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route index element={<Labs/>}/>
                    <Route path="/hello" element={<HelloWorld/>}/>
                    <Route path="/tuiter/*" element={<Tuiter/>}/>
                </Routes>
            </div>
        </BrowserRouter>
/*        <BrowserRouter>
            <div className="container">
                <h1>Welcome to WebDev</h1>
                <Nav/>
                <Routes>
                    <Route index element={<Labs/>}/>
                    <Route path="/hello" element={<h1>Hello</h1>}/>
                    <Route path="/labs" element={<Labs/>}/>
                    <Route path="/tuiter" element={<Tuiter/>}/>
                </Routes>
            </div>
        </BrowserRouter>*/
  );
}

export default App;
