import { SocialMedia } from 'components/SocialMedia/SocialMedia';
import { useTranslation } from 'react-i18next';
import * as Styled from './Contact.styles';

import { FormField } from 'components/Form/Field';
import { Input } from 'components/Form/Input';
import { Button } from 'components/Button';
import { Row } from 'antd';

export const Contact = () => {
  const { t } = useTranslation();

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!'
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
        <Styled.Form name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} layout="vertical">
          <FormField
            data-testid="name-input"
            name={['firstName']}
            rules={[{ required: true }]}
            label={t('contact.firstName')}>
            <Input placeholder={t('contact.firstName')} />
          </FormField>
          <FormField
            data-testid="last-name-input"
            name={['lastName']}
            rules={[{ required: true }]}
            label={t('contact.lastName')}>
            <Input placeholder={t('contact.lastName')} />
          </FormField>
          <FormField
            data-testid="email-input"
            name={['email']}
            rules={[{ required: true, type: 'email' }]}
            label={t('contact.email')}>
            <Input placeholder={t('contact.email')} />
          </FormField>
          <FormField data-testid="phone-input" name="phone" rules={[{ required: true }]} label={t('contact.phone')}>
            <Input placeholder={t('contact.phone')} />
          </FormField>
          <FormField data-testid="message-input" name={['message']} label={t('contact.message')}>
            <Input.TextArea placeholder={t('contact.messagePlaceholder')} style={{ resize: 'none', height: '300px' }} />
          </FormField>
          <FormField>
            <Row justify="center">
              <Button type="primary" htmlType="submit">
                {t('contact.submit')}
              </Button>
            </Row>
          </FormField>
        </Styled.Form>
      </Styled.FormBox>
      <SocialMedia />
    </div>
  );
};
