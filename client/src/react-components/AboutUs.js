import styles from './AboutUs.module.css';

export default function AboutUs({titleText,data}) {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{titleText}</h1>
      { data.map (item => <p>{item}</p>)}
      {/* <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        venenatis elit quis eros fermentum, nec gravida lorem volutpat. Cras
        feugiat, massa vel dignissim convallis, lectus augue facilisis metus,
        eget tristique neque felis non metus.
      </p>
      <p className={styles.paragraph}>
        Aenean nec suscipit nulla. Mauris varius vehicula sapien, a fringilla
        ipsum. Pellentesque id leo vitae lacus tincidunt auctor. Integer
        hendrerit, lorem at commodo fringilla, elit justo fermentum lacus, in
        pharetra velit nisi ut felis. Fusce euismod eget lectus id viverra.
      </p>
      <p className={styles.paragraph}>
        Quisque sit amet venenatis arcu. Nullam tempus, eros at tempus
        vestibulum, erat lorem viverra arcu, sit amet hendrerit nisl felis
        non ante. Duis tincidunt dapibus neque, non malesuada enim vehicula
        at.
      </p> */}
    </div>
  );
}
