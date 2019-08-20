import React from 'react';
import * as remoteApi from '../../actions/remoteApi';

export default class PlayerRanks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            selectedRanks: undefined,
            selectedPlayer: props.selectedPlayer
        };
    }

    async componentDidMount() {
        const selectedRanks = await remoteApi.fetchPlayerRanks(this.state.selectedPlayer.ID);
        this.setState({
            isLoaded: true,
            selectedRanks: selectedRanks
        });
    }

    async componentWillReceiveProps( newProps ) {
        const selectedRanks = await remoteApi.fetchPlayerRanks(newProps.selectedPlayer.ID);
        this.setState({ 
            selectedPlayer: newProps.selectedPlayer,
            selectedRanks: selectedRanks
         });
    }

    render() {
        const ranks = this.state.selectedRanks;

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
                                        <td>{ranks.ROTO9}</td>
                                        <td>{ranks.ROTO8}</td>
                                        <td>{ranks.DFS}</td>
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

