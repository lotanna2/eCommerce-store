import './App.css';
import { useRef, useState } from 'react';
import Navbar from './components/navbar'; // importing components 
import { appRoutes } from './routes'; //
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Suspense } from 'react'; // a react component that renders all of our routes and works with lazy loading. 
import { SwitchTransition, CSSTransition } from "react-transition-group";
function App() {
  const cartInitialState = {
    totalAmount: 0,
    numberOfItems: 0, 
    cartItems: [],
  }
  const categoryRef = useRef(null); // passing the categorRef to the app for the home page smoothscrooling from the navar function
  const [cartItems, setCartItems] = useState(cartInitialState);
  const [user, setUser] = useState({}); //user state that would be passed and tracks the users values
  const [isLogged, setIsLogged] = useState(false);
  const location = useLocation();

  return (
      <div>
        <Navbar 
        categoryRef={categoryRef} 
        cartItemsCount={cartItems.numberOfItems} 
        isLogged={isLogged}
        />
        <SwitchTransition component={null}>
          <CSSTransition // responsible for making all the css transitions from one page to another
            key={location.pathname} // needs the current location of our rout and it tells the cssanimation when we have changed location to run the animation 
            classNames="fade"
            timeout = {300}
            unmountOnExit
          > 
          <Suspense fallback={() => <h1> loading</h1>}> 
        <Routes Location={location} //location; prop passed that changes the location value for the csstransition
        >
          {appRoutes.map((route) => { // 'appRoutes' is an import from routes allowing you to map through the diff paths
            if(route.requiresAuth && !isLogged) { //if route requires auth(is a protected route) and is not logged redirect to login page else 
              return (
                <Route 
                key={route.path}
                exact 
                path={route.path}
                element={
                  <Navigate replace to={"/login"}
                  />
                }/>
              );
            } else {
              return ( <Route
              key={route.path} 
              exact 
              path={route.path} 
              element={  // turned this into a component with the angle bracket and the categoryRef for the products navigation to the catrgories on the home page
              <route.component
               categoryRef={categoryRef}
               _cartItems={cartItems}
               setCartItems={setCartItems}
               setUser={setUser}
               setIsLogged={setIsLogged}
               isLogged
                />}
             />
              );
            };
          })}
        </Routes>
        </Suspense>
          </CSSTransition>
        </SwitchTransition>
        
  </div> 
  );
}

export default App;
