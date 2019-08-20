import React from 'react';
import * as remoteApi from '../../actions/remoteApi';

export default class PlayerRanks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            selectedPlayer: undefined
        };
    }

    async componentDidMount() {
        const selectedPlayer = await remoteApi.fetchPlayerRanks(remoteApi.dummyPlayerId);
        this.setState({
            isLoaded: true,
            selectedPlayer: selectedPlayer
        });
    }



    render() {
        const stats = this.state.selectedPlayer;

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
                    <div className="strip">
                        <h3>FANTASY RANKS</h3>
                    </div>
                    <div className="content-container">
                        <div className="player-stats">
                            <table>
                                <thead>
                                    <tr className="player-stats__th">
                                        <th>ROTO-9CAT</th>
                                        <th>ROTO-8CAT</th>
                                        <th>DFS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="player-stats__td">
                                        <td>{stats.ROTO9}</td>
                                        <td>{stats.ROTO8}</td>
                                        <td>{stats.DFS}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

