import React, { Component } from 'react';
import './Textbox.css';
const prompts = ["after sending in the video, you hear howie start just turbo flaming so you figure it's time to move on",
				"in the next room, you see amy watching some video on repeat eating a CAESAR salad",
				"unfortunately, it looks like the content is encoded somehow, so you figure that's important",
				"scrawled on the wall is 4 lxxtw://aaa.csyxyfi.gsq/aexgl?z=Hp9D6qHIXBM",
				"wow this incredibly odd string of characters must also be a clue",
				"In addition, behind amy are 3 ducks wearing hats",
				"for some odd reason you know that in order to pass through, you need to pick the correct duck (this is the password for this stage)",
				"in addition, they seem to be numbered with binary numbers",
				"it looks like you'll have to choose the correct binary numbered duck to move on, but what could the binary number be?",
				"perhaps in the video, there's a number that looks like it could be the correct binary number, maybe the address contains a clue?"
				];

class Textbox extends Component {
	constructor(props) {
		super(props);
		this.state = {text: prompts,
					  max: 10,
					  index: 0
					 };
		
		this.handleForward = this.handleForward.bind(this);
		this.handleBackwards = this.handleBackwards.bind(this);
	}
	
	handleForward() {
		console.log(this.state.index);
		if (this.state.index < (this.state.max - 1)) {
			this.setState({index: this.state.index + 1});
		}
	}
	
	handleBackwards() {
		if (this.state.index > 0) {
			this.setState({index: this.state.index - 1});
		}
	}
	
	renderBackwardsButton() {
		if (this.state.index == 0) {
			return null;
		}
		return <button onClick={this.handleBackwards}>Previous</button>;
	}
	
	renderForwardsButton() {
		if (this.state.index >= this.state.max - 1) {
			return null;
		}
		return <button onClick={this.handleForward}>Next</button>;
	}
	
	renderContent() {
		if (this.state.index >= 1) {
			return <div className="content">
					     <img id="ducks" src={require('./ducks.png').default} />
					   </div>;
		}
		return null;
	}
	
	render() {
		let content = this.renderContent();
		let forwardButton = this.renderForwardsButton();
		let backwardsButton = this.renderBackwardsButton();
		
		return (
			<div>
				<div id="textDisplay"> {this.state.text[this.state.index]} </div>
				<div>
					{backwardsButton}
					{forwardButton}
				</div>
				{content}
			</div>
		)
	}
}

export default Textbox;

