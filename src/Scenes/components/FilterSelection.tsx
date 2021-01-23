import { Card, Grid, InputAdornment, makeStyles, MenuItem, TextField } from '@material-ui/core';
import { FilterList } from '@material-ui/icons';
import { MessageFilters } from 'constants/constants';
import moment from 'moment-jalaali';
import React, { useEffect, useRef, useState } from 'react';
import useMessageFilter, { MessageFilterQuery } from 'services/hooks/useMessageFilter';
import Spacer from './Spacer';

const useStyles = makeStyles((theme) => ({
  card: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  filterListItem: {
    color: theme.palette.primary.dark,
  }
}));

const FilterSelection : React.FC<{ title: string }> = ({ title }) => {
  const classes = useStyles();

  const [filter, setFilter] = useMessageFilter();
  const allFilters = Object.values(MessageFilters);
  const [currentTime, setCurrentTime] = useState('');
  const timerRef = useRef<number>();

  useEffect(() => {
    timerRef.current = window.setInterval(() => setCurrentTime(moment(new Date()).format('hh:mm:ss')), 1000);
    return () => {
      clearInterval(timerRef.current);
    };
  }, [setCurrentTime]);

  // fix history issue
  const handleFilterChange = (filterQuery: MessageFilterQuery) => {
    setFilter(filterQuery);
  };

  return (
    <Card elevation={0}>
      <Grid container>
        <Grid item xs>
          <Card className={classes.card} elevation={0}>
            <Grid container>
              <Grid item>{title}</Grid>
              <Grid item xs />
              <Grid item>{currentTime}</Grid>
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
                <FilterList className={classes.filterListItem}/>
              </InputAdornment>
            )}}
          >
            {allFilters.map(({title: filterTitle, query: filterQuery}) => (
              <MenuItem 
                key={filterQuery || 'ALL'} 
                value={filterTitle} 
                onClick={() => handleFilterChange(filterQuery)}
              >
                {filterTitle}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </Card>
  );
};

export default FilterSelection;
