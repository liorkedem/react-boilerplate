import React from 'react';

export default class DummyPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: []
        };
    }

    async componentDidMount() {
        console.log('componentDidMount');
        const url = "http://localhost:3000/api/v1/articles/";
        const response = await fetch(url);
        const data = await response.json();
        const items = data.data;
        console.log(data);
        this.setState({
            isLoaded: true,
            items: items
        });
    }

    render() {
        console.log('render');

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
                    <ul>
                        {this.state.items.map(item => (
                            <li key={item.title}>
                                Title: {item.title} | Body: {item.body}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

