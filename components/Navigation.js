import Link from "next/link"
import styled from "styled-components"


const StyledNav = styled.ul `
display: flex;
justify-content: space-around;
text-align: center;
list-style: none;
background-color: lightgrey;
padding: 10px;
position: fixed;
bottom: 0;
left: 0;
right: 0;
&:hover {
    cursor: pointer;
  }`;






export default function Navigation() {
    return (
        <nav>
         <StyledNav>
            <li>
            <Link href={`/`}>Spotlight </Link>
            </li>
            <li>
            <Link href={`/art-pieces`}>Art Gallery </Link>
            </li>
            <li>
            <Link href={`/`}>Favorites </Link>
            </li>
            </StyledNav>   
            </nav>
    )
}