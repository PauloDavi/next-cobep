import {
  Button,
  createStyles,
  ListItemIcon,
  ListItemText,
  makeStyles,
  MenuItem,
  Popover,
  Theme,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { TFunction, i18n, withTranslation } from 'next-i18next';

const languages = ['en', 'pt', 'es'];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    font: {
      color: theme.palette.common.white,
      marginLeft: 10,
    },
  })
);

const LanguageSwitcher = ({ t }: { readonly t: TFunction }): JSX.Element => {
  const { locale, push, pathname } = useRouter();

  const classes = useStyles();

  const [menu, setMenu] = useState<null | Element>(null);
  const [currentLanguage, setCurrentLanguage] = useState(1);

  useEffect(() => {
    switch (locale) {
      case 'en':
        setCurrentLanguage(0);
        i18n?.changeLanguage('en');
        break;
      case 'pt':
        setCurrentLanguage(1);
        i18n?.changeLanguage('pt');
        console.log(languages[currentLanguage]);
        break;
      case 'es':
        setCurrentLanguage(2);
        i18n?.changeLanguage('es');
        break;
      default:
        setCurrentLanguage(1);
        break;
    }
  }, [locale, currentLanguage]);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={(event) => setMenu(event.currentTarget)}
      >
        <Image
          priority
          src={`/images/flags/${languages[currentLanguage]}.svg`}
          alt={t(languages[currentLanguage])}
          width={21}
          height={21}
        />

        <Typography className={classes.font}>
          {languages[currentLanguage]}
        </Typography>
      </Button>

      <Popover
        open={Boolean(menu)}
        anchorEl={menu}
        onClose={() => setMenu(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {languages.map((lng) => (
          <MenuItem
            key={lng}
            onClick={() => {
              setMenu(null);
              push(pathname, pathname, { locale: lng });
            }}
          >
            <ListItemIcon>
              <Image
                priority
                src={`/images/flags/${lng}.svg`}
                alt={t(lng)}
                width={21}
                height={21}
              />
            </ListItemIcon>
            <ListItemText primary={t(lng)} />
          </MenuItem>
        ))}
      </Popover>
    </>
  );
};

export default withTranslation('languageSwitcher')(LanguageSwitcher);
