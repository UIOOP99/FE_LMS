import { Collapse, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import React, { ReactNode, useState } from 'react';


interface ICollapseListProps {
  listTitle: string,
  ListIcon?: ReactNode,
  ListComponent: ReactNode,
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
    backgroundColor: theme.palette.grey[300],
  }
}));

const CollapseList = ({listTitle, ListIcon, ListComponent, listCount}: ICollapseListProps) => {
  const classes = useStyles();
  
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <>
      <ListItem button onClick={() => setIsCollapsed((ps) => !ps)}>
        <ListItemIcon >{ListIcon}</ListItemIcon>
        <ListItemText>
          {listTitle}
          <div className={classes.countBadge}>{listCount}</div>
        </ListItemText>
        {isCollapsed ? <ExpandMore /> : <ExpandLess />}
      </ListItem>
      {ListComponent && 
        <Collapse in={!isCollapsed}>
          {ListComponent}
        </Collapse>
      }
    </>
  );
};

export default CollapseList;