import React from 'react';
import { connect } from 'react-redux';
import * as remoteApi from '../../actions/remoteApi';
import PlayerHeader from './PlayerHeader';
import PlayerStats from './PlayerStats';
import PlayerGameLog from './PlayerGameLog';
import PlayerRanks from './PlayerRanks';
import PlayerFinder from '../finder/PlayerFinder';

export default class PlayerPage extends React.Component {
    selectedPlayerId = 'lalal';
    //selectedPlayer = {};

    constructor(props) {
        super(props);
        this.state = {
            isFlushed: false,
            isLoaded: false,
            allPlayers: [],
            selectedPlayer: undefined
        };
        this.selectedPlayerId = props.match.params.playerId;
    }

    async componentDidMount() {
        const allPlayers = await remoteApi.fetchAllPlayers();
        const tmpPlayer = await remoteApi.fetchPlayerInfo(this.selectedPlayerId);
        this.setState({
            isLoaded: true,
            allPlayers: allPlayers,
            selectedPlayer: tmpPlayer
        });
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.playerId !== this.props.match.params.playerId) {
            const updatedPlayerId = this.props.match.params.playerId;
            console.log('updated with', updatedPlayerId);
            const updatedPlayer = await remoteApi.fetchPlayerInfo(updatedPlayerId);
            this.setState({
                isLoaded: true,
                selectedPlayer: updatedPlayer
            });
            console.log('UPDATED PLAYER IS:', this.state.selectedPlayer.NAME);
        }
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
            console.log('re-render with', this.state.selectedPlayer.NAME);

            return (
                <div>
                    <div className="player-page">
                        <PlayerFinder />
                        <div>
                            <PlayerHeader selectedPlayer={this.state.selectedPlayer} />
                            <PlayerRanks selectedPlayer={this.state.selectedPlayer} />
                            <PlayerStats selectedPlayer={this.state.selectedPlayer} />
                            <PlayerGameLog selectedPlayer={this.state.selectedPlayer} />
                        </div>
                    </div>
                </div>
            );
        }
    }
}


// const mapStateToProps = (state) => {
//     return {
//         something: something
//     };
// };

// export default connect(mapStateToProps)(PlayerPage);

