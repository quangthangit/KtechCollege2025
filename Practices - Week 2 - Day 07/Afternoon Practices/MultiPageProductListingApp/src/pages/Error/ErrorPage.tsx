import styles from "../Error/styles.module.css"

export const ErrorPage = () => {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorCode}>404</h1>
      <p className={styles.errorMessage}>Oops! Page not found.</p>
      <a href="/" className={styles.backLink}>← Go back to Home</a>
    </div>
  )
}
