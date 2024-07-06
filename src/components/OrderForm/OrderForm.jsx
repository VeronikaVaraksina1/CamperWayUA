import css from "./OrderForm.module.css";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import Calendar from "react-calendar";
import icons from "../../images/icons.svg";
import "react-calendar/dist/Calendar.css";
import { useEffect, useRef, useState } from "react";

const formatDate = (date) => {
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  return date.toLocaleDateString("uk-UA", options);
};

export const OrderForm = () => {
  const [calendarValue, setCalendarValue] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarRef = useRef(null);

  const handleDateChange = (date) => {
    setCalendarValue(date);
    setIsCalendarOpen(false);
  };

  const handleOpenCalendar = () => {
    setIsCalendarOpen(true);
  };

  const handleClickOutside = (event) => {
    if (calendarRef.current && !calendarRef.current.contains(event.target)) {
      setIsCalendarOpen(false);
    }
  };

  useEffect(() => {
    if (isCalendarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCalendarOpen]);

  return (
    <div className={css.wrapper}>
      <h4 className={css.title}>Book your campervan now</h4>
      <p className={css.description}>
        Stay connected! We are always ready to help you.
      </p>

      <form className={css.form}>
        <Input
          type={"text"}
          name={"name"}
          placeholder={"Name"}
          aria-label={"Enter your name"}
        />
        <Input
          type={"email"}
          name={"email"}
          placeholder={"Email"}
          aria-label={"Enter your email"}
        />
        <label className={css.label}>
          <Input
            type={"text"}
            value={formatDate(calendarValue)}
            readOnly
            name={"calendar"}
            placeholder={"Booking date"}
            aria-label={"Select the booking date"}
          />
          <button className={css.buttonCalendar} onClick={handleOpenCalendar} type="button">
            <svg className={css.icon} width={20} height={20}>
              <use href={`${icons}#icon-calendar`}></use>
            </svg>
          </button>
        </label>
        {isCalendarOpen && (
          <div ref={calendarRef}>
            <Calendar
              className={css.calendar}
              onChange={handleDateChange}
              value={calendarValue}
              minDate={new Date()}
            />
          </div>
        )}
        <textarea
          className={css.textarea}
          type={"textarea"}
          name={"comment"}
          placeholder="Comment"
          aria-label="Enter your comment"
        ></textarea>
        <Button type={"submit"}>Send</Button>
      </form>
    </div>
  );
};
