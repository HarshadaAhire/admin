import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


//Admin Section
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Adashboard from './components/Admin/Adashboard/Adashboard.jsx';
import EmployeeForm from './components/Admin/Add/EmployeeForm.jsx';
import Task from './components/Admin/Task/task.jsx';
import Aholiday from './components/Admin/Aholiday/Aholiday.jsx';
import Aexpenses from './components/Admin/Aexpenses/Aexpenses.jsx';
import Aticket from './components/Admin/Aticket/Aticket.jsx';
import Aleave from './components/Admin/Aleave/Aleave.jsx';
import Aproject from './components/Admin/Aproject/Aproject.jsx';
import Createproject from './components/Admin/Createproject/Createproject.jsx';
import Asetting from './components/Admin/Asetting/Asettings.jsx';
// import Anotice from './components/Admin/Anotice/Anotice.jsx';
// import Add from './components/Admin/AddEmp/Add.jsx';
// import Aattendance from './components/Admin/Aattendance/Aattendance.jsx';
// import Login from './components/Login/Login.jsx';
// import Forgot from './components/Forgot/Forgot.jsx';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <Router>
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Routes>
         <Route path="/" element={<Adashboard />} />
         <Route path="/Aholiday" element={<Aholiday />} />
         <Route path="/Aleave" element={<Aleave />} />
         <Route path="/Aexpenses" element={<Aexpenses />} />
         <Route path="/Aproject" element={<Aproject />} />
         <Route path="/Aticket" element={<Aticket />} />
         <Route path="/Aleave" element={<Aleave />} />
         <Route path="/EmployeeForm" element={<EmployeeForm />} />
         <Route path="/createproject" element={<Createproject />} />
         <Route path="/Asetting" element={<Asetting />} />
         <Route path="/Task" element={<Task />} />

          </Routes>
        </div>
        {/* </div> */}
    </Router>
         
  
  )
}

export default App