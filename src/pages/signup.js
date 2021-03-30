import React, { useContext, useState } from "react";
import { Form } from "../components";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from "../constants/routes";
import { useHistory } from "react-router-dom";


export default function Signup() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [firstName, setfirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName === "" || password === "" || emailAddress === "";

    const handleSignup = (event) => {
        event.preventDefault();
        return firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => {
                result.user.updateProfile({
                    displayName : firstName,
                    photoURL: Math.floor(Math.random() * 5) + 1,
                }).then(() => {
                    history.push(ROUTES.BROWSE);
                })      
            })
            .catch((error) => {
                setfirstName('');
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            });
      };

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input
                            placeholder="First name"
                            value={firstName}
                            onChange={({ target }) => setfirstName(target.value)}
                        />

                        <Form.Input
                            type = "email"
                            placeholder="Email Address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />

                        <Form.Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            autoComplete="off"
                            onChange={({ target }) => setPassword(target.value)}
                        />

                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign Up
                        </Form.Submit>

                        <Form.Text>
                            Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
                        </Form.Text>

                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA to ensure you're not a
                            bot. Learn more.
                        </Form.TextSmall>
                    </Form.Base>

                </Form>
            </HeaderContainer>
            <FooterContainer></FooterContainer>
        </>
    )
}
