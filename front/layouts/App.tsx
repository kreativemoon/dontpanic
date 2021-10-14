import React, { useState, useCallback } from 'react';
import loadable from '@loadable/component';
import { Switch, Route } from 'react-router-dom';
import { BackGround  } from './styles';
const ModalPage = loadable(() => import('@pages/Modal'));
const Map = loadable(() => import('@pages/Map'));
const CodeShare = loadable(() => import('@pages/CodeShare'));
const NavBar = loadable(() => import('@layouts/navbar'));
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

const App = () => {
    const [showCreateWorkspaceModal, setShowCreateWorkspaceModal] = useState(true);
    const onCloseModal = useCallback(() => {
      setShowCreateWorkspaceModal(false);
    }, []);

    return (
        <RecoilRoot>
        <div style={{"width":"100%","height":"100%","backgroundColor":"rgb(32, 37, 64)","WebkitBoxAlign":"center","alignItems":"center","WebkitBoxPack":"center","justifyContent":"center","overflowY":"auto","padding":"0px"}}>
            <ModalPage onCloseModal={onCloseModal} />
        {/* </div> */}
            { !showCreateWorkspaceModal &&
                <BackGround>
                    <NavBar />
                    <Map />
                        {/* <Switch>
                            <Route path="/map" component={Map} />
                            <Route path="/codeshare" component={CodeShare} />
                        </Switch> */}
                </BackGround>
            }
            </div>
            </RecoilRoot>
    );
};

export default App