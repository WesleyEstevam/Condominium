import { Box, Container, Grid, Typography } from '@mui/material';
import { DashboardLayout } from '../../components/painel-layout';
import { PerfilMorador } from '../../components/moradores/perfil-morador';
import { NovoMorador } from '../../components/moradores/cadastro-morador'

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
          Novo Morador
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
            <PerfilMorador />
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
            <NovoMorador />
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
