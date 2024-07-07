import css from "./OrderForm.module.css";
import { Button } from "../Button/Button";
import Calendar from "react-calendar";
import icons from "../../images/icons.svg";
import "react-calendar/dist/Calendar.css";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormErrorMessages } from "../FormErrorMessages/FormErrorMessages";

const formatDate = (date) => {
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  return date.toLocaleDateString(options);
};

export const OrderForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    date: Yup.string().required('Booking date is required'),
    comment: Yup.string(),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

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

  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log(data);
    event.target.submit();
  }

  return (
    <div className={css.wrapper}>
      <h4 className={css.title}>Book your campervan now</h4>
      <p className={css.description}>
        Stay connected! We are always ready to help you.
      </p>

      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.inputContainer}>
          <input className={css.input} type="text" name="name" placeholder="Name" aria-label="Enter your name" {...register("name")}/>
          {errors?.name && (<FormErrorMessages>{errors.name.message}</FormErrorMessages>)}
        </div>

        <div className={css.inputContainer}>
          <input className={css.input} type="email" name="email" placeholder="Email" aria-label="Enter your email" {...register("email")}/>
          {errors?.email && (<FormErrorMessages>{errors.email.message}</FormErrorMessages>)}
        </div>

        <div className={css.inputContainer}>
          <label className={css.label}>
            <input className={css.input} type="text" name="date" placeholder="Booking date" aria-label="Select the booking date" readOnly value={formatDate(calendarValue)} {...register("date")} />
            <button className={css.buttonCalendar} onClick={handleOpenCalendar} type="button">
              <svg className={css.icon} width={20} height={20}>
                <use href={`${icons}#icon-calendar`}></use>
              </svg>
            </button>
          </label>
          {errors?.date && (<FormErrorMessages>{errors.date.message}</FormErrorMessages>)}

        {isCalendarOpen && (
          <div ref={calendarRef}>
            <Calendar
              className={css.calendar}
              onChange={handleDateChange}
              value={calendarValue}
              minDate={new Date()}
              locale="en-US"
              />
          </div>
        )}
        </div>

        <div>
          <textarea
            className={css.textarea}
            type={"textarea"}
            name={"comment"}
            placeholder="Comment"
            aria-label="Enter your comment"
            {...register("comment")}
          ></textarea>
          {errors?.comment && (<FormErrorMessages>{errors.comment.message}</FormErrorMessages>)}
        </div>

        <Button type={"submit"}>Send</Button>
      </form>
    </div>
  );
};
