// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/AppNavbar';
import AppFooter from './Components/AppFooter';
import Home from './Pages/Home';
import { UserProvider } from './UserContext';
import AppRouter from './Components/AppRouter';
// import Footer from './Components/AppFooter';

function App() {
  return (
      
      // <UserProvider>
          <AppRouter/>
      // </UserProvider>
    
  );
}

export default App;
