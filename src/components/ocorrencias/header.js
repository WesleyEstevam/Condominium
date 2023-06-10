import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    SvgIcon, Typography
  } from '@mui/material';
  import { Search as SearchIcon } from '../../icons/search';
  import { Upload as UploadIcon } from '../../icons/upload';
  import { Download as DownloadIcon } from '../../icons/download';
  import Link from 'next/link';
  import { Importar } from '../btn_acao/btn-importar';

  export const HeaderOcorrencias = (props) => (
    <Box {...props}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          m: -1
        }}
      >
        <Typography
          sx={{ m: 1 }}
          variant="h4"
          
        >
          Ocorrências
        </Typography>
        <Box sx={{ m: 1, display: 'flex'}}>
            <Importar />
          <Button
            startIcon={(<DownloadIcon fontSize="small" />)}
            sx={{ mr: 1 }}
          >
            Exportar
          </Button>
          <Link href="cadastros/nova-ocorrencia" color='primary'>
            <Button color='primary' variant='contained'>
              Nova Ocorrência
            </Button>
          </Link>
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
        <CardContent>
          <Box sx={{ maxWidth: 1000, display: 'flex', alignContent: 'center' }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      color="action"
                      fontSize="small"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Nome"
              variant="outlined"
            />
            <TextField
              fullWidth
              sx={{
                display: 'flex',
                justifyContent:'space-around',
                margin: '0px 10px'
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      color="action"
                      fontSize="small"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Status"
              variant="outlined"
            />
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      color="action"
                      fontSize="small"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Tipo"
              variant="outlined"
            />
            <TextField
              fullWidth
              sx={{
                display: 'flex',
                justifyContent:'space-around',
                margin: '0px 10px'
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      color="action"
                      fontSize="small"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Descrição"
              variant="outlined"
            />
          </Box>
        </CardContent>
        </Card>
      </Box>
    </Box>
  );
  