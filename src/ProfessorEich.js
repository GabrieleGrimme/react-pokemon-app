import getColor from './lib/Color';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
export default function ProfessorEich({ name, type, fromEichToLiberty }) {
  return (
    <BallWrapper background={getColor(type)}>
      <h3>{name}</h3>
      <p>{type}</p>
      <button onClick={() => fromEichToLiberty(name)}>🏝</button>
    </BallWrapper>
  );
}
const BallWrapper = styled.section`
  background: ${(props) => props.background}  
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  padding: 0.2rem;
  display: grid;
  place-items: center;
  color: ivory;
  h3,
  p {
    margin: 0;
    margin-top: 20px;
  }
  button {
    border-radius: 50%;
    background: transparent;
    cursor: pointer;
    font-size: 2rem;
    border-color: ivory;
  }
`;

ProfessorEich.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  fromEichToLiberty: PropTypes.func,
}