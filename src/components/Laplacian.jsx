import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import baseApi from "../api/baseApi";

export const Laplacian = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [sigma, setSigma] = useState(1);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProcessedImage(null);
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      baseApi
        .post(`/process_laplacian?sigma=${sigma}`, formData)
        .then((res) => {
          const blob = new Blob([res.data], { type: "image/png" });

          const imageUrl = URL.createObjectURL(blob);
          setProcessedImage(imageUrl);
        })
        .catch((err) => console.log(err));
    } else {
      console.log("No file selected");
    }
  };

  return (
    <Container>
      <Typography variant="h5" component="div" gutterBottom>
        Laplacian Image Upload and Processing
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <input type="file" onChange={handleFileChange} />
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={handleUpload}>
            Upload
          </Button>
        </Grid>
        <Grid item>
          <TextField
            value={sigma}
            onChange={(e) => setSigma(e.target.value)}
            label="Sigma"
          />
        </Grid>
      </Grid>

      {processedImage && selectedFile && (
        <Grid container spacing={2} style={{ marginTop: "20px" }}>
          <Grid item xs={6}>
            <Paper elevation={3}>
              <Typography
                variant="h6"
                component="div"
                align="center"
                gutterBottom
              >
                Original Image
              </Typography>
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Original"
                style={{ width: "100%" }}
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3}>
              <Typography
                variant="h6"
                component="div"
                align="center"
                gutterBottom
              >
                Processed Image
              </Typography>
              <img
                src={processedImage}
                alt="Processed"
                style={{ width: "100%" }}
              />
            </Paper>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};
