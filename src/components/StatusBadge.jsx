import PropTypes from 'prop-types';
import '../styles/StatusBadge.css';

const StatusBadge = ({ status }) => {
  const getBadgeClass = (status) => {
    switch (status) {
      case 'ativo':
        return 'badge badge-active';
      case 'inativo':
        return 'badge badge-inactive';
      case 'pendente':
        return 'badge badge-pending';
      default:
        return 'badge';
    }
  };

  return <span className={getBadgeClass(status)}>{status.charAt(0).toUpperCase() + status.slice(1)}</span>;
};

StatusBadge.propTypes = {
  status: PropTypes.oneOf(['ativo', 'inativo', 'pendente']).isRequired,
};

export default StatusBadge;
