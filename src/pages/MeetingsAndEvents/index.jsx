import styles from './MeetingsAndEvents.module.css';

const MeetingEventsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.firstElement}>
          <span className={styles.word}>MEETINGS</span>
          <span className={styles.word}>& EVENTS</span>
        </div>
        <div className={styles.secondElement}>
          <img
            src="/meetings.jpg"
            alt="meeting image"
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.lowSection}>
        <div className={styles.child}>Item 1</div>
        <div className={styles.child}>Item 2</div>
        <div className={styles.child}>Item 3</div>
      </div>
    </div>
  );
};

export default MeetingEventsPage;
