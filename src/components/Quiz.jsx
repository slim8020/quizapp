import React, { Component } from 'react';

class Quiz extends Component {
    constructor(props){
        super(props);

        this.state={choice:'', answer:'', };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({choice: event.target.value});
        console.log(this.state.choice);
    }

    handleSubmit(event){
        let ans = this.props.answer;
        if(this.state.choice === ans){
            this.setState({answer: 'Correct!'});
        }
        else{
            this.setState({answer: 'Wrong Answer!'});
        }
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <img src={this.props.imageFile}/>
                <h2>{this.props.question}</h2>

                <ul>
                <li>
                    <label><input type="radio" name="choice" value="1" onChange={this.handleChange}/>{this.props.ch1}</label>
                </li>
                <li>
                     <label><input type="radio" name="choice" value="2" onChange={this.handleChange}/>{this.props.ch2}</label>
                </li>
                <li>
                     <label><input type="radio" name="choice" value="3" onChange={this.handleChange}/>{this.props.ch3}</label>
                </li>
                </ul>

                <div>
                <input id="answer" type="submit" value="submit" onClick={this.handleSubmit}/>
                </div>

                <p>{this.state.answer}</p>
            </div>
        );
    }
}

export default Quiz;