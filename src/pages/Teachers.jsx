import React from 'react';
import styled from 'styled-components';

const TEACHERS = [
    {
        name: '김기원',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        school: '중앙대학교 사회복지학과 2학년',
        skill: '우울증 상담',
        price: '5000',
        rate: 7.9,
    },
    {
        name: '강민경',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        school: '중앙대학교 사회복지학과 2학년',
        skill: '우울증 상담',
        price: '5000',
        rate: 7.9,
    },
    {
        name: '남도일',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        school: '중앙대학교 사회복지학과 2학년',
        skill: '우울증 상담',
        price: '5000',
        rate: 7.9,
    },
    {
        name: '오지영',
        avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        school: '중앙대학교 사회복지학과 2학년',
        skill: '우울증 상담',
        price: '5000',
        rate: 7.9,
    },
    {
        name: '김소현',
        avatar: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        school: '중앙대학교 사회복지학과 2학년',
        skill: '우울증 상담',
        price: '5000',
        rate: 7.9,
    },
    {
        name: '이기원',
        avatar: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        school: '중앙대학교 사회복지학과 2학년',
        skill: '우울증 상담',
        price: '5000',
        rate: 7.9,
    },
    {
        name: '김수이',
        avatar: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        school: '중앙대학교 사회복지학과 2학년',
        skill: '우울증 상담',
        price: '5000',
        rate: 7.9,
    },
    {
        name: '이정민',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        school: '중앙대학교 사회복지학과 2학년',
        skill: '우울증 상담',
        price: '5000',
        rate: 7.9,
    },
    {
        name: '이예진',
        avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        school: '중앙대학교 사회복지학과 2학년',
        skill: '우울증 상담',
        price: '5000',
        rate: 7.9,
    },
];

function Teachers() {
    return (
        <TeachersWrapper>
            <div>Teachers</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', justifyItems: 'center' }}>
                {TEACHERS.map((t, i) => {
                    return (
                        <div key={i}>
                            <p>{t.name}</p>
                            <img src={t.avatar} width="300" height="300" background-position="center" />
                            <p>{t.school}</p>
                            <p>{t.skill}</p>
                            <p>{t.price}</p>
                            <p>{t.rate} / 10</p>
                        </div>
                    );
                })}
            </div>
        </TeachersWrapper>
    );
}

export default Teachers;

const TeachersWrapper = styled.div`
    margin: 5px;
    border: 1px solid blue;
`;
