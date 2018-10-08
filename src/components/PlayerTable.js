import React, {Component} from 'react';
import Player from "./Player";
import Pagination from "./Pagination";

import {getMockPlayers} from "./MockDataService";

import './PlayerTable.css';

class PlayerTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [
                {id: "1", name: "gamer", teamName: "gamerTeam", rating: 5, notes: ["Sucks", "Penis"]}
            ]
        }
    }

    async componentDidMount() {
        let {players} = {...this.state};
        players = await getMockPlayers();
        this.setState({players});
    }

    onChange = (id, key, value) => {
        const {players} = this.state;
        const newPlayers = players.map(player => {
            if(player.id === id) {
                player[key] = value;
            }
            return player;
        });
        this.setState({players: newPlayers});
    }

    render() {
        const {
            players
        } = this.state;
        const playerComps = players.map(({id, name, teamName, rating, notes}) => <Player key={id}
                                                                                     name={name}
                                                                                     teamName={teamName}
                                                                                     rating={rating}
                                                                                     notes={notes}
                                                                                     onChange={(key, value) => this.onChange(id, key, value)}/>);
        return (
            <div className="player-table">
                <Pagination items={playerComps} itemsPerPage={10}>

                </Pagination>
            </div>
        );
    }
}

export default PlayerTable;