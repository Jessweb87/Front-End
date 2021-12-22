import React from "react";
import { Route, Redirect } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import styled from 'styled-components';

import Header from './components/Header';
import PlantsList from "./components/PlantsList";
import Login from "./components/Login";

import Logout from "./components/Logout"

const App =() => {
    return (
      <AppContainer>
        <Header />
          <RouteContainer>

            <Route exact path="/">
              <Login />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <PrivateRoute path="/plantslist" component={PlantsList}>
              <PlantsList />
            </PrivateRoute>

            <PrivateRoute path="/logout" component={Logout} />
          </RouteContainer>
      </AppContainer>

      // <div className="container">
      //   <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      //     <img src="" className="App-logo" alt="logo" />
      //    <nav className="my-2 my-md-0 mr-md-3">
      //        <a className="p-2 text-dark" href="#">Home</a>
      //        <a className="p-2 text-dark" href="#">About</a>
      //        <a className="p-2 text-dark" href="#">Plants</a>
      //        <a className="p-2 text-dark" href="#">Login</a>
      //        <a class="btn btn-outline-primary" href="#">Sign up</a>
      //   </nav>
      //   </header>
      //   <section>
      //       <PlantsList></PlantsList>
      //   </section>
      // </div>
    )
  }
  
export default App;

const AppContainer = styled.div`
  height: 100%;
`
const RouteContainer = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-direction: column;
`