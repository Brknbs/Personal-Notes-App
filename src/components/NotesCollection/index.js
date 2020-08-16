import React from 'react'
import { Link } from 'react-router-dom';

const NotesCollection = ({ notes }) => {
  return (
    <div>
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Content</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
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
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default NotesCollection;
