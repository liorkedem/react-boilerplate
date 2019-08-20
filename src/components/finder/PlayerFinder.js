import React from 'react';
import * as remoteApi from '../../actions/remoteApi';
import * as utils from '../../actions/utils';
import PlayerFinderList from './PlayerFinderList';

export default class PlayerFinder extends React.Component {
    constructor(props) {
        super(props);
        this.allPlayers = [];
        this.state = {
            isLoaded: false,
            allPlayers: [],
            selectedPlayer: undefined
        };
    }



    async componentDidMount() {
        console.log('mounting');

        this.allPlayers = await remoteApi.fetchAllPlayers();
        console.log(this.allPlayers);

        this.setState({
            isLoaded: true,
            allPlayers: this.allPlayers,
            selectedPlayer: undefined
        });
    }

    async componentDidUpdate() {
        if (!this.state.isLoaded) {
            console.log('updating');
            // this.setState({
            //     isLoaded: true,
            //     allPlayers: allPlayers,
            //     selectedPlayer: undefined
            // });
        }
    }

    onInputChange = (e) => {
        const inputText = e.target.value.trim();
        let filteredPlayers = [];
        if (inputText.length > 0) {
            filteredPlayers = this.allPlayers.filter(player => (
                player.NAME.toUpperCase().includes(inputText.toUpperCase()) ||
                player.TEAM.toUpperCase().includes(inputText.toUpperCase()) ||
                utils.convertTeamNameToFull(player.TEAM).toUpperCase().includes(inputText.toUpperCase()) ||
                player.POSITION.toUpperCase().includes(inputText.toUpperCase())));
        }

        this.setState({
            allPlayers: filteredPlayers
        });
    }

    render() {
        if (!this.state.isLoaded) {
            return (
                <div>
                    Loading PlayerFinder...
                </div>
            );
        }
        else {
            console.log('RE-RENDER');
            return (
                <div
                    className="player-finder">
                    <input
                        className="player-finder__text-input"
                        type="text"
                        placeholder="Search by name, team or position..."
                        onChange={this.onInputChange}
                    />
                    <PlayerFinderList players={this.state.allPlayers} />
                </div>
            );
        }
    }
}