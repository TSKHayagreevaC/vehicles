import styles from './altius-jest-test.module.css';

/* eslint-disable-next-line */
export interface AltiusJestTestProps {}

export function AltiusJestTest(props: AltiusJestTestProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AltiusJestTest!</h1>
    </div>
  );
}

export default AltiusJestTest;
