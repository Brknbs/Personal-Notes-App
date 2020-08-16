import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { createNote, getNodeById, updateNoteById } from '../../redux/actions/notesActions';
import { toast } from 'react-toastify';

const EditNotePage = ({ history, match }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState({ title: false, content: false, description: false, category: false });

  const isFormInvalid = () => (!title || !content || !description || category);

  const updateErrorFlags = () => {
    const errObj = { title: false, content: false, description: false, category: false };
    if (!title.trim()) errObj.title = true;
    if (!content.trim()) errObj.content = true;
    if (!description.trim()) errObj.description = true;
    if (!category.trim()) errObj.category = true;
    setError(errObj);
  }

  const getNote = noteId => {
    dispatch(getNodeById(noteId, ({ title, content, description, category }) => {
      setTitle(title);
      setContent(content);
      setDescription(description);
      setCategory(category);
    }));
  };

  useEffect(() => {
    const { noteId } = match.params;
    if (noteId) {
      dispatch(getNodeById(noteId, ({ title, content, description, category }) => {
        setTitle(title);
        setContent(content);
        setDescription(description);
        setCategory(category);
      }));
    }
  }, [])

  const handleOnSubmit = event => {
    event.preventDefault();
    if (isFormInvalid()) updateErrorFlags();
    else {
      const data = { title, content, description, category };
      const { noteId } = match.params;
      if (noteId) {
        dispatch(updateNoteById(noteId, data, () => {
          toast.success('Note updated successfully!');
          history.replace('/notes');
        }, (message) => toast.error(`Error: ${message}`)));
      } else {
        dispatch(createNote(data, () => {
          toast.success('Note created successfully!');
          history.replace('/notes');
        }, (message) => toast.error(`Error: ${message}`)));
      }
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col">
          <h2>Edit Note</h2>
        </div>
      </div>
      <div className="row align-items-center mt-3">
        <div className="col-9">
          <form noValidate onSubmit={handleOnSubmit}>
            <div className="form-group">
              <label htmlFor="title"></label>
              <input noValidate 
                id="title"
                type="text"
                placeholder="Title"
                name="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className={`form-control ${error.title ? 'is-invalid' : ''}`}
              />
              <p className="invalid-feedback">Required</p>
            </div>
            <div className="form-group">
              <label htmlFor="content"></label>
              <input noValidate 
                id="content"
                type="text"
                placeholder="Content"
                name="content"
                value={content}
                onChange={e => setContent(e.target.value)}
                className={`form-control ${error.content ? 'is-invalid' : ''}`}
              />
              <p className="invalid-feedback">Required</p>
            </div>
            <div className="form-group">
              <label htmlFor="description"></label>
              <input noValidate 
                id="description"
                type="text"
                placeholder="Description"
                name="description"
                value={description}
                onChange={e => setDescription(e.target.value)}
                className={`form-control ${error.description ? 'is-invalid' : ''}`}
              />
              <p className="invalid-feedback">Required</p>
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select noValidate 
                id="category"
                name="category"
                className={`form-control ${error.category ? 'is-invalid' : ''}`}
                value={category}
                onChange={e => setCategory(e.target.value)}
              >
                <option value="">-- Select --</option>
                <option value="GENERAL">General</option>
                <option value="IDPROOF">ID Proof</option>
                <option value="PROFESSIONAL">Professional</option>
              </select>
              <p className="invalid-feedback">Required</p>
            </div>

            <div className="mt-5">
              <button type="submit" className="btn btn-primary mr-2 btn-lg">
                Save | <i className="fas fa-save"></i>
              </button>
              <button type="button" className="btn btn-secondary btn-lg" onClick={() => history.replace('/notes')}>
                Cancel | <i className="fas fa-times"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditNotePage;