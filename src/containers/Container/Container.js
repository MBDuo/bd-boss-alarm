import React, { Component } from 'react';
import { BossList } from '../../components';
import { database } from '../../js/firebase';

export default class Container extends Component {
    constructor(props) {
        super();
        this.state = {
            bossArray: []
        };
    }

    componentDidMount() {
        const bossArray = [];
        database.ref('Bosses').orderByChild('Order').on('value', snapshot => {
            bossArray.length = 0;
            snapshot.forEach((childSnapshot, i) => {
                const bossObj = {
                    id: childSnapshot.val().Name.en,
                    name: childSnapshot.val().Name.ko,
                    startTime: childSnapshot.val().TimeTable.StartTime,
                    endTime: childSnapshot.val().TimeTable.EndTime
                };
                bossArray.push(bossObj);
            });
            this.setState({
                bossArray
            });
        });
    }

    render() {
        const { bossArray } = this.state;
        return (
            <BossList bossArray={bossArray} />
        );
    }
}