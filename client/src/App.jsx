import { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const sendMessage = async () => {
    try {
      const res = await fetch('http://localhost:5001/api/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      alert(data.status);
    } catch (error) {
      alert('Error sending message: ' + error.message);
    }
  };

  return (
    <div style={{ padding: '2rem', color: 'white', backgroundColor: '#1e1e1e', minHeight: '100vh' }}>
      <h1>CI/CD Test App</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
        style={{ marginRight: '1rem', padding: '0.5rem' }}
      />
      <button onClick={sendMessage} style={{ padding: '0.5rem 1rem' }}>
        Send
      </button>
    </div>
  );
}

export default App;
