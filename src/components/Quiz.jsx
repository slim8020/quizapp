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
        let ans = "3";
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
                <h1>Today's Quiz</h1>
                <img src="../sample.png"/>
                <h2>알프스 소녀 하이디 에서 <br/>하이디가 앓고 있는 병은 무엇인가요?</h2>

                <ul>
                <li>
                    <label><input type="radio" name="choice" value="1" onChange={this.handleChange}/>꾀병</label>
                </li>
                <li>
                     <label><input type="radio" name="choice" value="2" onChange={this.handleChange}/>상사병</label>
                </li>
                <li>
                     <label><input type="radio" name="choice" value="3" onChange={this.handleChange}/>몽유병</label>
                </li>
                </ul>

                <div>
                <input id="prev" type="button" value="prev"/>
                <input id="answer" type="submit" value="submit" onClick={this.handleSubmit}/>
                <input id="next" type="button" value="next"/>
                </div>
                
                <p>{this.state.answer}</p>
            </div>
        );
    }
}

export default Quiz;