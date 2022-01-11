import React from "react";
import './card.styles.css'

export const Card = props => (
    <div className="card-container">
        <h2>{ props.recipe.name }</h2>
    </div>
)