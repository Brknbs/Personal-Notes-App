import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthPage from './pages/AuthPage';
import EditNotePage from './pages/EditNotePage';
import NotesPage from './pages/NotesPage';
import Header from './components/Header';

const App = () => {

  const mapState = ({ user }) => ({
    isLoggedIn: user.isLoggedIn
  });

  const { isLoggedIn } = useSelector(mapState);

  //useEffect(() => {}, [isLoggedIn]);

  return (
    <React.Fragment>
      <Header />
      <div className="container my-5">
        {isLoggedIn ? (
          <Switch>
            <Route path="/notes" component={NotesPage} />
            <Route exact path="/edit-note" component={EditNotePage} />
            <Route path="/edit-note/:noteId" component={EditNotePage} />
            <Redirect to="/notes" />
          </Switch>) : 
          (<Switch>
             <Route path="/auth" component={AuthPage} />
             <Redirect to="/auth" />
          </Switch>)}
      </div>
    </React.Fragment>
  );
}

export default App;
