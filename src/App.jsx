import React, { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [notes, setNotes] = useState([])

  function submit(e) {
    e.preventDefault()

    const newNote = {
      title: title,
      details: details
    }
    setNotes([...notes, newNote])
    setTitle("")
    setDetails("")
  }
  function deleteNote(index) {
    setNotes(notes.filter((_, i) => i !== index));
  }
  return (
    <div className="container">
      <form className="form" onSubmit={submit}>
        <h1>Add Notes</h1>

        <input
          className="title"
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="details"
          placeholder="Write Details here"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button className="submit" type='submit'>Add Note</button>
      </form>

      <div className="notes">
        <h1>Recent Notes</h1>

        <div className="notes-grid">
          {notes.map((note, index) => (
            <div className="note-wrapper" key={index}>
              <div className="note-card">
                <h2>{note.title}</h2>
                <p>{note.details}</p>
              </div>

              <button
                className="delete"
                onClick={() => deleteNote(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
