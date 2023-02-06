import { Box, Container, Grid, Typography } from '@mui/material';
import { DashboardLayout } from '../../components/painel-layout';
import { PerfilVisitante } from '../../components/visitantes/perfil-visitante';
import { NovoVisitante } from '../../components/visitantes/cadastro-visitante'

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
          sx={{ mb: 3 }}
          variant="h4"
        >
          Novo visitante
        </Typography>
        <Grid
          container
          spacing={3}
        >

          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <PerfilVisitante />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
        >

          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <NovoVisitante />
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
