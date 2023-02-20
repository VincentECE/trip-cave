import { BrowserRouter, Routes, Route, RouteProps } from "react-router-dom";

type CustomRouteProps = RouteProps & { exact?: boolean };

export const RootRoute = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home/elsehere" element={<p>POOOOOP</p>} />
        <Route path="/home/:something" element={<p>POOOOOP</p>} />
      </Routes>
    </BrowserRouter>
  );
};
