import {
  Typography,
  Box,
  Container,
  styled
} from '@mui/material';
import type { ReactElement } from 'react';
import BaseLayout from 'src/layouts/BaseLayout';

import Link from 'src/components/Link';
import Head from 'next/head';
import Hero from 'src/content/Overview/Hero';
import Header from 'src/components/Header'; 

// const HeaderWrapper = styled(Card)(
//   ({ theme }) => `
//   width: 100%;
//   display: flex;
//   align-items: center;
//   height: ${theme.spacing(10)};
//   margin-bottom: ${theme.spacing(10)};
// `
// );

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
      <Header />
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
