import styled from "styled-components";
import Image from "next/image";

const StyledCardContainer = styled.ul`
  background-color: beige;
  padding: 20px;
`;

const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;

export default function PlaceCard({ places }) {
  return (
    <StyledCardContainer>
      {places.map((place) => (
        <ListItem key={place.id}>
          <Image src={place.image} alt={place.name} height={250} width={350} />
          <div>{place.name}</div>
          <div>{place.location}</div>
        </ListItem>
      ))}
    </StyledCardContainer>
  );
}
