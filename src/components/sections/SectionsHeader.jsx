import styles from "./SectionsHeader.module.css";
export const SectionsHeader = ({ title = "" }) => {
  return <h3 className={styles.title}>{title}</h3>;
};
