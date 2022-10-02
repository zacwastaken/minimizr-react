import { NavBar, OutputTable } from './components';
import { TableLayout } from './layout';
import { Button } from './components/button';


function takeInput(): any []{
  let inputSections = document.getElementById("input")?.children;
  let temp = [];
  let i = 0;

  while(inputSections?.item(i) != undefined){
    temp.push(inputSections?.item(i))
    i++;
  }

  let inputs: any[] = []

  temp = temp.map((input) => {
    inputs.push(input?.children)
  })

  return inputs;
}

function minimize(tables: JSX.Element ): void{
  let input = takeInput();

  let machineType = 0

  let machineState = document.getElementsByClassName("buttons__wrapper")[0].children.item(0)
  machineState?.className == "button button__medium button__primary__selected" ? machineType = 0 : machineType = 1
}


function App() {
  return (
    <div className="App">
      <NavBar/>
      <div id="inputTable">
      <TableLayout id = {"input"}/>
      </div>
      <Button label = {"Minimizar"} sizeClass = {"large"} buttonType = {"primary"} selected = {true} onClickFunction = {minimize}/> 
    </div>
    
    
  );
}

export default App;
