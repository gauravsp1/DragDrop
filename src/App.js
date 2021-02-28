import DragDrop from "./Components/DragDrop"


function App() {

  const data = [{ title: "Task", items: ["Buy Books Online", "Grocery", "Iron Clothes","Check Mails"] },
  { title: "To-Do", items: ["Daily Reading", "Walk", "Wash Car"] },
  { title: "Done", items: ["Meditate"] }]
  return (
    <div className="App">
      <DragDrop data={data}/>


    </div>
  );
}

export default App;
