import css from "./OrderForm.module.css"
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

export const OrderForm = () => {
  return (
    <div className={css.wrapper}>
      <h4 className={css.title}>Book your campervan now</h4>
      <p className={css.description}>Stay connected! We are always ready to help you.</p>

      <form className={css.form}>
        <Input type={"text"} name={"name"} placeholder={"Name"} aria-label={"Enter your name"} />
        <Input type={"email"} name={"email"} placeholder={"Email"} aria-label={"Enter your email"} />
        <textarea className={css.textarea} type={"textarea"} name={"comment"} placeholder="Comment" aria-label="Enter your comment"></textarea>
        <Button type={"submit"}>Send</Button>
      </form>
    </div>
  )
};
