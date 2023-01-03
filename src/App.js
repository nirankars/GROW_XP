import OurWork from "./Components/OurWork";
import Video from "./Components/Video";
import Layout from "./Components/Layout";
import About from "./Pages/About/index";
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
              <OurWork/>{" "}
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/ourwork" element={<OurWork />} />
      </Route>
    </Routes>
  );
}

export default App;
