import React, { useState, useEffect, useCallback, VFC } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import { SkillsContent, Skill } from './styles';
import SlimeCharacter from '../../../imgs/slimes/red';
import { useRecoilState } from 'recoil';
import { userNameState, userDataState } from '../../../store/basic';

interface Props {
    dispatchModalAction: () => void;
    userData: { nickname: string, slimeColor: string } | null;
}

const Skills: VFC<Props> = ({ userData, dispatchModalAction }) => {
    // const Skills = () => {
    // const {data, error} = useSWR('/api/users', fetcher);
    const [data, setData] = useRecoilState(userDataState)
    const skills = ['html', 'css', 'javascript']
    const selectedSkills: any[] = []
    const GetClick = useCallback(
        (e) => {
            e.preventDefault();

            if (e.target.className == 'selected') {
                e.target.className = 'unselected';
                e.target.style.border = "solid 9px #6c6c6c";
                e.target.style.color = "#6c6c6c";
            }
            else if (e.target.className == 'unselected') {
                e.target.className = 'selected'
                e.target.style.border = "solid 9px #fff";
                e.target.style.color = "#fff";
            }
        },
        [],
    )

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            // axios
            //   .post('/api/users', { nickname, slimeColor }, {withCredentials: true})
            //   .then(() => {
            //     console.log("axios post");
            //     setSignUpSuccess(true);
            //     dispatchModalAction();
            //   })
            //   .catch((error) => {
            //     console.log(error.response?.data);
            //     setSignUpError(error.response?.data?.code === 403);
            //   });
            //   }
            const d = {
                nickname: userData!.nickname,
                slimeColor: userData!.slimeColor,
                level: 0,
                skills: skills
            }
            setData(d);
            dispatchModalAction();
        },
        [],
    );
    return (
        <form onSubmit={onSubmit}>
            <SkillsContent>
                <div className="skills-slime">
                    <div className="slime">
                        <SlimeCharacter color={userData!.slimeColor} />
                    </div>
                </div>
                <div className="skills-content">
                    <div className="skills-title">Preferred skills (select)</div>
                    <ul style={{ listStyle: "none", "display": "flex" }}>
                        {skills.map(skill => (
                            <li key={skill} style={{ "paddingRight": "10px" }}>
                                <Skill><div className="unselected" id={skill} onClick={GetClick} style={{ padding: "15px 55px", "borderRadius": "60.8px", "cursor": "pointer", border: "solid 9px #6c6c6c", color: "#6c6c6c" }}>{skill}</div></Skill>
                            </li>
                        ))}
                    </ul>
                    <div id="skills-button"><button onClick={onSubmit}>START</button></div>
                </div>
            </SkillsContent>

        </form>

    );
}

export default Skills;