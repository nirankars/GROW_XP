import Video from "./Components/Video";
import Layout from "./Components/Layout";
import About from "./Pages/About/index";
import Services from "./Pages/Services/index"
import Contact from "./Pages/Contact/index"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <>
              <Video/>
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
