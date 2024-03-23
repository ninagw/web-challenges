import styled from "styled-components";
import { useRouter } from "next/router";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px;
`;

const StyledButton = styled.button`
  background-color: orange;
  margin-top: 20px;
`;

export default function Form({ places, onSubmit }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newPlaceData = Object.fromEntries(formData);

    console.log("NEW_PLACE_DATA: ", newPlaceData);

    // onAddPlace(newPlaceData);
    onSubmit(newPlaceData);
    router.push("/");
  }

  // KRISCHANS LÖSUNG:
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);
  //   const data = Object.fromEntries(formData);
  //   if (onAddPlace) {
  //     onAddPlace(data);
  //   } else if (onEditPlace) {
  //     onEditPlace(id, data);
  //   }
  //   router.push("/");
  // }

  return (
    <>
      <h1>Add a new place:</h1>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" />
        <label htmlFor="location">Location:</label>
        <input id="location" name="location" />
        <label htmlFor="mapURL">mapURL:</label>
        <input id="mapURL" name="mapURL" />
        <label htmlFor="image">Image:</label>
        <input id="image" name="image" />
        <label htmlFor="description">Description:</label>
        <input id="description" name="description" />
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </>
  );
}
