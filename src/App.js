import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import EditNotePage from './pages/EditNotePage';
import NotesPage from './pages/NotesPage';
import Header from './components/Header';

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="container my-5">
        <Switch>
          <Route path="/auth" component={AuthPage} />
          <Route path="/notes" component={NotesPage} />
          <Route exact path="/edit-note" component={EditNotePage} />
          <Route path="/edit-note/:noteId" component={EditNotePage} />
          <Redirect to="/auth" />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
