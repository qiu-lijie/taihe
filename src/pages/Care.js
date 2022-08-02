import React from 'react';
import { MainImg } from '../style';
import careJpg from '../../public/images/care.jpg';


export const Care = () => <>
    <MainImg src={careJpg} />
    <h1>TAIHE CARE</h1>
    <p>
        Taihe creates homeowner manuals for all of its residential projects. The platform includes
        product specifications and warranties, contact information for installers and suppliers,
        emergency procedures, neighborhood services and amenities, customer service contacts, and
        other vital information.
    </p>
    <br />
    <h3>NEW HOME WARRANTY</h3>
    <p>
        Our home comes with a 2-5-10 Year New Home Warranty coverage.
        You will receive a warranty Policy from the warranty provider Pacific Home Warranty
        outlining the warranty coverage for defects on construction materials and labour.
        The Warranty coverage begins on the closing date of your suite.
    </p>
</>;
