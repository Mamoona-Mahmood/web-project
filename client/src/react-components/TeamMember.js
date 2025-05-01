import styles from './TeamMember.module.css';

export default function TeamMember({specialist}) {
  return (
    <div className={styles.container}>
      <div className={styles.memberCard}>
        <img 
          src= {specialist.img.src}
          alt="Team Member" 
          className={styles.profileImage} 
        />
        <div className={styles.memberInfo}>
          <h3 className={styles.name}>{specialist.name}</h3>
          <p className={styles.role}>{specialist.designation}</p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis elit quis eros fermentum.
          </p>
          <a 
            href="https://www.linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.linkedinLink}
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
              alt="LinkedIn" 
              className={styles.linkedinIcon}
            />
          </a>
        </div>
      </div>
    </div>
  );
}