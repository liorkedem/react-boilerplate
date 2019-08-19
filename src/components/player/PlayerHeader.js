import React from 'react';
import * as remoteApi from '../../actions/remoteApi';
import * as utils from '../../actions/utils';

export default class PlayerHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            thisPlayer: undefined
        };
    }

    async componentDidMount() {
        const thisPlayer = await remoteApi.fetchPlayerInfo(remoteApi.dummyPlayerId);
        this.setState({
            isLoaded: true,
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
            const thisPlayer = this.state.thisPlayer;
            const healthClassName =
                (thisPlayer.HEALTH === "HEALTHY" ?
                    "player-info__health_positive" :
                    "player-info__health_negative");

            return (
                <div className="player-info">
                    <div>
                        <div
                            key={thisPlayer.ID}
                            className="player-info__title">
                            <h1>{thisPlayer.NAME}</h1>
                        </div>
                    </div>
                    <div className="player-info__subtitle">
                        <h3>
                            {`${thisPlayer.POSITION} | ${thisPlayer.HEIGHT} | ${utils.convertTeamNameToFull(thisPlayer.TEAM)}`}
                        </h3>
                        <div className={healthClassName}>
                            <h3>
                                {thisPlayer.HEALTH}
                            </h3>
                        </div>
                    </div>

                </div>
            );
        }
    }
}