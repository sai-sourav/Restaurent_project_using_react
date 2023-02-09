import ReactDOM from "react-dom/client";
import { CartContextProvider } from "./Context/display-cart";

import "./index.css";
import App from "./App";
import { CartItemContextProvider } from "./Context/update-cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartItemContextProvider>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </CartItemContextProvider>
);
