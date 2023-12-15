import { Dct } from "./components/Dct";
import { Fft } from "./components/Fft";
import { Box } from "@mui/material";
import { Walsh } from "./components/Walsh";
import { Haar } from "./components/Haar";
import { Laplacian } from "./components/Laplacian";
import { Histogram } from "./components/Histogram";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Box>
        <Fft />
        <Dct />
        <Walsh />
        <Haar />
        <Laplacian />
        <Histogram />
      </Box>
      <ToastContainer />
    </>
  );
};

export default App;
