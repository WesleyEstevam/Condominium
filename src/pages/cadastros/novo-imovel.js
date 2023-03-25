import { Box, Container, Grid, Typography } from '@mui/material';
import { NovoImovel } from '../../components/imoveis/cadastro-imoveis';
import { DashboardLayout } from '../../components/painel-layout';

const Page = () => (
  <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3, textAlign: 'center' }}
          variant="h4"
        >
          Novo Imóvel
        </Typography>
        <Grid
          container
          spacing={3}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Grid
            item
            lg={20}
            md={6}
            xs={12}
          >
            <NovoImovel />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;