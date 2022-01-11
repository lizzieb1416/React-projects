import React from "react";
import { Card } from "../card/card.component";
import './card-list.styles.css';

export const CardList = props => (
    <div className="card-list">
        {props.recipes.map(recipe => (
          <Card key={recipe.id} recipe={recipe} />
        ))}
    </div>
);