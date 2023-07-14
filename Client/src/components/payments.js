import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Switch from '@material-ui/core/Switch';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundImage: 'url("nereus-assets/img/bg/pattern1.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  cardHeader: {
    paddingTop: theme.spacing(3),
  },
}));

export default function Payments(props) {
  const classes = useStyles();
  const navigate = useNavigate();

  const content = {
    'badge': 'LOREM IPSUM',
    'header-p1': 'Pricing and Planning',
    'header-p2': 'Choose a Plan that Fits Your Needs',
    'description': 'SAM offers a variety of pricing plans to help you manage your office space more efficiently. Select the plan that best suits your needs and start using SAM today.',
    'option1': 'Monthly',
    'option2': 'Annual',
    '01_title': 'LITE',
    '01_price': '$9',
    '01_suffix': ' / mo',
    '01_benefit1': '1000 sq ft Management',
    '01_benefit2': 'Basic Space Analytics',
    '01_benefit3': '1 Workspace Template',
    '01_benefit4': 'Email Support',
    '01_primary-action': 'Buy',
    '01_secondary-action': 'Learn more',
    '02_title': 'REGULAR',
    '02_price': '$49',
    '02_suffix': ' / mo',
    '02_benefit1': '5000 sq ft Management',
    '02_benefit2': 'Advanced Space Analytics',
    '02_benefit3': '5 Workspace Templates',
    '02_benefit4': 'Priority Email Support',
    '02_primary-action': 'Buy',
    '02_secondary-action': 'Learn more',
    '03_title': 'PREMIUM',
    '03_price': '$499',
    '03_suffix': ' / mo',
    '03_benefit1': 'Unlimited sq ft Management',
    '03_benefit2': 'Full Suite Space Analytics',
    '03_benefit3': 'Unlimited Workspace Templates',
    '03_benefit4': 'Dedicated Support',
    '03_primary-action': 'Buy',
    '03_secondary-action': 'Learn more',
    ...props.content
  };

  const [state, setState] = React.useState({
    checkbox: true,
  });

  const handleChange = (event) => {
    setState({ ...state, checkbox: event.target.checked });
  };

  const handleBuyButtonClick = (planType) => {
    navigate('/payment');
  };

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box py={8} textAlign="center">
          <Box mb={3}>
            <Container maxWidth="sm">
              <Typography variant="overline" color="textSecondary">{content['badge']}</Typography>
              <Typography variant="h3" component="h2" gutterBottom={true}>
                <Typography variant="h3" component="span" color="primary">{content['header-p1']} </Typography>
                <Typography variant="h3" component="span">{content['header-p2']}</Typography>
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{content['description']}</Typography>

              <div>
                <Typography variant="subtitle1" component="span">{content['option1']}</Typography>
                &nbsp; <Switch name="checkbox" color="primary" checked={state.checkbox} onChange={handleChange} /> &nbsp;
                <Typography variant="subtitle1" component="span">{content['option2']}</Typography>
              </div>
            </Container>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardHeader title={content['01_title']} className={classes.cardHeader}></CardHeader>
                <CardContent>
                  <Box px={1}>
                    <Typography variant="h3" component="h2" gutterBottom={true}>
                      {content['01_price']}
                      <Typography variant="h6" color="textSecondary" component="span">{content['01_suffix']}</Typography>
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['01_benefit1']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['01_benefit2']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['01_benefit3']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p" paragraph={true}>{content['01_benefit4']}</Typography>
                  </Box>
                  <Button variant="outlined" color="primary" onClick={() => handleBuyButtonClick('lite')}>
                    {content['01_primary-action']}
                  </Button>
                  <Box mt={2}>
                    <Link href="#" color="primary">{content['01_secondary-action']}</Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardHeader title={content['02_title']} className={classes.cardHeader}></CardHeader>
                <CardContent>
                  <Box px={1}>
                    <Typography variant="h3" component="h2" gutterBottom={true}>
                      {content['02_price']}
                      <Typography variant="h6" color="textSecondary" component="span">{content['02_suffix']}</Typography>
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['02_benefit1']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['02_benefit2']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['02_benefit3']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p" paragraph={true}>{content['02_benefit4']}</Typography>
                  </Box>
                  <Button variant="contained" color="primary" onClick={() => handleBuyButtonClick('regular')}>
                    {content['02_primary-action']}
                  </Button>
                  <Box mt={2}>
                    <Link href="#" color="primary">{content['02_secondary-action']}</Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardHeader title={content['03_title']} className={classes.cardHeader}></CardHeader >           <CardContent>
              <Box px={1}>
                <Typography variant="h3" component="h2" gutterBottom={true}>
                  {content['03_price']}
                  <Typography variant="h6" color="textSecondary" component="span">{content['03_suffix']}</Typography>
                </Typography>
                <Typography color="textSecondary" variant="subtitle1" component="p">{content['03_benefit1']}</Typography>
                <Typography color="textSecondary" variant="subtitle1" component="p">{content['03_benefit2']}</Typography>
                <Typography color="textSecondary" variant="subtitle1" component="p">{content['03_benefit3']}</Typography>
                <Typography color="textSecondary" variant="subtitle1" component="p" paragraph={true}>{content['03_benefit4']}</Typography>
              </Box>
              <Button variant="outlined" color="primary" onClick={() => handleBuyButtonClick('premium')}>
                {content['03_primary-action']}
              </Button>
              <Box mt={2}>
                <Link href="#" color="primary">{content['03_secondary-action']}</Link>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  </Container>
</section>
);
}


