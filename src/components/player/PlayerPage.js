import React from 'react';
import * as remoteApi from '../../actions/remoteApi';
import PlayerHeader from './PlayerHeader';
import PlayerStats from './PlayerStats';
import PlayerGameLog from './PlayerGameLog';

export default class PlayerPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            allPlayers: [],
            thisPlayer: undefined
        };
    }

    async componentDidMount() {
        const allPlayers = await remoteApi.fetchAllPlayers();
        const thisPlayer = await remoteApi.fetchPlayerInfo(remoteApi.dummyPlayerId);
        this.setState({
            isLoaded: true,
            allPlayers: allPlayers,
            thisPlayer: thisPlayer
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
                    <PlayerHeader />
                    <PlayerStats/>
                    <PlayerGameLog/>
                </div>
            );
        }
    }
}

