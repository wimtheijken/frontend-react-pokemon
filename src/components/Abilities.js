import React from 'react';

function Abilities({ abilities }) {
    return (
        <ul>
            {abilities.map((item) => {
                return <li className="abilities" key={item.ability.name}>{item.ability.name}</li>
            })}
        </ul>
    );
}
export default Abilities;