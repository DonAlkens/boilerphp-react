import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';

import './styles.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;