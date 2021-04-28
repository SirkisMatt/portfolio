import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import LandingPage from '../../Routes/LandingPage/LandingPage'
import AboutPage from '../../Routes/AboutPage/AboutPage'
import ProjectsPage from '../../Routes/ProjectsPage/ProjectsPage'
import ContactPage from '../../Routes/ContactPage/ContactPage'
import NotFoundPage from '../../Routes/NotFoundPage/NotFoundPage'
import './App.css';

function App() {

  const renderMainRoutes = () => {
    return (
      <>
        <Switch>
          <Route 
          exact
          path={'/'}
          component={LandingPage}
          />
          <Route 
          path={'/about'}
          component={AboutPage}
          />
          <Route 
          path={'/projects'}
          component={ProjectsPage}
          />
          <Route 
          path={'/contact'}
          component={ContactPage}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </>
    )
  
  }

  return (
    <div className="App">
      <main>
        {renderMainRoutes()}
      </main>
      <header className="App-header"> 
        <Header />
      </header>
    </div>
  );
}

export default App;
