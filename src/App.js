import React, { Component , Fragment} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Toolbar from "./components/Toolbar/Toolbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Defualt from "./components/Defualt";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from "./components/BackDrop/BackDrop";

class App extends Component {
    state = {
      sideDrawerOpen: false,
      products: [],
      details_id :0
    };

  componentDidMount(category){
    fetch("./data.json")
        .then(res => res.json())
        .then(data => this.setState({ products: data.products.filter(product => product.category === category) }));
  }

  handleCategory =(category)=>{
    this.componentDidMount(category);
    this.setState({ sideDrawerOpen: false });

  }


  handleDetail = (id)=> {
    this.setState({details_id : id})
  }
  
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <BackDrop click={this.backdropClickHandler} />;
    }
    return (
      <Router>
      <Fragment>
        <div style={{ height: `100%` }}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} onCategory={this.handleCategory}/>
          <SideDrawer show={this.state.sideDrawerOpen} onCategory={this.handleCategory}/>
          {backdrop}
          <Switch>
            <Route exact path="/" render={ props => <ProductList {...props} products={this.state.products} onDetail={this.handleDetail}/>}/>
            <Route path="/details" render={ props => <Details {...props} id ={this.state.details_id} products={this.state.products}/>} />
            <Route component={Defualt} />
          </Switch>
        </div>
      </Fragment>
      </Router>
    );
  }
}
export default App;
