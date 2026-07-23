import Event from './interfaces';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
declare type View = 'day' | 'month' | 'week';
export interface CalendarProps {
    view: View;
    views: View[];
    events: Event[];
    disabled?: boolean;
    onDateClick?: (date: Date, allDay: boolean) => void;
    onDateRangeSelected?: (startDate: Date, endDate: Date, allDay: boolean) => void;
    onEventClick?: (event: Event) => void;
    onPrevClick?: () => void;
    onNextClick?: () => void;
    onTodayClick?: () => void;
}
declare const Calendar: {
    (props: CalendarProps): JSX.Element;
    defaultProps: {
        view: string;
        events: never[];
        views: string[];
        onPrevClick: () => undefined;
        onNextClick: () => undefined;
        onTodayClick: () => undefined;
    };
};
export { Calendar };
