import RootLayout from './Components/Layout/RootLayout'
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Navigate, BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Persons = lazy(() => import(/* webpackChunkName: "Modules/Persons" */'./Modules/Persons'));
const Planets = lazy(() => import(/* webpackChunkName: "Modules/Planets" */'./Modules/Planets'));
const StarShips = lazy(() => import(/* webpackChunkName: "Modules/Movies" */'./Modules/StarShips'));
const Person = lazy(() => import(/* webpackChunkName: "Modules/Persons/Person" */'./Modules/Persons/Person'));
const Planet = lazy(() => import(/* webpackChunkName: "Modules/Planets/Planet" */'./Modules/Planets/Planet'));
const StarShip = lazy(() => import(/* webpackChunkName: "Modules/StarShips/StarShip" */'./Modules/StarShips/StarShip'));

const theme = createTheme();

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>star-wars</title>
          </Helmet>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Navigate to="person" />} />
              <Route path='person' element={<Persons />} />
              <Route path='planet' element={<Planets />} />
              <Route path='StarShip' element={<StarShips />} />
              <Route path='person/:id' element={<Person />} />
              <Route path='planet/:id' element={<Planet />} />
              <Route path='StarShip/:id' element={<StarShip />} />
            </Route>
          </Routes>
        </HelmetProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
