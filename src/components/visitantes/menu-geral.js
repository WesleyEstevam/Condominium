import { Card, Box } from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import HomeIcon from '@mui/icons-material/Home';
import { Button } from "@mui/material";
import Link from "next/link";

//TELA AINDA EM TESTES
export function MenuGeral() {


    return (
        <Box>
            <Card
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '15px',
                    padding: '10px'
                }}
            >
                <Button
                    color="error"
                    variant="outlined"
                >
                    <DeleteForeverIcon />
                </Button>
                <Link href="../telas_acao/visitante/alocarDestino">
                    <Button
                        color="warning"
                        variant="outlined"
                    >
                        <HomeIcon />
                    </Button>
                </Link>

            </Card>
        </Box>
    )
}