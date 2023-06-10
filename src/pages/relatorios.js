import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../components/painel-layout';
import { Relatorios } from '../components/relatorios/relatorios'

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
        <Box>
          <Relatorios />
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
