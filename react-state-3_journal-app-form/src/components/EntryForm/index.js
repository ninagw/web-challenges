import "./EntryForm.css";
import Button from "../Button";

export default function EntryForm({ onAddEntry }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData); // all values of all input fields

    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    // const newObject = { motto: data.motto.values, notes: data.notes.values };
    data.date = date;
    onAddEntry(date);

    event.target.reset();
    event.target.elements.motto.focus();
  }

  return (
    <form className="entry-form">
      <h2 className="entry-form__title">New Entry</h2>
      <div className="entry-form__fields">
        <div className="entry-form__field">
          <label htmlFor="motto">Motto</label>
          <input type="text" name="motto" id="motto" />
        </div>
        <div className="entry-form__field">
          <label htmlFor="notes">Notes</label>
          <textarea name="notes" id="notes" rows="4" />
        </div>
        <div className="entry-form__button-wrapper">
          <Button type="submit" onSubmit={handleSubmit}>
            Create
          </Button>
        </div>
      </div>
    </form>
  );
}
