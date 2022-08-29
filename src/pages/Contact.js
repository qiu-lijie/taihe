import React, { useState } from 'react';

import { Form, InputDiv, ColToRow } from './style';
import { MainImg } from '../style';
import contactJpg from '../../public/images/contact.jpg';


export const Contact = () => {
    const [formSuccess, setFormSuccess] = useState(null);

    const onSend = async (e) => {
        e.preventDefault();
        let res = await fetch('https://5wt3i7wwbena4fjkmvse7bjnrm0qnnks.lambda-url.us-east-1.on.aws/', {
            method: 'POST',
            body: JSON.stringify({
                subject: `TaiHe Website Inquiry from ${document.getElementById('id_name').value}`,
                body: `Name: ${document.getElementById('id_name').value}
Email: ${document.getElementById('id_email').value}
Phone Number: ${document.getElementById('id_phone').value}

${document.getElementById('id_msg').value}`,
            }),
        });
        console.log(res);
        res.ok ? setFormSuccess(true) : setFormSuccess(false);
    };

    return <>
        <MainImg src={contactJpg} />
        <p>
            <a href="mailto:taiheconstruction2020@gmail.com?subject=TaiHe Website Inquiry">Click here to write us an email</a>
            , or simply fill out the form below.
        </p>
        {formSuccess === null &&
            <Form onSubmit={onSend}>
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
        }
        {formSuccess === true &&
            <p>Your message has been sent. We will get back to you shortly!</p>
        }
        {formSuccess === false &&
            <p>Something went wrong, please try again later.</p>
        }
    </>;
};
