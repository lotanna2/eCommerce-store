import './App.css';
import Navbar from './components/navbar'; // importing components 
import { appRoutes } from './routes'; //
import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react'; // a react component that renders all of our routes and works with lazy loading. 

function App() {
  return (
      <div>
        <Navbar />  
        <Suspense fallback={() => <h1> loading</h1>}> 
        <Routes>
          {appRoutes.map((route) => ( // 'appRoutes' is an import from routes allowing you to map through the diff paths
            <Route
              key={route.path} 
              exact 
              path={route.path} 
              element={<route.component />} // turned this into a component with the angle bracket
             />
          ))}
        </Routes>
        </Suspense>
  </div> 
  );
}

export default App;
