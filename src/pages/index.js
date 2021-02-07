import React from "react"

import Layout from "../components/core/Layout"
import Image from "../components/core/Image"
import SEO from "../components/core/SEO"

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'gatsby-theme-material-ui';

import ProTip from '../components/elements/ProTip';
import Copyright from '../components/elements/Copyright';


export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Gatsby v4-beta example
        </Typography>
        <Link to="/about" color="secondary">
          Go to the about page
        </Link>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
