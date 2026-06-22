import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  // 1. READ: Fetch tasks from the backend
  const fetchTasks = () => {
    axios.get('http://localhost:5001/tasks')
        .then(res => setTasks(res.data))
        .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // 2. CREATE: Add a new task
  const addTask = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    axios.post('http://localhost:5001/add', { text })
        .then(res => {
          setTasks([...tasks, res.data]); // Appends the new task dynamically to the UI [cite: 23]
          setText('');
        })
        .catch(err => console.error(err));
  };

  // 3. START EDITING: Turn on inline editing input [cite: 21, 48]
  const startEdit = (task) => {
    setEditingId(task._id);
    setEditText(task.text);
  };

  // 4. UPDATE: Save the edited task text [cite: 17, 21, 51]
  const updateTask = (id) => {
    if (!editText.trim()) return;

    axios.put(`http://localhost:5001/update/${id}`, { text: editText }) // [cite: 68]
        .then(res => {
          setTasks(tasks.map(t => (t._id === id ? res.data : t))); // Updates the specific task in the state array [cite: 71]
          setEditingId(null);
          setEditText('');
        })
        .catch(err => console.error(err));
  };

  // 5. DELETE: Remove the task completely [cite: 18, 22, 58]
  const deleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      axios.delete(`http://localhost:5001/delete/${id}`) // [cite: 73]
          .then(() => {
            setTasks(tasks.filter(t => t._id !== id)); // Drops the deleted task out of the state array [cite: 74]
          })
          .catch(err => console.error(err));
    }
  };

  return (
      <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
        <h2>MERN Stack To-Do List (CRUD)</h2>

        {/* Input Form */}
        <form onSubmit={addTask} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter a new task..."
              style={{ flex: 1, padding: '10px', fontSize: '16px' }}
          />
          <button type="submit" style={{ padding: '10px 20px', background: '#27ae60', color: 'white', border: 'none', cursor: 'pointer' }}>Add Task</button>
        </form>

        {/* Task Rendering List */}
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {tasks.map(task => (
              <li key={task._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', borderBottom: '1px solid #ddd', background: '#fff' }}>
                {editingId === task._id ? (
                    // Editing Sub-UI Mode [cite: 48]
                    <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
                      <input
                          type="text"
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                          style={{ flex: 1, padding: '6px' }}
                      />
                      <button onClick={() => updateTask(task._id)} style={{ background: '#2980b9', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Save</button>
                      <button onClick={() => setEditingId(null)} style={{ background: '#7f8c8d', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Cancel</button>
                    </div>
                ) : (
                    // Standard View Sub-UI Mode [cite: 54]
                    <>
                      <span style={{ fontSize: '16px' }}>{task.text}</span>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <button onClick={() => startEdit(task)} style={{ background: '#f39c12', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Edit</button>
                        <button onClick={() => deleteTask(task._id)} style={{ background: '#e74c3c', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Delete</button>
                      </div>
                    </>
                )}
              </li>
          ))}
        </ul>
      </div>
  );
}

export default App;