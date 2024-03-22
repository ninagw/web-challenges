import PlaceCard from "@/components/PlaceCard";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled.a`
  display: flex;
  border: 2px;
  background-color: orange;
`;

export default function HomePage({ places, onAddPlace }) {
  return (
    <div>
      <h1>Moin Hamburg! || Touri App</h1>
      <PlaceCard places={places} />
      <StyledLink href="/create">+ create new place</StyledLink>
    </div>
  );
}
