import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ActorService from '../../../services/actor.service';

const ActorList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const getListData = async () => {
      try {
        setList(await ActorService.getAll());
      } catch (excp) {
        console.error(excp);
        setError(excp);
      }
    };

    setTimeout(() => {
      getListData();
      setLoading(false);
    }, 2000);
  }, []);

  const renderHeader = () => {
    const headerElement = ['ID', 'First Name', 'Last Name', 'Menu'];
    return headerElement.map((head, idx) => {
      return (
        <div className="listHeaderCol" key={idx}>
          {head.toUpperCase()}
        </div>
      );
    });
  };

  const renderBody = () => {
    return list.map(({ actor_id, first_name, last_name }, index) => (
      <div className="listRow" key={actor_id}>
        <div className="listCol">{actor_id}</div>
        <div className="listCol">{first_name}</div>
        <div className="listCol">{last_name}</div>
        <div className="listCol">
          <button className="btn btn-primary" onClick={3}>
            Editar
          </button>
          <button className="btn btn-danger" onClick={3}>
            Eliminar
          </button>
        </div>
      </div>
    ));
  };

  return (
    <>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="listContainer">
          <header className="listHeader">{renderHeader()}</header>
          <section>{renderBody()}</section>
        </div>
      )}
    </>
  );
};

export default ActorList;
