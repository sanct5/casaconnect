import * as React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { CssBaseline } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { SearchBar } from "../searchBar/SearchBar";

export const Loguin = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  return (
    <div disableGutters maxWidth="xl">
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={5}
          style={{ backgroundColor: "#3F618C" }}
        >
          <img
            style={{
              width: "90%",
              height: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "auto",
              marginTop: "10%",
            }}
            src={Logo}
            alt="Logo de casaconnect"
          />
        </Grid>
        <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
          <div
            style={{
              margin: "center",
              alignItems: "center",
              marginTop: "20%",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <div>
                  <div>
                    <Typography
                      variant="h5"
                      gutterBottom
                      style={{
                        color: "#3F618C",
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        fontSize: 24,
                      }}
                    >
                      Correo*
                    </Typography>
                  </div>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                </div>
                <div></div>
                <div style={{ margin: "10px" }}></div>
                <div>
                  <div>
                    <Typography
                      variant="h5"
                      gutterBottom
                      style={{
                        color: "#3F618C",
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        fontSize: 24,
                      }}
                    >
                      Contraseña*
                    </Typography>
                  </div>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </div>
                <Grid container>
                  <Grid item xs>
                    <Link
                      href="#"
                      variant="body2"
                      sx={{
                        color: "#7A7A7A",
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        fontSize: 18,
                        marginRight: "1%",
                      }}
                    >
                      ¿Olvidaste tu
                    </Link>
                    <Link
                      href="#"
                      variant="body2"
                      sx={{
                        color: "#3F618C",
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        fontSize: 18
                      }}
                    >
                      contraseña?
                    </Link>
                  </Grid>
                </Grid>
                <Grid style={{ marginTop: "7%" }}></Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "#3F618C",
                    borderRadius: 8,
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    fontSize: 24,
                  }}
                >
                  Iniciar sesión
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link
                      href="#"
                      variant="body2"
                      sx={{
                        color: "#7A7A7A",
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        fontSize: 18,
                        marginRight: "15px",
                      }}
                    >
                      ¿No tienes una cuenta?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      href="../register/"
                      variant="body2"
                      sx={{
                        color: "#406595",
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        fontSize: 18,
                      }}
                    >
                      {"Registrarse"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
