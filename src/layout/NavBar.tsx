import React, { FunctionComponent, useCallback, useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useRouter } from 'next/router';
import AppIcon from '../components/AppIcon';
import { LinkToPage } from '../utils/type';

interface Props {
  items: Array<LinkToPage>;
}

/**
 * Renders horizontal Navigation Bar using MUI BottomNavigation component
 * @component NavBar
 */
const NavBar: FunctionComponent<Props> = ({ items }) => {
  const router = useRouter();

  const onNavigationChange = useCallback(
    (event: React.ChangeEvent<{}>, newValue: string) => {
      router.push(newValue);
    },
    [router]
  );

  return (
    <BottomNavigation
      value={router.pathname} // Automatically highlights bottom navigation for current page
      showLabels // Always show labels on bottom navigation, otherwise only for active page
      onChange={onNavigationChange}
    >
      {items.map(({ title, path, icon }) => (
        <BottomNavigationAction key={`${title}-${path}`} label={title} value={path} icon={<AppIcon icon={icon} />} />
      ))}
    </BottomNavigation>
  );
};

export default NavBar;
