import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  styled
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldAlt,
  faExchangeAlt,
  faRobot
} from '@fortawesome/free-solid-svg-icons';

import Link from 'src/components/Link';

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);

const LabelWrapper = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.colors.success.main};
    color: ${theme.palette.success.contrastText};
    font-weight: bold;
    border-radius: 30px;
    text-transform: uppercase;
    display: inline-block;
    font-size: ${theme.typography.pxToRem(11)};
    padding: ${theme.spacing(0.5)} ${theme.spacing(1.5)};
    margin-bottom: ${theme.spacing(2)};
`
);

// const MuiAvatar = styled(Box)(
//   ({ theme }) => `
//     width: ${theme.spacing(8)};
//     height: ${theme.spacing(8)};
//     border-radius: ${theme.general.borderRadius};
//     background-color: #e5f7ff;
//     flex-shrink: 0;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin: 0 auto ${theme.spacing(2)};

//     img {
//       width: 60%;
//       height: 60%;
//       display: block;
//     }
// `
// );

// const TsAvatar = styled(Box)(
//   ({ theme }) => `
//     width: ${theme.spacing(8)};
//     height: ${theme.spacing(8)};
//     border-radius: ${theme.general.borderRadius};
//     background-color: #dfebf6;
//     flex-shrink: 0;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin: 0 auto ${theme.spacing(2)};

//     img {
//       width: 60%;
//       height: 60%;
//       display: block;
//     }
// `
// );

// const NextJsAvatar = styled(Box)(
//   ({ theme }) => `
//   width: ${theme.spacing(8)};
//   height: ${theme.spacing(8)};
//   border-radius: ${theme.general.borderRadius};
//   background-color: #dfebf6;
//   flex-shrink: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 0 auto ${theme.spacing(2)};

//     img {
//       width: 60%;
//       height: 60%;
//       display: block;
//     }
// `
// );

function Hero() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={10} lg={8} mx="auto">
          <LabelWrapper color="success">Version 0.1</LabelWrapper>
          <TypographyH1 sx={{ mb: 2 }} variant="h1">
            WOW LFG Official Wesbite
          </TypographyH1>
          <TypographyH2
            sx={{ lineHeight: 1.5, pb: 4 }}
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
            WoW LFG is a World of Warcraft community and the main hub of Huokan
            Bot
          </TypographyH2>
          <Button
            component={Link}
            href="https://wowlfg.com/"
            size="large"
            variant="contained"
          >
            Login to your Dashboard
          </Button>
          <Button
            sx={{ ml: 2 }}
            component="a"
            target="_blank"
            rel="noopener"
            href="https://discord.gg/huokan"
            size="large"
            variant="text"
          >
            Our Discord Channel
          </Button>
          <Grid container spacing={3} mt={5}>
            <Grid item md={4}>
              <Box sx={{ pb: 2 }}>
                <FontAwesomeIcon icon={faShieldAlt} size="4x" />
              </Box>
              <Typography variant="h4">
                <Box sx={{ pb: 2 }}>
                  <b>WoW Look for Booster (LFB)</b>
                </Box>
                <Typography component="span" variant="subtitle2">
                  WoW LFG is fully committed to the Discord and WoW terms of
                  service, to avoid any potential harm to anyone's account.
                </Typography>
              </Typography>
            </Grid>
            <Grid item md={4}>
              <Box sx={{ pb: 2 }}>
                <FontAwesomeIcon icon={faExchangeAlt} size="4x" />
              </Box>
              <Typography variant="h4">
                <Box sx={{ pb: 2 }}>
                  <b>Gold Swaps</b>
                </Box>
                <Typography component="span" variant="subtitle2">
                  WoW LFG IS NOT A BOOSTING COMMUNITY and we are NOT offering
                  any sort boosting, matchmaking, escrow, etc.
                </Typography>
              </Typography>
            </Grid>
            <Grid item md={4}>
              <Box sx={{ pb: 2 }}>
                <FontAwesomeIcon icon={faRobot} size="4x" />
              </Box>
              <Typography variant="h4">
                <Box sx={{ pb: 2 }}>
                  <b>Huokan Bot support</b>
                </Box>
                <Typography component="span" variant="subtitle2">
                  We don't support ANY forms of in-game advertisement, we don't
                  have a price list, we don't have advertisers, and we don't pay
                  anyone
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;
