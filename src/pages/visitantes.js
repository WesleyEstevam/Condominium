import { Box, Container } from '@mui/material';
import { CustomerListResults } from '../components/visitantes/listagem-visitantes';
import { CustomerListToolbar } from '../components/visitantes/visitantes-header';
import { DashboardLayout } from '../components/painel-layout';
import { customers } from '../__mocks__/customers';

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
        <CustomerListToolbar />
        <Box sx={{ mt: 3 }}>
          <CustomerListResults customers={customers} />
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
