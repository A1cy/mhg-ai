import * as React from 'react';
import NextImage from 'next/image';
import TimeAgo from 'react-timeago';

import { AspectRatio, Box, Button, Card, CardContent, CardOverflow, Container, Grid, IconButton, Typography } from '@mui/joy';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LaunchIcon from '@mui/icons-material/Launch';

import { Brand } from '~/common/app.config';
import { Link } from '~/common/components/Link';
import { ROUTE_INDEX } from '~/common/app.routes';
import { animationColorBlues, animationColorRainbow } from '~/common/util/animUtils';
import { capitalizeFirstLetter } from '~/common/util/textUtils';

import { NewsItems } from './news.data';
import { beamNewsCallout } from './beam.data';


// number of news items to show by default, before the expander
const DEFAULT_NEWS_COUNT = 4;


export const newsRoadmapCallout =
  <Card variant='solid' invertedColors>
    <CardContent sx={{ gap: 2 }}>
      <Typography level='title-lg'>
        Open Roadmap
      </Typography>
      <Typography level='body-sm'>
        Take a peek at our roadmap to see what&apos;s in the pipeline.
        Discover upcoming features and let us know what excites you the most!
      </Typography>
      <Grid container spacing={1}>
        <Grid xs={12} sm={7}>
          <Button
            fullWidth variant='soft' color='primary' endDecorator={<LaunchIcon />}
            component={Link} href={Brand.URIs.OpenProject} noLinkStyle target='_blank'
          >
            Explore
          </Button>
        </Grid>
        <Grid xs={12} sm={5} sx={{ display: 'flex', flexAlign: 'center', justifyContent: 'center' }}>
          <Button
            fullWidth variant='plain' color='primary' endDecorator={<LaunchIcon />}
            component={Link} href={Brand.URIs.OpenRepo + '/issues/new?template=roadmap-request.md&title=%5BSuggestion%5D'} noLinkStyle target='_blank'
          >
            Suggest a Feature
          </Button>
        </Grid>
      </Grid>
    </CardContent>
  </Card>;


export function AppNews() {
  // state
  const [lastNewsIdx, setLastNewsIdx] = React.useState<number>(DEFAULT_NEWS_COUNT - 1);

  // news selection
  const news = NewsItems.filter((_, idx) => idx <= lastNewsIdx);
  const firstNews = news[0] ?? null;

  return (

    <Box sx={{
      flexGrow: 1,
      overflowY: 'auto',
      display: 'flex', justifyContent: 'center',
      p: { xs: 3, md: 6 },
    }}>

      <Box sx={{
        my: 'auto',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>

        <Typography level='h1' sx={{ fontSize: '2.9rem', mb: 4 }}>
          Welcome to {Brand.Title.Base} <Box component='span' sx={{ animation: `${animationColorBlues} 10s infinite`, zIndex: 1 /* perf-opt */ }}>{firstNews?.versionCode}</Box>!
        </Typography>

        <Typography sx={{ mb: 2 }} level='title-sm'>
          {capitalizeFirstLetter(Brand.Title.Base)} has been updated to version {firstNews?.versionCode}
        </Typography>

        <Box sx={{ mb: 5 }}>
          <Button
            variant='solid' color='primary' size='lg'
            component={Link} href={ROUTE_INDEX} noLinkStyle
            endDecorator='✨'
            sx={{
              boxShadow: '0 8px 24px -4px rgb(var(--joy-palette-primary-mainChannel) / 20%)',
              minWidth: 180,
            }}
          >
            Continue
          </Button>
        </Box>

        {/*<Typography level='title-sm' sx={{ mb: 1, placeSelf: 'start', ml: 1 }}>*/}
        {/*  Here is what's new:*/}
        {/*</Typography>*/}

      
        {/*<Typography sx={{ textAlign: 'center' }}>*/}
        {/*  Enjoy!*/}
        {/*  <br /><br />*/}
        {/*  -- The {Brand.Title.Base} Team*/}
        {/*</Typography>*/}

      </Box>

    </Box>
  );
}