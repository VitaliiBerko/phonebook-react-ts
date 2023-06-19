import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { IContact } from '../types/contact';

interface IProps  {
    onSubmit: (id: string)=>void;
    addContact: (id: string)=>void
}


export const ContactForm: React.FC<IProps> =({ onSubmit, addContact })=>{
    const [name, setName] = useState('');

    return(
        <>
        </>
    )
}