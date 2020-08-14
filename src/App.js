import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Slide } from 'react-toastify';

// Pages
import AuthPage from './pages/AuthPage';
import EditNotePage from './pages/EditNotePage';
import NotesPage from './pages/NotesPage';

// Components
import Header from './components/Header';
import Spinner from './components/Spinner';

import { logoutUser } from './redux/actions/authActions';

const App = () => {

  const mapState = ({ user, loading }) => ({
    isLoggedIn: user.isLoggedIn,
    isLoading: loading
  });

  const { isLoggedIn, isLoading } = useSelector(mapState);

  //useEffect(() => {}, [isLoggedIn]);

  return (
    <React.Fragment>
      {isLoading ? <Spinner /> : null}
      <Header />
      <div className="container my-5">
        <ToastContainer position="top-right" autoClose={2000} hideProgressBar transition={Slide} />
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
