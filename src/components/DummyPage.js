import React from 'react';
import { Link } from 'react-router-dom';
import * as remoteApi from '../actions/remoteApi';

export default class DummyPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: []
        };
    }

    async componentDidMount() {
        const items = await remoteApi.fetchAllPlayers();
        this.setState({
            isLoaded: true,
            items: items
        });
    }

    onClick = (item) => {
        console.log(item.ID);
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
            let count = 0;
            return (
                <div>
                    {this.state.items.map(item => (
                        <Link key={count++} to={`/player/${item.ID}`}>
                            <div key={`id_${item.ID}`}>
                                <div>
                                    ID: {item.ID} | NAME: {item.NAME}
                                </div>
                                <button key={item.ID} onClick={() => this.onClick(item)}>{item.NAME}</button>
                            </div>
                        </Link>
                    ))}

                </div>
            );
        }
    }
}

