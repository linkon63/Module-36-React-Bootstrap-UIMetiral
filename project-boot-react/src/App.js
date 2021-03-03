import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import News from './componants/News/News';
import Header from './componants/News/Header/Header';
import TopHeadline from './componants/News/TopHeadline/TopHeadline';
import Chart from './componants/News/Chart/Chart';
function App() {
  return (
    <div>
      <h1>I'm React Bootsrtap</h1>
      <Chart></Chart>
      <Header></Header>
      <TopHeadline></TopHeadline>
      
    </div>
  );
}

export default App;
