import { Container } from "@mui/material";
import React from "react";
import { PropertyGrid } from "../propertyGrid/PropertyGrid";
import Typography from "@mui/material/Typography";

export const Home = () => {
  console.log(localStorage.getItem("token"))
  console.log(localStorage.getItem("usuario"))
  
  return (
    <Container disableGutters maxWidth="xl">
      <PropertyGrid />
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 3,
        }}
      >
        <Typography variant="body2" color="text.secondary" fontWeight={400}>
          ©Casaconnect 2023 | Calle 115 #212, Cali Colombia | +57 300 153 4722
        </Typography>
      </Container>
    </Container>
  );
};
