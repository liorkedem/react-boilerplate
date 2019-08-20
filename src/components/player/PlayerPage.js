import React from 'react';
import * as remoteApi from '../../actions/remoteApi';
import PlayerHeader from './PlayerHeader';
import PlayerStats from './PlayerStats';
import PlayerGameLog from './PlayerGameLog';
import PlayerRanks from './PlayerRanks';
import PlayerFinder from '../finder/PlayerFinder';

export default class PlayerPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            allPlayers: [],
            selectedPlayer: undefined
        };
    }

    async componentDidMount() {
        const allPlayers = await remoteApi.fetchAllPlayers();
        const selectedPlayer = await remoteApi.fetchPlayerInfo(remoteApi.dummyPlayerId);
        this.setState({
            isLoaded: true,
            allPlayers: allPlayers,
            selectedPlayer: selectedPlayer
        });
    }

    render() {
        if (!this.state.isLoaded) {
            return (
                <div>
                    Loading...
                </div>
            );
        }
        else {
            return (
                <div>
                    <div className="player-page">
                        <PlayerFinder />
                        <div>
                            <PlayerHeader />
                            <PlayerRanks />
                            <PlayerStats />
                            <PlayerGameLog />
                        </div>
                    </div>
                </div>
            );
        }
    }
}

