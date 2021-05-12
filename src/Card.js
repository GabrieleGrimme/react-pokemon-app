import getColor from './lib/Color';
import styled from 'styled-components/macro';
import Pokeball from './images/pokeball.svg';
export default function Card(props) {
  // const name = props.name;
  // const type = props.type
  const { name, type, sendToProfessorEich } = props;
  return (
    <CardWrapper background={getColor(type)}>
      <h2>{name}</h2>
      <p>{type}</p>
      <button onClick={() => sendToProfessorEich(name)}>
        <img
          src={Pokeball}
          width="30"
          height="30"
          alt="Catch pokemon and add to pokeball"
        />
      </button>
    </CardWrapper>
  );
}
const CardWrapper = styled.article`
  background: ${(props) => props.background};
  color: ivory;
  padding: 0.3rem;
  margin: 0.2rem;
  border-radius: 0.5rem;
  display: grid;
  place-items: center;
  h2,
  p {
    text-shadow: 0 -0.5px 2px lightslategray;
  }
  button {
    border: none;
    background: transparent;
    cursor: pointer;
    transition: transform ease-out 0.2s;
  }
  button:hover {
    transform: rotate(-25deg);
    transition: transform ease-in 0.3s;
  }
`;
// function getColor(element) {
//   let backgroundColor = '';
//   if (element === 'Elektro') {
//     backgroundColor = 'yellow';
//   } else if (element === 'Feuer') {
//     backgroundColor = 'red';
//   } else if (element === 'Pflanze' || element === 'Frosch') {
//     backgroundColor = 'green';
//   } else if (element === 'Wasser') {
//     backgroundColor = 'blue';
//   } else {
//     backgroundColor = 'grey';
//   }
//   switch (element) {
//     case 'Elektro':
//       backgroundColor = 'yellow';
//       break;
//     case 'Feuer':
//       backgroundColor = 'red';
//       break;
//     case 'Frosch':
//     case 'Pflanze':
//       backgroundColor = 'green';
//       break;
//     case 'Wasser':
//       backgroundColor = 'blue';
//       break;
//     default:
//       backgroundColor = 'grey';
//   }
//   return backgroundColor;
// }