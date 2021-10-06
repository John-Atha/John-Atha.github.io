import React, { useState } from 'react';
import '../App.css';
import { Account, AccountImg, UnLockButton, LoginContainer } from './styles';
import user_icon from '../images/user-icon.png';
import { Spinner } from 'react-bootstrap';

function Splash(props) {
    const [unlocked, setUnlocked] = useState(false);
    const [logged, setLogged] = useState(false);

    const unlock = () => {
        setUnlocked(true);
    }

    const login = () => {
        setLogged(true);
        sessionStorage.setItem('visited', true);
        setTimeout(() => {
            props.update();
        }, 1000)
    }

    return (
        <div className='Splash' style={{'textAlign': 'center', 'color': 'lightgrey'}}>
            {!logged && !unlocked && 
                <LoginContainer>
                    <h1 style={{'textAlign': 'center'}}>{new Date().toString().slice(0, 15)}</h1>
                    <h1 style={{'textAlign': 'center'}}>{new Date().toString().slice(15, 21)}</h1>
                    <UnLockButton onClick={unlock}>
                        Click here to unlock
                    </UnLockButton>
                </LoginContainer>
            }
            {!logged && unlocked &&
                <LoginContainer>
                    <h2>Choose an account</h2>
                    <Account onClick={login}>
                        <AccountImg src={user_icon} />
                        <h5 style={{'margin': 'auto 10px', 'height': 'min-content'}}>Guest</h5>
                    </Account>

                </LoginContainer>
            }
            {logged &&
                <LoginContainer>
                    <Spinner animation="border" role="status" variant='danger' />
                </LoginContainer>
                
            }
        </div>
    )
}

export default Splash;