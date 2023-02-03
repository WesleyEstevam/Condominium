import { Box, Card, CardContent, CardHeader, Divider, Typography, useTheme } from '@mui/material';

export const CameraPortariaPrincipal = () => {

  return (
    <Card>
      <CardHeader title="Portaria Principal" />
      <Divider />
      <CardContent>
        <img 
          src='https://www.gifsengracados.com.br/wp-content/uploads/2010/12/estacionando-carro-fail.gif'
          style={{
            width: 600
          }}
        
        />
      </CardContent>
    </Card>
  );
};
