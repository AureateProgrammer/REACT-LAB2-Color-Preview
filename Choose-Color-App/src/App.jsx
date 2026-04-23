import ColorInput from "./components/ColorInput"
import "./App.css"

function App() {
  return (
    <div>
      <ColorInput onColorChange={(color) => console.log(color)} />
    </div>
  );
}

export default App;