import { Card, Collapse, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import React, { ComponentType, ReactNode, useState } from 'react';
import { farsiNumbers } from 'services/utils/i18nUtils';


interface ICollapseListProps {
  listTitle: string,
  ListIcon?: ReactNode,
  ListComponent: ComponentType,
  listCount: number,
}

const useStyles = makeStyles((theme) => ({
  countBadge: {
    display: 'inline',
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    borderRadius: 4,
    backgroundColor: theme.palette.secondary.light,
  },
  darkPrimaryicon: {
    color: theme.palette.primary.dark,
  }
}));

const CollapseList = ({listTitle, ListIcon, ListComponent, listCount}: ICollapseListProps) => {
  const classes = useStyles();
  
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <Card elevation={0}>
      <ListItem button onClick={() => setIsCollapsed((ps) => !ps)}>
        <ListItemIcon className={classes.darkPrimaryicon}>{ListIcon}</ListItemIcon>
        <ListItemText>
          {listTitle}
          <div className={classes.countBadge}>{farsiNumbers(listCount)}</div>
        </ListItemText>
        {isCollapsed ? <ExpandMore className={classes.darkPrimaryicon}/> : <ExpandLess className={classes.darkPrimaryicon}/>}
      </ListItem>
      {ListComponent && 
        <Collapse in={!isCollapsed}>
          <ListComponent />
        </Collapse>
      }
    </Card>
  );
};

export default CollapseList;