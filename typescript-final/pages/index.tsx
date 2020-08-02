import { Route, Switch } from "react-router-dom";
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Partners from '../components/pages/Partners';

function Status({ code, children }) {
    return (
        <Route
            render={({ staticContext }) => {
                if (staticContext) staticContext.status = code;
                return children;
            }}
        />
    );
}

function NotFound() {
    return (
        <>
            <Status code={404}>
                <h2>Not found</h2>;
            </Status>
        </>
    )
}

function App() {
    return(
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about/" component={About} />
                <Route path="/partners/" component={Partners} />
                <Route component={NotFound}/>
            </Switch>
        </div>
    );
}

export default App;
