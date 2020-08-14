import React, { useEffect } from 'react';
import NotesCollection from '../../components/NotesCollection'
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllNotes } from '../../redux/actions/notesActions';

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
      <NotesCollection notes={notes} />
    </div>
  )
}

export default NotesPage;