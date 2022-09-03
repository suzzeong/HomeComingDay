import React, { useRef, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import "./CalendarModal.css"
import dayjs from 'dayjs';
import moment from 'moment';
import { __postCalendar } from '../../redux/modules/CalendarSlice';
import { __postDate } from '../../redux/modules/DateSlice';

const CalendarModal = ({ setModalOpen }) => {
    const dispatch = useDispatch();
    // const [value, onChange] = useState(new Date())
    const {dates} = useSelector((state) => state.dates)
    console.log(dates);

    const [date, setDate] = useState({
        calendar: "",
    });
    // const {calendar} = date;
    const realCalendar = date.toString();

    const modalRef = useRef(null);

    const closeModal = (e) => {
        if (!modalRef.current.contains(e.target)) {
            setModalOpen(false);
        }
    };

    const onChange = (value) => setDate(value)

    // const callDay = (clikedDay) => { 
    //     console.log(clikedDay)
    // };

    const onsubmitHandler = (e) =>{
        e.preventDefault();
        const dates = {calendar : realCalendar}
        dispatch(__postDate(dates));
    }

    return (
        <Background onClick={closeModal}>
            <Container >
                <Wrap>
                    <CalendarWrap ref={modalRef}>
                        <Calendar
                            onChange={onChange}
                            // calendar={calendar}
                            // name="calendar"
                            // value={calendar}
                            formatDay={(locale, date) => dayjs(date).format('DD')}
                        />
                        <CalendarButton
                        type="submit"
                        onClick={onsubmitHandler}
                        >확인</CalendarButton>
                        {moment(date).format("YYYY년 MM월 DD일")}
                    </CalendarWrap>
                </Wrap>
            </Container>
        </Background>
    );
};

export default CalendarModal;

const Background = styled.div`
    position: fixed;
    /* position: absolute; */
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    /* background-color: rgba(87,87,87,0.5); */
    z-index: 10;
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  /* background-color: rgba(87,87,87,0.5); */
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex; 
    justify-content: center;
  }
`

const Wrap = styled.div`
    width: 500px;
    /* height: 100vh; */
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-color: rgba(87,87,87,0.3);
`

const CalendarWrap = styled.div`
    /* padding: 0 20px; */
    /* width: 460px; */
    width: 100%;
    height: 450x;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`

const CalendarButton = styled.button`
    width: 400px;
    height: 50px;
    margin-top: 25px;
    border-radius: 20px;
    border: none;
    color: white;
    background-color: #aaaaaa;
    font-weight: bold;
    cursor: pointer;
`