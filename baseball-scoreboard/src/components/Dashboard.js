import React, { useState } from 'react';


const Dashboard = (props) => {


    return (
        <div>
            <h1>Insert Baseball Terminology Here</h1>
            <button onClick={props.addBall}>Ball</button>
            <button onClick={props.addStrike}>Strike</button>
            <button onClick={props.addFoul}>Foul</button>
            <button onClick={props.addHit}>Hit</button>
        </div>
    )

}
export default Dashboard;