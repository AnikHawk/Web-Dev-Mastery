import React from 'react';
import Card from './Card';

function CardList({ robots }) {
    if (false) {
        throw new Error('Ah Shit! Here we go again!');
    }
    return robots.map((element, i) => {
        return ( <
            Card key = { element.id }
            id = { element.id }
            name = { element.name }
            email = { element.email }
            />
        );
    });
}

export default CardList;