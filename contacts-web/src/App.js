import Layout from "./components/Layout/Layout";
import {Switch, Route} from "react-router-dom";
import AddContact from "./containers/AddContact/AddContact";
import Home from "./containers/Home/Home";
import EditContact from "./containers/EditContact/EditContact";
import './App.css';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/add-contact" component={AddContact}/>
        <Route path="/contact/:id" exact component={EditContact}/>
      </Switch>
    </Layout>
  );
}

export default App;
