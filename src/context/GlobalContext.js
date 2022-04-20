import React from 'react';

const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (index) => {},
    smallCalendarMonth: null,
    setSmallCalendarMonth: (index) => {},
    daySelected: null,
    setDaySelected: (day) => {},
    showEventModal:false,
    setShowEventModal: () => {},
    dispatchCalEvent: ({type,payload}) => {},
    savedEvents: [],
    selectedEvent: null,
    setSelectedEvent: () => {},
    Labels: [],
    setLabels: () => {},
    updateLabel: () =>{},
    filteredEvents: []
});

export default GlobalContext;