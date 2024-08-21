// import React from "react";
// import Home from "./Pages/Home";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Layout from "./Components/Layout";
// import Contect from "./Pages/Contect";
// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: (
//         <Layout>
//           <Home />
//         </Layout>
//       ),
//     },
//   ]);
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }

// export default App;

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Vesite from "./Pages/Vesite";
import Discount from "./Pages/Discount";
import Slider from "./Pages/Slider";
import Services from "./Pages/Services";
import Contect from "./Pages/Contect";
import Layout from "./Pages/layout";

function App() {
  const router = createBrowserRouter([
   
    {
      path: "/About",
      element: (
        <Layout>
          <About />
        </Layout>
      ),
    },
    {
      path: "/Product",
      element: (
        <Layout>
          <Product />
        </Layout>
      ),
    },
    {
      path: "/Vesite",
      element: (
        <Layout>
          <Vesite />
        </Layout>
      ),
    },
    {
      path: "/Discount",
      element: (
        <Layout>
          <Discount />
        </Layout>
      ),
    },
    {
      path: "/Slider",
      element: (
        <Layout>
          <Slider />
        </Layout>
      ),
    },
    {
      path: "/Services",
      element: (
        <Layout>
          <Services />
        </Layout>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

{
  /* <Home />
<About />
<Product />
<Vesite />
<Discount />
<Slider />
<Services />
<Contect /> */
}
