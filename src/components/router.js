import App from "../App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Homepage from "../pages/Homepage";
import Show from "../pages/Show";
import { bookmarkLoader } from "../loader";
import {createAction} from "../action"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="" element={<Homepage/>} loader={bookmarkLoader} />
      <Route path=":id" element={<Show />} />
      <Route path="create" action={createAction}/>
      <Route path="update/:id" />
      <Route path="delete/:id" />
    </Route>
  )
);
export default router;
