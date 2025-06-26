import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import api from "../services/api";

const ProductList = () => {
  const [produtos, setProdutos] = useState([]);

  const fetchProducts = async () => {
    const res = await api.get("/produtos");
    setProdutos(res.data);
  };

  const deleteProduct = async (id) => {
    await api.delete(`/produtos/${id}`);
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5">Lista de Produtos</Typography>
      {produtos.map((p) => (
        <Box key={p.id} sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <span>{p.nome} - R$ {p.preco}</span>
          <Button color="error" onClick={() => deleteProduct(p.id)}>Excluir</Button>
        </Box>
      ))}
    </Box>
  );
};

export default ProductList;
