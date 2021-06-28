import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { TeachersWrapper, TeachersContainer, TeachersTitle, TeacherItem, TeacherImg } from '../theme/Layout';

function Teachers() {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/teachers').then((response) => {
            console.log('response: ', response);
            setTeachers(response.data);
        });
    }, []);

    return (
        <TeachersWrapper>
            {/* <TeachersTitle>Teachers</TeachersTitle> */}
            <TeachersContainer>
                {teachers.map((t, i) => {
                    return (
                        <TeacherItem key={i}>
                            <p>{t.name}</p>
                            <TeacherImg src={t.avatar} width="100%" height="" background-position="center" />
                            <p>{t.school}</p>
                            <p>{t.skill}</p>
                            <p>{t.price}</p>
                            <p>{t.rate} / 10</p>
                        </TeacherItem>
                    );
                })}
            </TeachersContainer>
        </TeachersWrapper>
    );
}

export default Teachers;
