import React from 'react';

const ItemMapper = ({items=[], itemComponent:ItemComponent, itemName}) => {
    return ( 
        <ul>
            {items.map(item => <li><ItemComponent {...{[itemName]: item}}/></li>)}
        </ul>
     );
}
 
export default ItemMapper;