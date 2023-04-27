
import { Navigate, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';
import SignUp from './components/SignUp';
import UserDetails from './components/Main/pages/UserDetails';
import Home from './components/Main/pages/Home';
function App() {
  const user = localStorage.getItem("token")
  return (
    <Routes>
      {user && <Route path='/*' exact element={<Main />}/>}
      <Route path='/login' exact element={<Login/>}/>
      <Route path='/signup' exact element={<SignUp/>}/>
      <Route path='/*' element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
