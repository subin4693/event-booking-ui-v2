import React, { useState } from "react";
import DatePicker, { Calendar, DateObject } from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/purple.css";

const format = "MM/DD/YYYY";

const DatePickerComponent = ({ setSelectedDate }) => {
    const [dates, setDates] = useState();

    const handleDateChange = (selectedDates) => {
        const isoDates = selectedDates.map((date) =>
            date.toDate().toISOString(),
        );
        setDates(selectedDates);
        setSelectedDate(isoDates);
    };

    return (
        <div>
            &nbsp;&nbsp;<label> Date : </label>
            <br />
            <br />
            <DatePicker
                value={dates}
                onChange={handleDateChange}
                multiple
                sort
                format={format}
                minDate={new Date()}
                className="purple"
                inputClass="custom-input"
                style={{
                    width: "100%",
                    boxSizing: "border-box",
                    height: "26px",
                    padding: "25px",
                    borderRadius: "25px",
                }}
                containerStyle={{
                    width: "100%",
                }}
                calendarPosition="bottom-center"
                containerClassName="custom-date-picker-container" // Custom class for the container
            />
            <style>
                {`
          /* Ensure root variables are defined */
          :root {
          
  --rmdp-primary-purple: #80164a; /* Original Primary Color */
  --rmdp-secondary-purple: #b33973; /* Slightly lighter for secondary purposes */
  --rmdp-shadow-purple: #991d5d; /* Shadow, a little darker for contrast */
  --rmdp-today-purple: #ff006e; /* Today, bright standout color */
  --rmdp-hover-purple: #bf4c8a; /* Hover, lighter version for hover effects */
  --rmdp-deselect-purple: #cc6699; /* Deselect, slightly muted for less emphasis */
          
            --secondary-hue: 0;  
            --secondary-saturation: 0%;
            --secondary-lightness: 89.8%;
            --foreground-hue: 0;
            --foreground-saturation: 0%;
            --foreground-lightness: 20%; /* Adjust for desired text color */
          }


          .dark {
           
            --secondary-hue: 0;
            --secondary-saturation: 0%;
            --secondary-lightness: 14.9%;
            --foreground-lightness: 80%; /* Lighter text color for dark mode */
          }
 
          /* Apply custom styles */
          .custom-date-picker-container .rmdp-wrapper {
            background-color: hsl(var(--secondary-hue), var(--secondary-saturation), var(--secondary-lightness)) !important;
            
          }
          .rmdp-week-day{
            font-size:1rem;
          }

          .custom-input {
         box-shadow:
            rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
            rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
            rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
          padding: 4px 12px;
          background-color: hsl(var(--secondary-hue), var(--secondary-saturation), var(--secondary-lightness)) !important;
   
  
        }
 
          /* Ensure text colors are applied */
          .custom-date-picker-container .rmdp-day {
            transition: 500;
             font-weight:bold;
             margin:10px;
           
          color: hsl(var(--foreground-hue), var(--foreground-saturation), var(--foreground-lightness)) !important;
          }
         .rmdp-day span{
            border-radius: 16%;
          }
          .rmdp-day.rmdp-disabled span{
            color:gray;
          }
          
          /* Month and Year in header */
          .custom-date-picker-container .rmdp-header-values {
            color: hsl(var(--foreground-hue), var(--foreground-saturation), var(--foreground-lightness)) !important;
          }
        `}
            </style>
        </div>
    );
};

export default DatePickerComponent;
