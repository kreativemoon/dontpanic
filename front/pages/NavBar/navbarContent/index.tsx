import React, { FC, useCallback, useState } from 'react';
import Home from '@pages/NavBar/home';
import Goal from '@pages/NavBar/goal';
import Profile from '@pages/NavBar/profile';
import Chat from '@pages/NavBar/chat';

interface Props {
    selected: string;
}

const NavBarContent: FC<Props> = ({ selected }) => {

    return (
        <div>
            {
                (selected === 'home' && <Home />) ||
                (selected === 'profile' && <Profile />) ||
                (selected === 'goal' && <Goal />) ||
                (selected === 'chat' && <Chat />)
            }
        </div>
  );
};

export default NavBarContent;