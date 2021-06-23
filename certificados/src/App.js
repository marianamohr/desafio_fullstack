import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import CardDetails from './components/CardDetails';
import Footer from './components/Footer'

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     certificados: [],
  //   }
  //   this.saveData = this.saveData.bind(this);
  // }

  // componentDidMount() {
  //   this.saveData();
  // }

  // saveData() {
  //   this.setState({ certificados: certificados })
  // }

  // fetchCertificados() {
  //   fetch('http://localhost:5000/certificados')
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({
  //         certificados: data,

  //       })
  //     })
  // }

  render() {
    return (
      <BrowserRouter>
      <div className="App" >
        <Header />
        <Switch>
        <Route exact path="/" component={ Content } />
        <Route
              exact
              path="/certificado/:id"
              render={ (props) => (
                <CardDetails { ...props } />
              ) }
            />
        </Switch>
        <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
