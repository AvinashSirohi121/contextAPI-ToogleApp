import "./App.css";
import ToggleButton from  "./components/ToggleButton"
import Card from "./components/Card"


function App() {
  return (
    <>
     
      <div className="flex flex-wrap min-h-screen items-center dark:bg-gray-400 bg-gray-700">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-start mb-4">
            <ToggleButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
