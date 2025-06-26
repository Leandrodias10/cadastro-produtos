import { Container, Typography } from "@mui/material";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const Products = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 4 }}>Cadastro de Produtos</Typography>
      <ProductForm fetchProducts={() => {}} />
      <ProductList />
    </Container>
  );
};

export default Products;
