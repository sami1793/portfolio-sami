import styles from "./Project.module.css";
export const Project = ({
  projectName = "",
  href = "#",
  srcImageProject,
  altImageProject,
}) => {
  return (
    <div>
      <a
        href={href}
        target="_blank"
        className={styles.projectItem}
        rel="noreferrer"
      >
        <figure>
          <img src={srcImageProject} alt={altImageProject} />
          <figcaption>
            <p>{projectName}</p>
          </figcaption>
        </figure>
      </a>
    </div>
  );
};
