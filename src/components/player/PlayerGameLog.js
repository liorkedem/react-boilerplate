import React from 'react';
import * as remoteApi from '../../actions/remoteApi';

export default class PlayerGameLog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            selectedPlayer: undefined
        };
    }

    async componentDidMount() {
        const selectedPlayer = await remoteApi.fetchPlayerGamelog(remoteApi.dummyPlayerId);
        this.setState({
            isLoaded: true,
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
            const gamelog = this.state.selectedPlayer;

            return (
                <div>
                    <div className="strip">
                        <h3>GAMELOG</h3>
                    </div>
                    <div>
                        <div className="content-container">
                            <div className="player-gamelog">
                                <table>
                                    <thead>
                                        <tr className="player-gamelog__th">
                                            <th>DATE</th>
                                            <th>TEAM</th>
                                            <th>OPP</th>
                                            <th>MIN</th>
                                            <th>PTS</th>
                                            <th>REB</th>
                                            <th>AST</th>
                                            <th>BLK</th>
                                            <th>STL</th>
                                            <th>TOV</th>
                                            <th>3PM</th>
                                            <th>FT%</th>
                                            <th>FG%</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {gamelog.map(item => (
                                            <tr
                                                key={item.GAMEDATE}
                                                className="player-gamelog__td">
                                                <td>{item.GAMEDATE}</td>
                                                <td>{item.TEAM}</td>
                                                <td className={
                                                    (item.RESULT == 'W' ?
                                                        "player-gamelog__win" :
                                                        "player-gamelog__lose")}>
                                                    {(item.COURT === 'A' ?
                                                        `@ ${item.OPP}` :
                                                        `vs ${item.OPP}`)}
                                                </td>
                                                <td>{item.MIN}</td>
                                                <td>{item.PTS}</td>
                                                <td>{item.TREB}</td>
                                                <td>{item.AST}</td>
                                                <td>{item.BLK}</td>
                                                <td>{item.STL}</td>
                                                <td>{item.TOV}</td>
                                                <td>{item.TPM}</td>
                                                <td>{item.FTPCT}</td>
                                                <td>{item.FGPCT}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

