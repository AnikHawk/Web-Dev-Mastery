import React from 'react';
import Card from './Card';

function CardList({ robots }) {
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