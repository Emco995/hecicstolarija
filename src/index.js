import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <Router>
  //   <Routes>
  //     <Route path="/" 
  //     element={
              <StrictMode>
                  <App />
              </StrictMode>
  //             }>
  //     </Route>
  //     <Route path="/galery" element={<Galery></Galery>}></Route>
  //   </Routes>
  // </Router>
);
