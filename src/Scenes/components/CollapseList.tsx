import { Avatar, Collapse, List, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import React, { ReactNode, useState } from 'react';

interface ICollapseListItemProps {
  title: string,
  Icon?: ReactNode,
  primaryDesc?: string,
  secondaryDesc?: string
}

interface ICollapseListProps {
  listTitle: string,
  ListIcon?: ReactNode,
  DefaultListItemIcon?: ReactNode,
  items?: ICollapseListItemProps[]
}

const useStyles = makeStyles((theme) => ({
  countBadge: {
    display: 'inline',
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    borderRadius: 4,
    backgroundColor: theme.palette.grey[300],
  }
}));

const CollapseListItem = ({title, Icon, primaryDesc, secondaryDesc}: ICollapseListItemProps) => {
  return (
    <ListItem alignItems="flex-start" button>
      <ListItemIcon><Avatar>{Icon}</Avatar></ListItemIcon>
      <ListItemText 
        primary={title}
        secondary={
          <>
            <Typography variant="body1">{primaryDesc}</Typography>
            <Typography variant="caption">{secondaryDesc}</Typography>
          </>
        }
      />
    </ListItem>
  );
};

const CollapseList = ({listTitle, ListIcon, DefaultListItemIcon, items}: ICollapseListProps) => {
  const classes = useStyles();
  
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <>
      <ListItem button onClick={() => setIsCollapsed((ps) => !ps)}>
        <ListItemIcon >{ListIcon}</ListItemIcon>
        <ListItemText>
          {listTitle}
          {
          items && items.length > 0 &&
            <div className={classes.countBadge}>{items?.length}</div>
          }
        </ListItemText>
        {isCollapsed ? <ExpandMore /> : <ExpandLess />}
      </ListItem>
      {items && 
        <Collapse in={!isCollapsed}>
          <List disablePadding>
            {items.map(({title, Icon, primaryDesc, secondaryDesc}) => (
              <CollapseListItem 
                key={`${title}-${primaryDesc}`}
                title={title}
                Icon={Icon || DefaultListItemIcon}
                primaryDesc={primaryDesc}
                secondaryDesc={secondaryDesc}
              />
            ))}
          </List>
        </Collapse>
      }
    </>
  );
};

export default CollapseList;