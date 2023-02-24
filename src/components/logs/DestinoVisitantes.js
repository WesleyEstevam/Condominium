import { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';

//TELA DE EXEMPLO

export function DestinoVisitante() {
  const [visitantes, setVisitantes] = useState([]);
  const [nome, setNome] = useState('');
  const [dataHora, setDataHora] = useState('');

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleDataHoraChange = (event) => {
    setDataHora(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const novoVisitante = { nome, dataHora };
    setVisitantes([...visitantes, novoVisitante]);
    // Aqui você pode fazer uma requisição HTTP para enviar os dados do visitante para um servidor
  };

  return (
    <div>
      <Typography variant="h5">Registro de visitantes</Typography>
      <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
        <form onSubmit={handleSubmit}>
          <TextField label="Nome" value={nome} onChange={handleNomeChange} fullWidth margin="normal" required />
          <TextField label="Data e hora de entrada" value={dataHora} onChange={handleDataHoraChange} fullWidth margin="normal" required />
          <Button type="submit" variant="contained" sx={{ mt: 2 }} fullWidth>Registrar entrada</Button>
        </form>
      </Paper>
      {visitantes.map((visitante, index) => (
        <Paper elevation={3} sx={{ p: 2, mt: 2 }} key={index}>
          <Typography variant="h6">{visitante.nome}</Typography>
          <Typography variant="body1">{visitante.dataHora}</Typography>
        </Paper>
      ))}
    </div>
  );
}