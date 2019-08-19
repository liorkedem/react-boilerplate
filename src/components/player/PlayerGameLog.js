import React from 'react';
import { JsonToTable } from 'react-json-to-table';
import * as remoteApi from '../../actions/remoteApi';

export default class PlayerGameLog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            thisPlayer: undefined
        };
    }

    async componentDidMount() {
        const thisPlayer = await remoteApi.fetchPlayerGamelog(remoteApi.dummyPlayerId);
        this.setState({
            isLoaded: true,
            thisPlayer: thisPlayer
        });
    }

    render() {
        const stats = this.state.thisPlayer;

        if (!this.state.isLoaded) {
            return (
                <div>
                    Loading...
                </div>
            );
        }
        else {
            return (
                <div className="content-container">
                    <div className="strip">
                        <h3>GAMELOG</h3>
                    </div>
                    <div>
                        <JsonToTable json={stats} />
                    </div>
                </div>
            );
        }
    }
}

