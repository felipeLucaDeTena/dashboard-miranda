import styled from "styled-components";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const CalendarContainer = styled.div`
    background-color: white;
    height: 90%;
    width: 47%;
    border-radius: 10px;
`;
function Calendar() {
    return (
        <CalendarContainer>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
            />
        </CalendarContainer>
    );
}
export default Calendar;
