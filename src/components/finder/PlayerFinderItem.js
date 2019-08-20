import React from 'react';
import * as remoteApi from '../../actions/remoteApi';
import * as utils from '../../actions/utils';

export default class PlayerFinderItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            selectedPlayer: props.selectedPlayer
        };
    }

    async componentDidMount() {
        const selectedPlayer = this.state.selectedPlayer; //await remoteApi.fetchPlayerInfo(remoteApi.dummyPlayerId);
        this.setState({
            isLoaded: true,
            selectedPlayer: selectedPlayer
        });
    }

    onClick = () => {
        console.log(this.state.selectedPlayer.ID);
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
            const selectedPlayer = this.state.selectedPlayer;

            return (
                <div
                    className="player-finder-item"
                    onClick={this.onClick}>
                    <div className="player-finder-item__data-container">
                        <div className="player-finder-item__team">{selectedPlayer.TEAM}</div>
                        <div className="player-finder-item__name">{selectedPlayer.NAME}</div>
                        <div className="player-finder-item__position">{selectedPlayer.POSITION}</div>
                    </div>
                </div>
            );
        }
    }
}