import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../components/painel-layout';
import { customers } from '../__mocks__/customers';
import { ListaVeiculos } from '../components/veiculos/listagem-veiculos'
import { HeaderVeiculos } from '../components/veiculos/header'
const Page = () => (
  <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <HeaderVeiculos />
        <Box sx={{ mt: 3 }}>
          <ListaVeiculos customers={customers} />
        </Box>
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
