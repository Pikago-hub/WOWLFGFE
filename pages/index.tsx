import {
  Typography,
  Box,
  Card,
  Container,
  Button,
  styled
} from '@mui/material';
import type { ReactElement } from 'react';
import BaseLayout from 'src/layouts/BaseLayout';

import Link from 'src/components/Link';
import Head from 'next/head';
import Logo from 'src/components/LogoSign';
import Hero from 'src/content/Overview/Hero';

const HeaderWrapper = styled(Card)(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  height: ${theme.spacing(10)};
  margin-bottom: ${theme.spacing(10)};
`
);

const OverviewWrapper = styled(Box)(
  ({ theme }) => `
    overflow: auto;
    background: ${theme.palette.common.white};
    flex: 1;
    overflow-x: hidden;
`
);

function Overview() {
  return (
    <OverviewWrapper>
      <Head>
        <title>WOW LFG</title>
      </Head>
      <HeaderWrapper>
        <Container maxWidth="lg">
          <Box display="flex" alignItems="center">
            <Logo />
            <Box display="flex" alignItems="center" gap={2} ml={4}>
              <Button 
                component={Link} 
                href="/" 
                variant="text" 
                sx={{ color: 'text.primary', fontSize: '1rem', textTransform: 'none' }} 
              >
                Home
              </Button>
              <Button 
                component={Link} 
                href="/about-us" 
                variant="text" 
                sx={{ color: 'text.primary', fontSize: '1rem', textTransform: 'none' }} 
              >
                About Us
              </Button>
              <Button 
                component={Link} 
                href="/contact" 
                variant="text" 
                sx={{ color: 'text.primary', fontSize: '1rem', textTransform: 'none' }} 
              >
                Contact Me
              </Button>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              flex={1}
            >
              <Box />
              <Box>
                <Button
                  component={Link}
                  href="https://wowlfg.com/"
                  variant="contained"
                  sx={{ ml: 2 }}
                >
                  Your Dashboard
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </HeaderWrapper>
      <Hero />
      <Container maxWidth="lg" sx={{ mt: 8 }}>
  <Typography textAlign="center" variant="subtitle1">
    Modified by{' '}
    <Link
      href="https://www.jerryzywu.com/" 
      target="_blank"
      rel="noopener noreferrer"
    >
      Pikago
    </Link>
    {' '}based on a template from{' '}
    <Link
      href="https://bloomui.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      BloomUI.com
    </Link>
  </Typography>
</Container>

    </OverviewWrapper>
  );
}

export default Overview;

Overview.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
