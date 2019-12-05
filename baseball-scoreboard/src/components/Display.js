import React from 'react';
import Dashboard from "./Dashboard";

export default function Display({ balls, strikes, hits, fouls }) {
    return (
        <div>
            <Dashboard />
            <button onClick={strikes}></button>
            <button onClick={balls}></button>
            <button onClick={hits}></button>
            <button onClick={fouls}></button>
        </div>
    )
}