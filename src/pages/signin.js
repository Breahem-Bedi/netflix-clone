import React, { useContext, useState } from "react";
import { Form } from "../components";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from "../constants/routes";
import { useHistory } from "react-router-dom";


export default function Signin() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignin = (event) => {
    event.preventDefault();
    return firebase
        .auth()
        .signInWithEmailAndPassword(emailAddress, password)
        .then(() => {
            history.push(ROUTES.BROWSE);
        })

        .catch((error) => {
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        });
  };

  const isInvalid = password === "" || emailAddress === "";

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
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
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer></FooterContainer>
    </>
  );
}
