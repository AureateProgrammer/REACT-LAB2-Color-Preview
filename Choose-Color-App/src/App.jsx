import ColorInput from "./components/ColorInput"

function App() {
  return (
    <div>
      <ColorInput onColorChange={(color) => console.log(color)} />
    </div>
  );
}

export default App;