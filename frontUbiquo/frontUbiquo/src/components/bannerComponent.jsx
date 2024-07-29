import { Container, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';



const BannerComponent = ({ title, subTitle }) => {
    return (
        <>
   
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 5, sm: 10 },
            pb: { xs: 8, sm: 5 },
          }}
        >
            <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
            <Typography variant="h1" gutterBottom>
                {title}
            </Typography>
            </Stack>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              alignSelf="center"
              spacing={1}
              useFlexGap
              sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
            >
            <Typography variant="h3" gutterBottom>
                {subTitle}
            </Typography>
            </Stack>
            </Container>
        </>
    )
}

export default BannerComponent