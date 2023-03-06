import React, { useState } from 'react';
import { TextField, Button, Grid, MenuItem, Card, CardContent } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';

export function AlocarDestino() {
  const [nomeMorador, setNomeMorador] = useState('');
  const [dataHora, setDataHora] = useState('');
  const [quadra, setQuadra] = useState('');
  const [lote, setLote] = useState('');
  const [bloco, setBloco] = useState('');
  const [apartamento, setApartamento] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar o código para enviar o formulário para o backend
    console.log({
      nomeMorador,
      dataHora,
      quadra,
      lote,
      bloco,
      apartamento,
      descricao,
    });
  };

  const quadraOptions = [
    "Quadra A",
    "Quadra B",
    "Quadra C",
    "Quadra D",
  ];

  const loteOptions = [
    "Lote 1",
    "Lote 2",
    "Lote 3",
    "Lote 4",
  ];

  const blocoOptions = [
    "Bloco X",
    "Bloco Y",
    "Bloco Z",
  ];

  const apartamentoOptions = [
    "Bloco X",
    "Bloco Y",
    "Bloco Z",
  ];

  return (
    <>
      <Grid item xs={12} sx={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px 10px'
      }}>
        <h1>Destino visitante</h1>
        <Link href="/visitantes">
          <Button
            startIcon={(<ArrowBackIcon fontSize="small" />)}
            variant="contained"

          >
            Voltar
          </Button>
        </Link>
      </Grid>
      <Card >
        <CardContent>
          <form onSubmit={handleSubmit}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItem: 'center'
            }}
          >
            <Grid
              container
              spacing={2}
              item
              md={6}
              xs={12}
            >
              <Grid item xs={6}>
                <TextField
                  label="Nome do Morador"
                  fullWidth
                  value={nomeMorador}
                  onChange={(e) => setNomeMorador(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Data/Hora"
                  fullWidth
                  value={dataHora}
                  onChange={(e) => setDataHora(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Quadra"
                  fullWidth
                  select
                  value={quadra}
                  onChange={(e) => setQuadra(e.target.value)}
                >
                  {quadraOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Lote"
                  fullWidth
                  select
                  value={lote}
                  onChange={(e) => setLote(e.target.value)}
                >
                  {loteOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Bloco"
                  fullWidth
                  select
                  value={bloco}
                  onChange={(e) => setBloco(e.target.value)}
                >
                  {blocoOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Apartamento"
                  fullWidth
                  select
                  value={bloco}
                  onChange={(e) => setBloco(e.target.value)}
                >
                  {apartamentoOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Descrição"
                  multiline
                  rows="10"
                  fullWidth
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
              </Grid>
            </Grid>
          </form>
          <Grid item xs={12} sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px'
          }}>
            <Button type="submit" variant="contained" color="success">
              Enviar
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}