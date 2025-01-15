import React from 'react';

const App = () => {
    return (
        <div style={{ textAlign: 'center', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
            <h1>Welcome to Archery App!</h1>
            <p>Track your progress, compete in tournaments, and level up your archery skills!</p>
            <button style={{ backgroundColor: '#0088cc', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer' }}>
                Давай приступим
            </button>
        </div>
    );
};

export default App;