import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../components/painel-layout';
import { customers } from '../__mocks__/customers';
import { HeaderLogs } from '../components/logs/header';
import { DestinoVisitante } from '../components/logs/DestinoVisitantes';

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
        <HeaderLogs />
        <Box sx={{ mt: 3 }}>
          <DestinoVisitante customers={customers} />
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
