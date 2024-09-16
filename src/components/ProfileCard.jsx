import PropTypes from 'prop-types';
import StatusBadge from './StatusBadge';
import '../styles/ProfileCard.css';

const ProfileCard = ({ name, age, status }) => {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p>{age ? `Idade: ${age}` : 'Idade não disponível'}</p>
      <StatusBadge status={status} />
    </div>
  );
};

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  status: PropTypes.oneOf(['ativo', 'inativo', 'pendente']).isRequired,
};

ProfileCard.defaultProps = {
  age: null,
};

export default ProfileCard;
