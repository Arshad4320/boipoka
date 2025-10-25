import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import BookDetails from "../components/BookDetails/BookDetails";
import ReadList from "../pages/ReadList/ReadList";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("boipoka.json"),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/readList",
        loader: () => fetch("boipoka.json"),
        element: <ReadList />,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("boipoka.json"),
        element: <BookDetails />,
      },
    ],
  },
]);
export default router;
