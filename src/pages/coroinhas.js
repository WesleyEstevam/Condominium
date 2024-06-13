import { Box, Container } from "@mui/material";
import { ListagemCoroinhas } from "../components/coroinhas/listagem-coroinhas";
import { HeaderCoroinhas } from "../components/coroinhas/header-coroinhas";
import { DashboardLayout } from "../components/painel-layout";

const Page = () => (
  <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <HeaderCoroinhas />
        <Box sx={{ mt: 3 }}>
          <ListagemCoroinhas />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
