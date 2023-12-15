import { Dct } from "./components/Dct";
import { Fft } from "./components/Fft";
import { Box } from "@mui/material";
import { Walsh } from "./components/Walsh";
import { Haar } from "./components/Haar";
import { Laplacian } from "./components/Laplacian";
import { Histogram } from "./components/Histogram";

const App = () => {
  return (
    <Box>
      <Fft />
      <Dct />
      <Walsh />
      <Haar />
      <Laplacian />
      <Histogram />
    </Box>
  );
};

export default App;
