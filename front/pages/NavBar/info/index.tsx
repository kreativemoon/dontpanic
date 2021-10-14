import React, { useState} from 'react';
import axios from 'axios';
import { SlimeCharacter, UserData, UsersSkills } from './styles';

const Info = () => {
  const nickname = 'E.A.T_kristine';
  const slimeColor = 'red';
  const level = 1;
  const skills = ['HTML', 'CSS', 'Javascript']
    // const [nickname, setNickname] = useState('');
    // axios
    // .get('/api/users', {
    //   withCredentials: true,
    // })
    // .then((response) => {
    //     response.data;
    //     setNickname(response.data.nickname);
    //     console.log(response.data);});

    return (
        <>
          <SlimeCharacter>
            <img style={{"display":"flex","width": "90px"}} src={`imgs/slimes/${slimeColor}.svg`} />
          </SlimeCharacter>
          <UserData>
            <div id="level">Lv. {level}</div>
            <div id="title">{nickname}</div>
            <ul style={{listStyle: "none", "display": "flex"}}>
                {skills.map(skill => (
                <li key={skill} style={{"paddingRight": "10px"}}>
                    <UsersSkills>
                        <div style={{padding: "5px 25px", "borderRadius": "29.3px", border: "solid 2px #6c6c6c", color: "#6c6c6c"}}>{skill}</div>
                    </UsersSkills>
                </li>
                ))}
            </ul>
          </UserData>
        </>
  );
};

export default Info;