import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <header className="w-full bg-gray-100 shadow-md p-4 flex justify-between items-center">
      {/* Left side - Brand */}
      <div className="text-2xl font-bold text-blue-600">prefectoven</div>

      {/* Right side - About link */}
      <a
        href="#about"
        className="text-gray-700 hover:text-blue-500 font-medium"
      >
        About
      </a>
    </header>
  );
}

export default App;
