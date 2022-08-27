import React, { useState } from 'react';

import { Form, InputDiv, ColToRow } from './style';
import { MainImg } from '../style';
import contactJpg from '../../public/images/contact.jpg';


export const Contact = () => {
    const [formState, setFormState] = useState(null);

    return <>
        <MainImg src={contactJpg} />
        <p>
            <a href="mailto:taiheconstruction2020@gmail.com?subject=TaiHe Website Inquiry">Click here to write us an email</a>
            , or simply fill out the form below.
        </p>
        <Form onSubmit={msgSend}>
            <ColToRow>
                <InputDiv>
                    <label htmlFor='id_name'>Name</label>
                    <input type='text' id='id_name' name='name' placeholder='Name' required />
                </InputDiv>
                <InputDiv>
                    <label htmlFor='id_email'>Email</label>
                    <input type='email' id='id_email' name='email' placeholder='Email' required />
                </InputDiv>
                <InputDiv>
                    <label htmlFor='id_phone'>Phone Number</label>
                    <input type='text' id='id_phone' name='phone' placeholder='Phone Number' required />
                </InputDiv>
            </ColToRow>
            <InputDiv>
                <label htmlFor='id_msg'>Message</label>
                <textarea id='id_msg' name='message' placeholder='Message' required />
            </InputDiv>
            <button type='submit'>Send</button>
        </Form>
    </>;
};
