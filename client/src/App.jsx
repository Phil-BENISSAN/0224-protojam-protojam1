import { Outlet } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <header> <Header /> </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
