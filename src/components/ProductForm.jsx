import { Button, TextField, Box } from "@mui/material";
import { useState } from "react";
import api from "../services/api";

const ProductForm = ({ fetchProducts }) => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/produtos", { nome, preco });
    setNome("");
    setPreco("");
    fetchProducts();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField label="Nome" value={nome} onChange={(e) => setNome(e.target.value)} fullWidth margin="normal" />
      <TextField label="Preço" value={preco} onChange={(e) => setPreco(e.target.value)} type="number" fullWidth margin="normal" />
      <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
    </Box>
  );
};

export default ProductForm;
