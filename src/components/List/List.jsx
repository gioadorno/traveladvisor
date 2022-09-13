import { useState, useEffect, createRef, useRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

import useStyles from './styles';

const List = ({ places, childClicked, isLoading, type, setType, rating, setRating }) => {
  const classes = useStyles();

  

  const [ elRefs, setElRefs ] = useState([]);

  useEffect(() => {
    const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef());


    setElRefs(refs);
  }, [places])



  return (
    <div className={classes.container}>
      <Typography variant='h4'>
        Restaurants, Hotels & Attractions around you
      </Typography>
      <div style={{ backgroundColor: 'white', width: 'full', display: 'flex' }}>
        <FormControl sx={{ width: '150px' }} variant='standard' className={classes.formControl}>
          <InputLabel>
          Type
          </InputLabel>
          <Select value={type} onChange={(e) => setType(e.target.value)}>
            <MenuItem value='restaurants'>
              Restaurants
            </MenuItem>
            <MenuItem value='hotels'>
              Hotels
            </MenuItem>
            <MenuItem value='attractions'>
              Attractions
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ marginLeft: '1em', width: '150px' }} className={classes.formControl}>
          <InputLabel>
          Rating
          </InputLabel>
          <Select variant='standard' sx={{ width: '100%' }} value={rating} onChange={(e) => setRating(e.target.value)}>
            <MenuItem value={0}>
              All Ratings
            </MenuItem>
            <MenuItem value={3}>
              Above 3.0
            </MenuItem>
            <MenuItem value={4}>
              Above 4.0
            </MenuItem>
            <MenuItem value={4.5}>
              Above 4.5
            </MenuItem>
          </Select>
        </FormControl>

        </div>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size='5rem' />
        </div>
      ) : (
        
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
              <PlaceDetails
              selected={Number(childClicked) === i}
              refProp={elRefs[i]}
              place={place} />
          </Grid>
        ))}
      </Grid>
      )
    }
    </div>
  )
}

export default List