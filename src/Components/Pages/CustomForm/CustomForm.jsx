/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './customForm.css';
import UserInfo from '../../UserInfo';
import ActorService from '../../../services/actor.service';
import { useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import { confirmAlert } from 'react-confirm-alert';

const CustomForm = () => {
  const { _id } = useParams();
  const pattern = {
    actor_id: 0,
    first_name: '',
    last_name: '',
    last_update: '',
  };

  const [formData, setFormData] = useState(pattern);
  const [infoData, setInfoData] = useState(pattern);

  const resultAlert = (message) => {
    confirmAlert({
      message: `${message} ${formData.first_name} ${formData.last_name}`,
      closeOnClickOutside: false,
      buttons: [
        {
          label: 'Ok',
        },
      ],
    });
  };

  const navigate = useNavigate('/actors');

  useEffect(() => {
    const getActorById = async (id) => {
      const response = await ActorService.getActorById(id);
      setFormData(response);
      setInfoData(response);
    };

    _id ? getActorById(_id) : setFormData({ first_name: '', last_name: '' });
  }, [_id]);

  const parseName = () => {
    return (
      formData.first_name.substring(0, 1).toUpperCase() +
      formData.first_name
        .substring(1, formData.first_name.length)
        .toLowerCase() +
      ' ' +
      formData.last_name.substring(0, 1).toUpperCase() +
      formData.last_name.substring(1, formData.last_name.length).toLowerCase()
    );
  };

  const createActor = async (data) => {
    console.log(data);
    await ActorService.createActor(data);
    resultAlert('Created user:');
  };

  const editActor = async (data) => {
    await ActorService.editActor(data);
    (formData.first_name.trim() !== infoData.first_name ||
      formData.last_name.trim() !== infoData.last_name) &&
      resultAlert('Edited user:');
  };

  const handleSubmit = () => {
    if (
      formData.first_name.trim() !== '' &&
      formData.first_name.trim() !== ''
    ) {
      if (_id) {
        editActor(formData);
      } else {
        createActor(formData);
      }
    }
    navigate('/actors');
  };

  const handleInput = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <section className={`formContainer`}>
      {_id && (
        <div className="formCol">
          <UserInfo data={infoData} />
        </div>
      )}
      <div className="formCol">
        <header className="generalHeader formHeader">
          {_id
            ? `Edit Actor -
            ${parseName()}`
            : 'Create a new Actor'}
        </header>
        <form onSubmit={() => handleSubmit()}>
          <div className="formBody">
            <label className="formLabel" htmlFor="first_name">
              First Name:{' '}
            </label>
            <input
              id="first_name"
              name="first_name"
              className="formInput"
              placeholder={_id ? infoData.first_name : 'First Name'}
              value={formData.first_name}
              onChange={handleInput}
            />
            <label className="formLabel" htmlFor="last_name">
              Last Name:{' '}
            </label>
            <input
              id="last_name"
              name="last_name"
              className="formInput"
              placeholder={_id ? infoData.last_name : 'Last Name'}
              value={formData.last_name}
              onChange={handleInput}
            />
          </div>
          <div className="infoMessage">
            {_id &&
              (formData.first_name.trim() !== infoData.first_name ||
                formData.last_name.trim() !== infoData.last_name) && (
                <p>
                  <span className="warning">WARNING:</span> In case you want to
                  keep the previous user data, you can cancel this form.
                </p>
              )}
          </div>
          <div className="formButtonSection">
            <button
              className={`btn btn-primary ${
                (formData.first_name.trim() === '' ||
                  formData.last_name.trim() === '') &&
                'disabled'
              }`}
              type="submit"
            >
              {_id ? 'Modify Actor' : 'Add Actor'}
            </button>
            <Link className="btn btn-dark" to="/actors">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CustomForm;
