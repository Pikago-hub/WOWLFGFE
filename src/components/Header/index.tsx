// Header.tsx
import { Box, Button, Container, Card, styled } from '@mui/material';
import Link from 'src/components/Link';
import Logo from 'src/components/LogoSign';

const HeaderWrapper = styled(Card)(
  ({ theme }) => `
    width: 100%;
    display: flex;
    align-items: center;
    height: ${theme.spacing(10)};
    margin-bottom: ${theme.spacing(10)};
  `
);

function Header() {
  return (
    <HeaderWrapper>
      <Container maxWidth="lg">
        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
          <Box display="flex" alignItems="center" gap={2}>
            <Logo />
            <Button component={Link} href="/" variant="text" sx={{ color: 'text.primary', fontSize: '1rem', textTransform: 'none' }}>Home</Button>
            <Button component={Link} href="/about-us" variant="text" sx={{ color: 'text.primary', fontSize: '1rem', textTransform: 'none' }}>About Us</Button>
            <Button component={Link} href="/contact" variant="text" sx={{ color: 'text.primary', fontSize: '1rem', textTransform: 'none' }}>Contact Me</Button>
          </Box>
          <Button component={Link} href="https://wowlfg.com/" variant="contained" sx={{ ml: 2 }}>Your Dashboard</Button>
        </Box>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
