import { Switch, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import Search from "./components/Search/Search";

function App() {
    return (
        <Switch>
            <Route path="/search" component={Search} />
            <Route path="/" component={LandingPage} />
        </Switch>
    );
}

export default App;
