import { Link } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";

const Home = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3">Bem-vindo!</Typography>
      <Button component={Link} to="/produtos" variant="contained" sx={{ mt: 2 }}>
        Ir para Produtos
      </Button>
    </Container>
  );
};

export default Home;
