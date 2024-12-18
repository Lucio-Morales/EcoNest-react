import styles from './Card.module.css';

const Card = ({ title, description, links, isList }) => {
  return (
    <div className={`${styles.cardContainer}`}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.footer}>
        {isList ? (
          <ul className={styles.linkList}>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <a
            href={links[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.singleLink}
          >
            {links[0].label}
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
