import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteNoteById } from '../../redux/actions/notesActions';
import { toast } from 'react-toastify';

const NotesCollection = ({ notes }) => {
  const dispatch = useDispatch();

  const [selectedNote, setSelectedNote] = useState('');

  const showConfirmationModal = (event, noteId) => {
    event.preventDefault();
    setSelectedNote(noteId);
    window.$('#confirmationModal').modal('show');
  }

  const handleOnDelete = () => {
    dispatch(deleteNoteById(selectedNote, () => {
      window.$('#confirmationModal').modal('hide');
      toast.success('Note deleted successfully!');
    }, (message) => {
      window.$('#confirmationModal').modal('hide');
      toast.error(`Error: ${message}`);
    }))
  }

  return (
    <div>
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Content</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            notes.map(item => (
              <tr key={item._id}>
                <td>
                  <Link to={`/edit-note/${item._id}`}>
                    {item.title}
                  </Link>
                </td>
                <td>{item.content}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>
                  <a href="/" onClick={e => showConfirmationModal(e, item._id)}>
                    <i className="fas fa-trash-alt fa-2x text-danger"></i>
                  </a>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <Modal  handleOnDelete={handleOnDelete} />
    </div>
  )
}

export default NotesCollection;

const Modal = ({ handleOnDelete }) => (
  <div className="modal" id="confirmationModal" tabIndex="-1" role="dialog">
    <div role="document" className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Confirmation</h5>
        </div>
        <div className="modal-body">
          <p>Are you sure, you want to delete this note?</p>
        </div>
        <div className="modal-footer">
          <button type="button" data-dismiss="modal" className="btn btn-secondary">No</button>
          <button type="button" data-dismiss="modal" className="btn btn-primary" onClick={handleOnDelete}>Yes</button>
        </div>
      </div>
    </div>
  </div>
)
