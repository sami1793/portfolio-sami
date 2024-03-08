import styles from "./SocialIcons.module.css";
export const SocialIcons = ({ iconType, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <i className={`${styles.footerSocialIcon} ${iconType}`}></i>
    </a>
  );
};
