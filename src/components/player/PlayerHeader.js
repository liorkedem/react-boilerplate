import React from 'react';
import * as remoteApi from '../../actions/remoteApi';
import * as utils from '../../actions/utils';

export default class PlayerHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            selectedPlayer: props.selectedPlayer
        };
    }

    async componentDidMount() {
        this.setState({
            isLoaded: true
        });
    }

    componentWillReceiveProps( someProp ) {
        this.setState({ 
            selectedPlayer: someProp.selectedPlayer
         });
    }


    // async componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.selectedPlayer !== this.props.selectedPlayer) {
    //         const updatedPlayer = this.props.selectedPlayer;
    //         this.setState({
    //             isLoaded: true,
    //             selectedPlayer: updatedPlayer
    //         });
    //         console.log('UPDATED header PLAYER IS:', this.state.selectedPlayer.NAME);
    //     }
    // }

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
            const healthClassName =
                (selectedPlayer.HEALTH === "HEALTHY" ?
                    "player-info__health_positive" :
                    "player-info__health_negative");

            return (
                <div className="player-info">
                    <div>
                        <div
                            key={selectedPlayer.ID}
                            className="player-info__title">
                            <h1>{selectedPlayer.NAME}</h1>
                        </div>
                    </div>
                    <div className="player-info__subtitle">
                        <div className={healthClassName}>
                            <h3>
                                {selectedPlayer.HEALTH}
                            </h3>
                        </div>
                        <h3>
                            {`${selectedPlayer.POSITION} | ${selectedPlayer.HEIGHT} | ${utils.convertTeamNameToFull(selectedPlayer.TEAM)}`}
                        </h3>

                    </div>

                </div>
            );
        }
    }
}