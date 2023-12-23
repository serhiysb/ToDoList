// import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import AddToDo from './components/addTask/addTask.component';
import TaskList from './components/listTask/listTask.component';
import Nav from './components/navigation/nav.component';
import NewTasks from './components/newTasks/newTasks.component';
import CompletedTasks from './components/completedTasks/completedTasks.component';
import { Outlet, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
        <div className="App">
          <Router>
            <Nav/>
          <hr style={{width:"80%"}}/>
            <Routes>
              <Route path="/" element={<TaskList/>}/>
              <Route path="/new" element={<NewTasks/>}/>
              <Route path="/completed" element={<CompletedTasks/>}/>
            </Routes>
            <Outlet/>
          </Router>
      <hr style={{width:"80%"}}/>
      <AddToDo/>
    </div>
  );
}

export default App;
