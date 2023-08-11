import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles
import styles from './calendar.module.scss'; // Import corresponding SCSS file

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const formattedDate = `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`;

  return (
    <div className={styles['page-container']}>
      <div className={styles['calendar']}>
        <div className={styles['top-bar']}>
          <div className={styles['title']}>
            <span>Calendar</span>
          </div>
        </div>
        <div className={styles['top-div']}>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline // Show the calendar inline
          />
        </div>
        <div className={styles['bottom-div']}>
          <div className={styles['bottom-top-bar']}>
            {formattedDate}  16h 15min
          </div>
          <div className={styles['record-data-div']}>record data</div>
          <div className={styles['record-data-div']}>record data</div>
          <div className={styles['record-data-div']}>record data</div>
          <div className={styles['record-data-div']}>record data</div>
          <div className={styles['record-data-div']}>record data</div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
