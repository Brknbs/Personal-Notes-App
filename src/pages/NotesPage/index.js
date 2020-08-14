import React, { useEffect } from 'react';
import NotesCollection from '../../components/NotesCollection'
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllNotes } from '../../redux/actions/notesActions';
import { Link } from 'react-router-dom';

const NotesPage = () => {
  const dispatch = useDispatch();

  const mapState = ({ notes, loading }) => ({
    isLoading: loading,
    notes: notes
  });

  const { isLoading, notes } = useSelector(mapState);

  useEffect(() => {
    dispatch(fetchAllNotes());
  }, [notes]);

  return (
    <div>
      <div className="row my-5">
        <div className="col-10">
          <h2>Personal Notes</h2>
        </div>
        <div className="col-2">
          <Link to="/edit-note" className="btn btn-primary">
            Create Note | <i className="fas fa-plus"></i>
          </Link>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-12">
          {
            notes.length > 0 ? <NotesCollection notes={notes} /> :
            <div className="text-center mt-5">
              <h2><i className="fas fa-folder-open fa-3x"></i></h2>
              <h1 className="text-center">You don't have any notes</h1>
            </div>
          }
        </div>
      </div>
      
    </div>
  )
}

export default NotesPage;