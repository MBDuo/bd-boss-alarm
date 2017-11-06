import React from 'react';
import { Boss } from '../';
import './BossList.css';

export default ({ bossArray }) => {
    const bossList = bossArray.map(boss => (
        <Boss key={boss.id} boss={boss} />
    ));

    return (
        <ul>
            {bossList}
        </ul>
    );
};