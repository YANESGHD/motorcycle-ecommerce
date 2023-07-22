import Image from 'next/image'
import styled from '@emotion/styled';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Selector } from '../Selector';

const options = [
  'Bikes',
  'Accesories',
  'Apparel'
]

const Sections: React.FC = () => {
  return (
    <Container>
      {options.map((section) => (
        <Typography
          variant='h6'
          component='a'
          key={section}
          sx={{
            textAlign: 'center',
            flexGrow: 1,
            textDecoration: 'none',
          }}
        >
          {section}
        </Typography>
      ))}
    </Container>
  )
}

export const Navbar: React.FC = () => {
  return (
    <AppBar position='static' color='primary' sx={{ padding: { xs: '0 10px', md: '0 70px' } }}>
      <Toolbar  sx={{ width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
        <Image
          src="/simplimuv-logo.png"
          alt="Simplimuv Logo"
          width={150}
          height={30}
          priority
        />

        <Selector />

        <IconButton>
          <Menu color='secondary' sx={{ fontSize: '30px' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

const Container = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;