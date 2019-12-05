import React from 'react';


export default function Display(props) {
    return (
        <div>
            <h2>Display</h2>
            <div>
                <p>Balls: {props.balls}</p>
                < p>Strikes: {props.strikes}</p>
            </div>
        </div>
    )
}

