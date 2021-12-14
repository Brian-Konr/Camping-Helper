import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<h1>Home Page</h1>} />
          <Route exact path="signIn" element = {<SignIn/>} />
          <Route exact path="signUp" element = {<SignUp/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
