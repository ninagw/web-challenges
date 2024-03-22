import styled from "styled-components";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px;
`;

const StyledButton = styled.button`
  background-color: orange;
  margin-top: 20px;
`;

export default function Form({ places }) {
  // function handleEdit(event) {
  //   event.preventDefault();

  //   const newName = event.target.name;
  //   const newLocation = event.target.location;
  //   const newImageURL = event.target.image;

  //   event.target.reset;
  //   event.target.name.focus();
  // }

  //   setPlaces([...places]);

  return (
    <>
      <h1>Add a new place:</h1>
      <StyledForm>
        <label for="name">Name:</label>
        <input id="name" name="name" />
        <label for="location">Location:</label>
        <input id="location" name="location" />
        <label for="mapURL">mapURL:</label>
        <input id="mapURL" name="mapURL" />
        <label for="image">Image:</label>
        <input id="image" name="image" />
        <label for="description">Description:</label>
        <input id="description" name="description" />
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </>
  );
}
