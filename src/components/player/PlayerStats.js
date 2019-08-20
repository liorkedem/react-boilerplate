import React from 'react';
import * as remoteApi from '../../actions/remoteApi';

export default class PlayerStats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            selectedPlayer: undefined
        };
    }

    async componentDidMount() {
        const selectedPlayer = await remoteApi.fetchPlayerStats(remoteApi.dummyPlayerId);
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
                        <h3>PERSONAL STATS</h3>
                    </div>

                    <div className="content-container">

                        <div className="player-stats">
                            <table>
                                <tbody>
                                    <tr className="player-stats__th">
                                        <th>MIN</th>
                                        <th>GMP</th>
                                        <th>PTS</th>
                                        <th>REB</th>
                                        <th>AST</th>
                                        <th>BLK</th>
                                    </tr>
                                    <tr className="player-stats__td">
                                        <td>{stats.MIN}</td>
                                        <td>{stats.GP}</td>
                                        <td>{stats.PTS}</td>
                                        <td>{stats.TREB}</td>
                                        <td>{stats.AST}</td>
                                        <td>{stats.BLK}</td>
                                    </tr>
                                    <tr className="player-stats__th">
                                        <th>STL</th>
                                        <th>3PM</th>
                                        <th>TOV</th>
                                        <th>FT%</th>
                                        <th>FG%</th>
                                        <th>3P%</th>
                                    </tr>
                                    <tr className="player-stats__td">
                                        <td>{stats.STL}</td>
                                        <td>{stats.TPM}</td>
                                        <td>{stats.TOV}</td>
                                        <td>{stats.FTPCT}</td>
                                        <td>{stats.FGPCT}</td>
                                        <td>{stats.TPPCT}</td>
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

