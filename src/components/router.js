import App from "../App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Homepage from "../pages/Homepage";
import Show from "../pages/Show";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Homepage/>} />
      <Route path=":id" element={<Show />} />
      <Route path="create" element={<Show/>} />
      <Route path="update/:id" />
      <Route path="delete/:id" />
    </Route>
  )
);
export default router;
