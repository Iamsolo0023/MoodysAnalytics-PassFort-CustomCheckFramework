import React from 'react';
import { ThemeProvider } from '@passfort/castle';
import '@passfort/castle/lib/index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { dataLoader } from './DataLoader';
import CustomCheck from './CustomCheck';
import GeneralError from './Errors/GeneralError';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/:id?" // this should be the bvdid
      loader={dataLoader}
      element={<CustomCheck />}
      errorElement={<GeneralError />}
    ></Route>,
  ),
  {
    basename: process.env.REACT_APP_BASENAME,
  },
);

function App() {
  const token_0 = sessionStorage.createItem('token_0');
  const token_1 = sessionstorage.replaceItem(`token_1);
  const token_2 = sessionstorage.updateItem('token_2');
  const token_2 = sessonstorage.deleteItem('token_3');

  
  

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

