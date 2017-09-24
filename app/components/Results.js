import React,{Component} from 'react';
var queryString = require('query-string');
var api = require('../utils/api');


class Results extends Component {
	constructor(props){
		super(props);
		this.state = {
			winner: null,
			loser: null,
			error: null,
			loading: true
		};
	}
	componentDidMount() {
		var players = queryString.parse(this.props.location.search)
		api.battle([
			players.playerOneName,
			players.playerTwoName
		]).then(function(results) {
			console.log(results)
		})

	}
    render() {
			var error = this.state.error;
			var winner = this.state.winner;
			var loser = this.state.loser;
			var loading = this.state.loading;
        return (
            <div>
                Results
            </div>
        );
    }
}

module.exports = Results;
