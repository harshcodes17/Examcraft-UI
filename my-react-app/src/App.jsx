import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import QuestionBank from "./components/QuestionBank.jsx";
import PrevPapers from "./components/PrevPapers.jsx";
import Help from "./components/Help.jsx";
import CreateNewQuestion from "./components/CreateNewQuestion.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/questionbank" element={<QuestionBank />} />
        <Route path="/previouspapers" element={<PrevPapers />} />
        <Route path="/help" element={<Help />} />
        <Route path="/createnewquestion" element={<CreateNewQuestion/>} />
      </Routes>
    </Router>
  );
}

export default App;
