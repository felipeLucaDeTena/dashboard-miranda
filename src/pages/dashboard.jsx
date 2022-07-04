import React from "react";
import styled from "styled-components";
import BookingNumbers from "../components/dashboard/booking-numbers";
import Calendar from "../components/dashboard/calendar/calendar";
import CalendarData from "../components/dashboard/calendar/calendardata";
import Review from "../components/dashboard/review";
import Chart from "../components/dashboard/stats/chart";

const Container = styled.div`
    height: 500px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

function Dashboard() {
    return (
        <>
            <BookingNumbers />
            <Container>
                <Calendar />
                <Chart />
            </Container>
            <CalendarData />
            <Review />
        </>
    );
}
export default Dashboard;
