import { Button } from 'components/Button';

import styles from './Regulations.module.scss';
import PrivacyPolicy from './Terms/PrivacyPolicy';
import TermsOfService from './Terms/TermsOfService';

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
