import { Card, Grid, InputAdornment, makeStyles, MenuItem, TextField } from '@material-ui/core';
import { FilterList } from '@material-ui/icons';
import { MessageFilters } from 'constants/constants';
import React from 'react';
import useMessageFilter, { MessageFilterQuery } from 'services/hooks/useMessageFilter';
import Spacer from './Spacer';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.grey[100],
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  }
}));

const FilterSelection = () => {
  const classes = useStyles();

  const [filter, setFilter] = useMessageFilter();
  const allFilters = Object.values(MessageFilters);

  // fix history issue
  const handleFilterChange = (filterQuery: MessageFilterQuery) => {
    setFilter(filterQuery);
  };

  return (
    <Grid container>
      <Grid item xs>
        <Card className={classes.card} elevation={0}>
          <Grid container>
            <Grid item>درس</Grid>
            <Grid item xs />
            <Grid item>۲۰:۳۰:۳۲</Grid>
          </Grid>
        </Card>
      </Grid>
      <Spacer orientation="v" spacing={2}/>
      <Grid item xs={3}>
        <TextField 
          value={filter.title}
          size="small" 
          variant="outlined" 
          select 
          fullWidth
          InputProps={{startAdornment: (
            <InputAdornment position="start">
              <FilterList />
            </InputAdornment>
          )}}
        >
          {allFilters.map(({title: filterTitle, query: filterQuery}) => (
            <MenuItem 
              key={filterQuery} 
              value={filterTitle} 
              onClick={() => handleFilterChange(filterQuery)}
            >
              {filterTitle}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    </Grid>
  );
};

export default FilterSelection;