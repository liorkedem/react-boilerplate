import React from 'react';
import * as remoteApi from '../../actions/remoteApi';
import * as utils from '../../actions/utils';
import PlayerFinderItem from './PlayerFinderItem';

export default class PlayerFinderList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            allPlayers: props.players,
            selectedPlayer: undefined
        };
    }

    componentDidMount() {
        this.setState({
            isLoaded: true
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.players !== this.props.players) {
            const allPlayers = this.props.players;
            this.setState({
                isLoaded: true,
                allPlayers: allPlayers,
                selectedPlayer: undefined
            });
        }
    }

    render() {
        if (!this.state.isLoaded) {
            return (
                <div>
                    Loading PlayerFinderList...
                </div>
            );
        }
        else {
            const allPlayers = this.state.allPlayers;
            return (
                <div className="player-finder-list">
                    {
                        allPlayers.length === 0 ? (
                            <div>
                                <span>No players</span>
                            </div>
                        ) : (
                                allPlayers.map((player) => {
                                    return <PlayerFinderItem
                                        key={player.ID}
                                        selectedPlayer={player} />;
                                })
                            )
                    }
                </div>
            );
        }
    }
}