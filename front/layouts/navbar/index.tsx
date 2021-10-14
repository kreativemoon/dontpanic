import React, { useCallback, useState, useEffect } from 'react';
// import { LeftNavBar, UserInfo, ClosedNavBar } from './styles';
import { FullNavbar, ShrinkNavbar } from './styles';
import NavBarContent from '@pages/NavBar/navbarContent';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import Info from '@pages/NavBar/info';
import { useRecoilValue } from 'recoil';
import { userNameState, userDataState } from '../../store/basic';
import SlimeCharacter from '../../imgs/slimes/red';

const NavBar = () => {
  const userData = useRecoilValue(userDataState);
  const [showNavBar, setShowNavBar] = useState(true);
  const [selected, setSelected] = useState('home');
  // const userData = { nickname: 'E.A.T_kristine', level: 1, skills: ['html', 'css', 'javascript'] };
  // const {data, error} = useSWR('/api/users', fetcher);

  const onClickNavBar = useCallback(() => {
    setShowNavBar((prev) => !prev);
  }, []);
//   useEffect(() => {
//     if (selected !== null) {
//         let current = document.getElementById(selected!);
//         current!.style.border = "3px solid rgb(255, 255, 255)";
//     }
// }, []);

  return (
    <>
      {showNavBar ? (
        <FullNavbar>
          <div className="back-selected-btn" onClick={onClickNavBar}>
            <img src="imgs/navbar/btn-close.svg" />
          </div>
          <div className="content">
            <div className="user-info">
              <div className="slime">
                <div id="slime-img">
                  {/* <img src={`imgs/slimes/red.svg`} /> */}
                  <SlimeCharacter color={userData!.slimeColor} />
                </div>
              </div>
              <div className="user-data">
                <div id="level">Lv. {userData.level}</div>
                <div id="nickname">
                  {userData.nickname}
                  <br />
                </div>
                <ul>
                  {userData.skills.map((skill) => (
                    <li key={skill}>
                      <div id="skills">{skill}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <hr style={{ margin: '0', border: 'none', height: '1px', backgroundColor: 'black' }} />
            <div className="left-content">
              <ul>
                <li id='home'
                  onClick={() => {
                    setSelected('home');
                  }}
                >
                  <img src="imgs/navbar/ic-home-default.svg" />
                  <div id="menu-title">Home</div>
                </li>
                <li id='profile'
                  onClick={() => {
                    setSelected('profile');
                  }}
                >
                  <img src="imgs/navbar/ic-profile-default.svg" />
                  <div id="menu-title">Profile</div>
                </li>
                <li id='goal'
                  onClick={() => {
                    setSelected('goal');
                  }}
                >
                  <img src="imgs/navbar/ic-goal-default.svg" />
                  <div id="menu-title">Goal</div>
                </li>
                <li id='chat'
                  onClick={() => {
                    setSelected('chat');
                  }}
                >
                  <img src="imgs/navbar/ic-chat-default.svg" />
                  <div id="menu-title">Chat</div>
                </li>
              </ul>
            </div>
            <div className="right-content">
                <NavBarContent selected={selected} />
            </div>
          </div>
        </FullNavbar>
      ) : (
        <ShrinkNavbar>
          <div className="open-selected-btn" onClick={onClickNavBar}>
            <img src="imgs/navbar/btn-open.svg" />
          </div>
          <div className="content">
          <hr style={{ width: "100%", margin: '0', border: 'none', height: '1px', backgroundColor: 'black' }} />
            <div id="icons"
                onClick={() => {
                setShowNavBar((prev) => !prev);
                setSelected('home');
                }}
            >
                <img src="imgs/navbar/ic-home-default.svg" />
            </div>
            <div id="icons"
                onClick={() => {
                setShowNavBar((prev) => !prev);
                setSelected('profile');
                }}
            >
                <img src="imgs/navbar/ic-profile-default.svg" />
            </div>
            <div id="icons"
                onClick={() => {
                setShowNavBar((prev) => !prev);
                setSelected('goal');
                }}
            >
                <img src="imgs/navbar/ic-goal-default.svg" />
            </div>
            <div id="icons"
                onClick={() => {
                setShowNavBar((prev) => !prev);
                setSelected('chat');
                }}
            >
                <img src="imgs/navbar/ic-chat-default.svg" />
            </div>
          </div>
          
        </ShrinkNavbar>
      )}
    </>
  );
};

export default NavBar;
