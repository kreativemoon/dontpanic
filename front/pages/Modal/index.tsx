import React, { useState, FC, useReducer } from 'react';
import Modal from '@components/modal';
import Intro from '@pages/Modal/Intro';
import UserCreation from '@pages/Modal/UserCreation';
import Skills from '@pages/Modal/Skills';

const INTRO = 'INTRO';
const USER_CREATION = 'USER_CREATION';
const SKILL = 'SKILL';
const CLOSE = 'CLOSE';

interface Props {
    onCloseModal: () => void;
}

const ModalPage: FC<Props> = ({ onCloseModal }) => {
    const modalReducer = (_state: any, action: any) => {
  
        switch (action.type) {
              case INTRO:
                    return {
                      content: <Intro dispatchModalAction={() => dispatchModalAction(USER_CREATION, null) }/>,
                      show: true
                    }
                    
              case USER_CREATION:
                    return { 
                      content: <UserCreation data={action.data} dispatchModalAction={(data) => {dispatchModalAction(SKILL, data); console.log(action.data)}}/>,
                      show: true
                    }
              case SKILL:
                    return { 
                      content: <Skills userData={action.data} dispatchModalAction={() => {dispatchModalAction(CLOSE, null); onCloseModal();}} />,
                      show: true
                    }
              case CLOSE:
                  return { 
                      content: '',
                      confirmButtonText: '',
                      confirmButtonAction: () => console.log('Session(s) requested.'),
                      show: false
                  }
  
        }
  }
    const [showConfirmCallToAction, setshowConfirmCallToAction] = useState(true);
    const [modalState, modalDispatch] = useReducer(modalReducer, {
        content: <Intro dispatchModalAction={() => dispatchModalAction(USER_CREATION, null) }/>,
        show: true
    }
    )

    
    const dispatchModalAction = (action: string, data: {nickname: string, slimeColor: string} | null) => {
        modalDispatch({
          type: action,
          data: {
              nickname: data?.nickname,
              slimeColor: data?.slimeColor
          }
        })
    }

    // const closeModalHandler = () => {
    //     modalDispatch({
    //         type: CLOSE
    //     })
    // }
    
    return (
        <>
            <Modal
                // showConfirmCallToAction={showConfirmCallToAction}
                show={modalState!.show}
                // close={closeModalHandler}
                // confirmButtonText={modalState!.confirmButtonText}
                // confirmButtonAction={modalState!.confirmButtonAction}
                >
                {modalState!.content}
             </Modal>
        </>
    );
}

export default ModalPage;

