import React, { Component } from 'react';

class Quiz extends Component {
    render() {
        return (
            <div>
                <h1>Today's Quiz</h1>
                <img src="../sample.png"/>
                <h2>알프스 소녀 하이디 에서 <br/>하이디가 앓고 있는 병은 무엇인가요?</h2>
                <div>
                <ul>
                <li>
                    <label><input type="radio" name="answer" value="1"/>꾀병</label>
                </li>
                <li>
                     <label><input type="radio" name="answer" value="2"/>상사병</label>
                </li>
                <li>
                     <label><input type="radio" name="answer" value="3"/>몽유병</label>
                </li>
                </ul>
                <input type="submit" value="Answer"/>
                </div>
            </div>
        );
    }
}

export default Quiz;