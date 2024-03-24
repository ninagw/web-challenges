import PlaceCard from "@/components/PlaceCard";
import Link from "next/link";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: orange;
  display: flex;
  align-items: flex-end;
`;

export default function HomePage({ places, onAddPlace }) {
  return (
    <div>
      <h1>Moin Hamburg! || Touri App</h1>
      <PlaceCard places={places} />
      <StyledButton>
        <Link href="/create">+ ADD NEW PLACE</Link>
      </StyledButton>
    </div>
  );
}
