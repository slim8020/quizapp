import logo from './logo.svg';
import Quiz from './components/Quiz'
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Today's Quiz</h1>
        <div>
        <input id="prev" type="button" value="prev"/>
        <input id="next" type="button" value="next"/>
        </div>

        <Quiz imageFile='../sample.png' question='알프스 소녀 하이디 에서 하이디가 앓고 있는 병은 무엇인가요?' ch1='꾀병' ch2='상사병' ch3='몽유병' answer='1'/>

    </div>
  );
}

export default App;
