
import React, { useState } from 'react';
import styles from './modalVacancy.module.scss';

const ModalVacancy = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [messenger, setMessenger] = useState('');
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');

  const [nameError, setNameError] = useState('');
  const [positionError, setPositionError] = useState('');
  const [messengerError, setMessengerError] = useState('');
  const [fileError, setFileError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    if (!value) {
      setNameError('Имя обязательно для заполнения');
    } else if (value.length > 70) {
      setNameError('Не более 70 символов');
    } else if (!/^[a-zA-Zа-яА-Я\s]*$/.test(value)) {
      setNameError('Только буквы (латиница или кириллица)');
    } else {
      setNameError('');
    }
  };

  const handlePositionChange = (e) => {
    const value = e.target.value;
    setPosition(value);
    if (!value) {
      setPositionError('Должность обязательна для заполнения');
    } else if (value.length > 70) {
      setPositionError('Не более 70 символов');
    } else if (!/^[a-zA-Zа-яА-Я\s]*$/.test(value)) {
      setPositionError('Только буквы (латиница или кириллица)');
    } else {
      setPositionError('');
    }
  };

  const handleMessengerChange = (e) => {
    const value = e.target.value;
    setMessenger(value);
    if (!value) {
      setMessengerError('Мессенджер обязателен для заполнения');
    } else if (value.length > 70) {
      setMessengerError('Не более 70 символов');
    } else {
      setMessengerError('');
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFileName(selectedFile.name);
    } else {
      setFileName('');
    }

    setFile(selectedFile);

    if (!selectedFile) {
      setFileError('Файл обязателен для загрузки');
      return;
    }

    const allowedTypes = ['application/pdf', 'application/msword', 'application/rtf', 'text/plain'];
    const allowedExtensions = ['.pdf', '.doc', '.rtf', '.txt'];

    if (!allowedTypes.includes(selectedFile.type)) {
      setFileError(`Недопустимый формат файла. Разрешены: ${allowedExtensions.join(', ')}`);
      setFile(null);
      setFileName('');
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      setFileError('Размер файла не должен превышать 5MB');
      setFile(null);
      setFileName('');
      return;
    }

    setFileError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      setNameError('Имя обязательно для заполнения');
    }
    if (!position) {
      setPositionError('Должность обязательна для заполнения');
    }
    if (!messenger) {
      setMessengerError('Мессенджер обязателен для заполнения');
    }
    if (!file) {
      setFileError('Файл обязателен для загрузки');
    }

    if (nameError || positionError || messengerError || fileError || !name || !position || !messenger || !file) {
      return;
    }

    console.log('Form Data:', { name, position, messenger, file });

    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); 

      setSuccessMessage('Данные успешно отправлены!');

      setName('');
      setPosition('');
      setMessenger('');
      setFile(null);
      setFileName('');
      setNameError('');
      setPositionError('');
      setMessengerError('');
      setFileError('');

      setTimeout(() => {
        setSuccessMessage('');
      }, 10000);
    } catch (error) {
      console.error('Submission Error:', error);
    }
  };

  return (
    <>
      <h4 className="title-4">Становись частью финансовой истории страны!</h4>
      <p className={styles.subtext}>
        Заполни форму, и&nbsp;мы&nbsp;свяжемся с&nbsp;тобой в&nbsp;течение 5&nbsp;дней.
      </p>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Имя:</label>
          <input
            className={`${styles.formItem} ${styles.formText}`}
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            maxLength="70"
          />
          {nameError && <div className={styles.error}>{nameError}</div>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="position">Желаемая должность:</label>
          <input
            className={`${styles.formItem} ${styles.formText}`}
            type="text"
            id="position"
            name="position"
            value={position}
            onChange={handlePositionChange}
            maxLength="70"
          />
          {positionError && <div className={styles.error}>{positionError}</div>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="messenger">Мессенджер для связи:</label>
          <input
            className={`${styles.formItem} ${styles.formText}`}
            type="text"
            id="messenger"
            name="messenger"
            value={messenger}
            onChange={handleMessengerChange}
            maxLength="70"
          />
          {messengerError && <div className={styles.error}>{messengerError}</div>}
        </div>

        <div className={`${styles.formGroup} ${styles.formUpload}`}>
          <label htmlFor="file">Загрузи резюме:</label>
          <button
            className={styles.attach}
            type="button"
            onClick={() => document.getElementById('file').click()}
          >
            <svg
              version="1.1"
              id="Capa_1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="25px"
              height="25px"
              viewBox="0 0 612.675 612.675"
            >
              <g>
                <g id="_x34__17_">
                    <path
                      d="M581.209,223.007L269.839,530.92c-51.592,51.024-135.247,51.024-186.839,0c-51.592-51.023-51.592-133.737,0-184.761
                        L363.248,69.04c34.402-34.009,90.15-34.009,124.553,0c34.402,34.008,34.402,89.166,0,123.174l-280.249,277.12
                        c-17.19,17.016-45.075,17.016-62.287,0c-17.19-16.993-17.19-44.571,0-61.587L394.37,161.42l-31.144-30.793L114.144,376.975
                        c-34.402,34.009-34.402,89.166,0,123.174c34.402,34.009,90.15,34.009,124.552,0l280.249-277.12
                        c51.592-51.023,51.592-133.737,0-184.761c-51.593-51.023-135.247-51.023-186.839,0L36.285,330.784l1.072,1.071
                        c-53.736,68.323-49.012,167.091,14.5,229.88c63.512,62.79,163.35,67.492,232.46,14.325l1.072,1.072l326.942-323.31
                        L581.209,223.007z"
                    />
                </g>
              </g>
            </svg>
            <span>Прикрепить файл</span>
          </button>
          <input
            className={`${styles.formItem} ${styles.formFile}`}
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          {fileName && <div className={styles.fileName}>Загружен файл: {fileName}</div>}
          {fileError && <div className={styles.error}>{fileError}</div>}
        </div>

        <button type="submit" className={`button ${styles.buttonSubmit} ${styles.formItem}`}>Отправить</button>
        {successMessage && <div className={styles.success}>{successMessage}</div>}
      </form>
    </>
  );
};

export default ModalVacancy;