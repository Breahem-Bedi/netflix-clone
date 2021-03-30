import React from 'react';
import { Accordian } from "../components";
import faqsData from "../fixtures/faqs.json";
import { Optform } from "../components";

export function FaqsContainer(){
    return(
        <Accordian>
            <Accordian.Title>Frequently Asked Questions</Accordian.Title>
            {faqsData.map(item =>
                <Accordian.Item>
                    <Accordian.Header key={item.id}>{item.header}</Accordian.Header>
                    <Accordian.Body>{item.body}</Accordian.Body>
                </Accordian.Item>           
            )}
            <Accordian.Item />
            <Optform>
                <Optform.Input placeholder="Email address"/>
                <Optform.Button>Try it now</Optform.Button>
                <Optform.Break />
                <Optform.Text>Ready to watch? Enter your email to create or restart your membership</Optform.Text>
            </Optform>
        </Accordian>
    )
}
