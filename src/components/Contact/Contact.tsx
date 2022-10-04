import { SocialMedia } from 'components/SocialMedia/SocialMedia';
import { useTranslation } from 'react-i18next';
import * as Styled from './Contact.styles';

import { FormField } from 'components/Form/Field';
import { Input } from 'components/Form/Input';
import { Button } from 'components/Button';

export const Contact = () => {
  const { t } = useTranslation();

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!'
    }
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div id="contact">
      <Styled.SectionTitle>{t('contact.title')}</Styled.SectionTitle>
      <Styled.Paragraph>I’m open for new opportunities. If you have one for me we should talk!</Styled.Paragraph>
      <Styled.FormBox>
        <Styled.Form name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
          <FormField data-testid="name-input" name={['firstName']} rules={[{ required: true }]}>
            <Input placeholder={t('contact.firstName')} />
          </FormField>
          <FormField data-testid="last-name-input" name={['lastName']} rules={[{ required: true }]}>
            <Input placeholder={t('contact.lastName')} />
          </FormField>
          <FormField data-testid="email-input" name={['email']} rules={[{ required: true, type: 'email' }]}>
            <Input placeholder={t('contact.email')} />
          </FormField>
          <FormField
            data-testid="phone-input"
            name="phone"
            rules={[{ required: true, type: 'number', message: 'Please input your phone number!' }]}>
            <Input placeholder={t('contact.phone')} />
          </FormField>
          <FormField data-testid="message-input" name={['message']}>
            <Input.TextArea placeholder={t('contact.message')} style={{ resize: 'none', height: '300px' }} />
          </FormField>
          <FormField>
            <Button type="primary" htmlType="submit">
              {t('contact.submit')}
            </Button>
          </FormField>
        </Styled.Form>
      </Styled.FormBox>
      <SocialMedia />
    </div>
  );
};
