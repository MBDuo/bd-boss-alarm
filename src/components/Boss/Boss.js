import React from 'react';
import './Boss.css';

export default ({ boss }) => {
    const liClasses = [boss.id, 'name'];
    return (
        <li className={'wrapper-' + boss.id}>
            <span>
                <span className={"name"}>{boss.name}</span>
                <span>{boss.startTime}</span>
                <span> ~ </span>
                <span>{boss.endTime}</span>
            </span>
        </li>
    );
};