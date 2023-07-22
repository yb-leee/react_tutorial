import './App.css';

function Counter(props){
  console.log(props.title);
  return <div>
    <h1> {props.title}</h1>
    <button>+</button> {props.initValue}
  </div>
}
function App(){
  return(
    <div>
      <Counter title = "불면증 카운터" initValue = {10}></Counter>
      <Counter title = "손님 카운터" initValue = {10}></Counter>
    </div>
  );
  }

export default App;
