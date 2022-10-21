import React from 'react';

const ItemMapper = ({items=[], itemComponent:ItemComponent, itemName}) => {
    return ( 
        <ul>
            {items.map(item => <li><ItemComponent {...{[itemName]: item}}/></li>)}

                {/* return <p key={item.id}>{item.snippet.title}</p>; */}

          </ul>
     );
}
 
export default ItemMapper;