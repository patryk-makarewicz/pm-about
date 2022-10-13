import TermsOfService from './Terms/TermsOfService';
import PrivacyPolicy from './Terms/PrivacyPolicy';

import styles from './Regulations.module.scss';
import { Button } from 'components/Button';

type ListProps = {
  showTerms: boolean;
  showPrivacy: boolean;
  onHandleCloseBoxRegulation: () => void;
};

export const Regulations = ({ showTerms, showPrivacy, onHandleCloseBoxRegulation }: ListProps) => (
  <div className={styles.regulations}>
    <div className={styles.regulations__innerWrapper}>
      {showTerms && <TermsOfService />}
      {showPrivacy && <PrivacyPolicy />}
      <div className={styles.regulations__button}>
        <Button onClick={onHandleCloseBoxRegulation}>Zamknij</Button>
      </div>
    </div>
  </div>
);
