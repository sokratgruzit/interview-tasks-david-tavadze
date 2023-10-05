import { useState } from 'react';

import styles from './App.module.scss';
import EncDec from './EncDec';

function App() {
  const [toggleModal, setToogleModal] = useState(false);

  return (
    <div className={styles.dialog_container}>
      <div className={styles.dialog}>
        <div className={styles.dialog__header}>
          <div className={styles.dialog__header_title_container}>
            <div className={styles.dialog__header_title}>
              Ссъешь ещё этих мягких французских булок, да выпей чаю
            </div>
            <div className={styles.dialog__header_subtitle}>
              Съешь ещё этих мягких французских булок, да выпей чаю
            </div>
          </div>
          <button onClick={() => setToogleModal(!toggleModal)} className={styles.dialog__header_button}>
            Кнопка закрытия
          </button>
        </div>
        <div className={styles.dialog__content}>
          <div className={`${styles.dialog__content_block} ${styles.dialog__content_block_left}`}>
            Left
          </div>
          <div className={`${styles.dialog__content_block} ${styles.dialog__content_block_right}`}>
            <div className={styles.content}>
              <span>Top</span>
              <span>Center</span>
              <span>Bottom</span>
            </div>
          </div>
        </div>
        <div className={styles.dialog__footer}>
          Ссъешь ещё этих мягких французских булок, да выпей чаю<br />
          ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<br />
          Ссъешь ещё этих мягких французских булок, да выпей чаю
        </div>
      </div>
      {toggleModal && <EncDec />}
      {toggleModal && <div className={styles.layout}></div>}
    </div>
  );
}

export default App;
