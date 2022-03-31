import BMICalculator from "./bmiCalculator/bmiCalculator";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Layout from "./layout/layout";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<BMICalculator/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
