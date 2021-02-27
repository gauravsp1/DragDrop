import DragDrop from "./DragDrop"


function App() {

  const data = [{ title: "Task", items: ["Buy Milk", "Grocery", "Iron Clothes"] },
  { title: "To-Do", items: ["Buy Water", "Walk", "Wash Clothes"] },
  { title: "Done", items: ["Buy Juice", "Run", "Fold Clothes"] }]
  return (
    <div className="App">
      <DragDrop data={data}/>


    </div>
  );
}

export default App;
