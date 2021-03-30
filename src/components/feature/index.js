import React from 'react'
import { Container, Subtitle, Title } from './styles/feature';

export default function Feature({ children, ...restProps }) {
    return(
        <Container {...restProps}>{children}</Container>
    );
}

Feature.Title = function FeatureTitle({children, ...restProps}){
    return(
        <Title {...restProps}>{children}</Title>
    );
}

Feature.Subtitle = function FeatureSubtitle({children, ...restProps}){
    return(
        <Subtitle {...restProps}>{children}</Subtitle>
    );
}