import ethereum from '../assets/ethereum.svg';
import plus from '../assets/plus.svg';
import search from '../assets/search.svg';

const Servers = () => {
  return (
    <div className="servers">
      <div className="server">
        <img src={ethereum} alt="Ethereum Logo" />
      </div>
      <div className="server">
        <img src={plus} alt="Add Server" />
      </div>
      <div className="server">
        <img src={search} alt="Add Server" />
      </div>
    </div>
  );
}

export default Servers;