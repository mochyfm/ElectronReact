/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import './actorList.css';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import ActorService from '../../../services/actor.service';
import Loading from '../../Loading';
import Message from '../../assets/Message';

const ActorList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteActor = async (id) => {
    try {
      await ActorService.deleteActor(id);
      setList(list.filter((list) => list.actor_id !== id))
    } catch(excp) {
      console.log(excp);
    }
    
  };

  const callDelete = (data) => {
    confirmAlert({
      message: `Delete "${data.first_name}, ${data.last_name}"?`,
      closeOnClickOutside: false,
      buttons: [
        {
          label: 'Yes',
          onClick: () => deleteActor(data.actor_id),
        },
        {
          label: 'Cancel',
        },
      ],
    });
  }

  useEffect(() => {
    setLoading(true);

    const getListData = async () => {
      try {
        setList(await ActorService.getAll());
        setError(null);
      } catch (excp) {
        setError(excp);
      }
    };

    setTimeout(() => {
      getListData();
      setLoading(false);
    }, 1000);
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
    return list.map(({ actor_id, first_name, last_name }) => (
      <div className="listRow" key={actor_id}>
        <div className="listCol">{actor_id}</div>
        <div className="listCol">{first_name}</div>
        <div className="listCol">{last_name}</div>
        <div className="listCol">
          <Link className="btn btn-primary" to={`./edit/${actor_id}`}>
            Edit
          </Link>
          <button
            className="btn btn-secondary"
            onClick={() => callDelete({ actor_id, first_name, last_name })}
          >
            Delete
          </button>
        </div>
      </div>
    ));
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message
          mesg={`ERROR ${error.code}: ${error.message}`}
          bgColor="#dc3545"
        />
      ) : (
        <div className="listContainer">
          <header className="generalHeader">{renderHeader()}</header>
          <section>{renderBody()}</section>
        </div>
      )}
    </>
  );
};

export default ActorList;
