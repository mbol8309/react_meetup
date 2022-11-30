import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Card from "../ui/Card";
import { useMeetups } from "./MeetupsProvider";
import classes from "./NewMeetupForm.module.css";

export default function NewMeetupForm() {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const { addMeetupd } = useMeetups();
  const navigate = useNavigate()

  function submitHandler(data) {
    console.log(data)
    addMeetupd(data)
    navigate('/')
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit(submitHandler)} noValidate >
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" {
            ...register('title', {
              required: "Title required"
            })} />
          {
            errors.title &&
            <p className={classes.error}>{errors.title.message}</p>
          }
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" id="image" {
            ...register('image', {
              required: "Image required"
            })} />
          {
            errors.image &&
            <p className={classes.error}>{errors.image.message}</p>
          }
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" {
            ...register('address', {
              required: "Address required"
            })} />
          {
            errors.address &&
            <p className={classes.error}>{errors.address.message}</p>
          }
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5" {
            ...register('description', {
              required: "Description required"
            })}></textarea>
          {
            errors.description &&
            <p className={classes.error}>{errors.description.message}</p>
          }
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
