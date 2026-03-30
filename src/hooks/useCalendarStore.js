import { useDispatch, useSelector } from "react-redux";
import { onSetActiveEvent } from "../store/";
import { onAddNewEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    //TODO llegar al backend

    //Sale bien
    if (calendarEvent._id) {
      //actualizando
    } else {
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
  };

  return {
    //*Properties
    events,
    activeEvent,

    //*Methods
    setActiveEvent,
    startSavingEvent,
  };
};
