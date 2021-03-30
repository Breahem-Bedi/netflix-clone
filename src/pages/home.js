import React from 'react'
import { HeaderContainer } from "../containers/header";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { JumbotronContainer } from "../containers/jumbotron";
import { Feature, Optform } from "../components";

export default function home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                    <Feature.Subtitle>Watch anywhere. Cancel at any time.</Feature.Subtitle>
                    <Optform>
                        <Optform.Input placeholder="Email address"/>
                        <Optform.Button>Try it now</Optform.Button>
                        <Optform.Break />
                        <Optform.Text>Ready to watch? Enter your email to create or restart your membership</Optform.Text>
                    </Optform>
                </Feature>
            </HeaderContainer>

            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
            
        </>
    )
}
