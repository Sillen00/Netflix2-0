import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className='App'>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
