import React, { useState, useEffect, useCallback, VFC } from 'react';
import useInput from '@hooks/useInput';
import { UserCreationContent } from './styles';
import SlimeCharacter from '../../../imgs/slimes/red';
import SlimeCharacterDefault from '../../../imgs/slimes/default';
import axios from 'axios';

interface Props {
    dispatchModalAction: (data:any) => void;
    data: {nickname: string, slimeColor: string} | null
}

const UserCreation: VFC<Props> = ({ dispatchModalAction }) => {
    const [signUpError, setSignUpError] = useState(false);
    const [signUpSuccess, setSignUpSuccess] = useState(false);
    const [mismatchError, setMismatchError] = useState(false);
    const [currentClick, setCurrentClick] = useState("default");
    const [nickname, onChangeNickname] = useInput("");
    const [slimeColor, setSlimeColor] = useState("");

    const GetClick = (e: any) => {
        if (currentClick !== "default" ) {
            let prev = document.getElementById(currentClick!)
            prev!.style.border = "";
        }
        setCurrentClick(e.target.id);
        setSlimeColor(e.target.id);
        };
    console.log(slimeColor);
    useEffect(() => {
        if (currentClick !== "default") {
            let current = document.getElementById(currentClick!);
            current!.style.border = "3px solid rgb(255, 255, 255)";
        }
    }, [currentClick]);

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            if (nickname && slimeColor) {
                dispatchModalAction({nickname: nickname, slimeColor: slimeColor });
            }
        },[nickname, slimeColor]
    )

    return (
        <>
            <UserCreationContent>
                <div className="user-creation-slime">
                    <div className="slime">{currentClick =='default' ? <SlimeCharacterDefault /> : <SlimeCharacter color={currentClick} />}</div>
                </div>
                <div className="user-creation-input-content">
                    <div className="user-creation-title">NAME</div>
                    <input placeholder="Enter Name" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname} />
                    <div className="user-creation-title">Choose a Color</div>
                    <div className="user-creation-color-choose">
                        <div onClick={GetClick} id="#06c1c1" className="color-circle" style={{backgroundColor: "rgb(6, 193, 193)"}} />
                        <div onClick={GetClick} id="#f9533b" className="color-circle" style={{backgroundColor: "rgb(249, 83, 59)"}} />
                        <div onClick={GetClick} id="#fea040" className="color-circle" style={{backgroundColor: "rgb(254, 160, 64)"}} />
                        <div onClick={GetClick} id="#ffbf2b" className="color-circle" style={{backgroundColor: "rgb(255, 191, 43)"}} />
                        <div onClick={GetClick} id="#06c17a" className="color-circle" style={{backgroundColor: "rgb(6, 193, 122)"}} />
                        <div onClick={GetClick} id="#396bf6" className="color-circle" style={{backgroundColor: "rgb(57, 107, 246)"}} />
                        <div onClick={GetClick} id="#3e579c" className="color-circle" style={{backgroundColor: "rgb(62, 87, 156)"}} />
                        <div onClick={GetClick} id="#fff7f1" className="color-circle" style={{backgroundColor: "rgb(255, 247, 241)"}} />
                        <div onClick={GetClick} id="#969696" className="color-circle" style={{backgroundColor: "rgb(150, 150, 150)"}} />
                    </div>
                    <div id="user-creation-button"><button onClick={onSubmit}>NEXT</button></div>
                </div>
            </UserCreationContent>
        </>
    );
}

export default UserCreation;

// {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
// {!nickname && <Error>닉네임을 입력해주세요.</Error>}
// {signUpError && <Error>이미 가입된 이메일입니다.</Error>}