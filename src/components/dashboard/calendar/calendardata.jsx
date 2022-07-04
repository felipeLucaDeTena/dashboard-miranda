import styled from "styled-components";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const DataContainer = styled.div`
    height: 400px;
    width: 90%;
    background-color: white;
    border-radius: 10px;
    margin-bottom: 50px;
`;
function CalendarData() {
    return <DataContainer />;
}
export default CalendarData;
