import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import { Button, MenuItem, Typography, Menu } from '@material-ui/core';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';
import Link from 'next/link';

interface MenuProps {
  children: {
    menuTitleTranslate: string;
    pageURL: string;
  }[];
  menuTitleTranslate: string;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    popover: {
      marginTop: 48,
      '&:before': {
        content: '',
        position: 'absolute',
        top: '-20px',
        right: '5px',
        borderBottom: '10px solid black',
        borderRight: '10px solid transparent',
        borderLeft: '10px solid transparent',
        borderTop: '10px solid transparent',
        zIndex: 10,
      },
    },
    paper: {
      padding: theme.spacing(1),
    },
  })
);

const MyMenu = ({ children, menuTitleTranslate }: MenuProps) => {
  const router = useRouter();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleRequestClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Button
        variant="text"
        color="inherit"
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        className="flex items-center"
      >
        <Typography>{menuTitleTranslate}</Typography>
        {open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={open}
        classes={{ paper: classes.popover }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onMouseLeave={handleRequestClose}
        onClose={handleRequestClose}
      >
        {children.map((child) => (
          <MenuItem
            key={child.menuTitleTranslate}
            onClick={(e) => setAnchorEl(open ? null : e.currentTarget)}
          >
            <Link href={child.pageURL || '/'}>{child.menuTitleTranslate}</Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MyMenu;
