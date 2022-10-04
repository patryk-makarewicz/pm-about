import { SocialMedia } from 'components/SocialMedia/SocialMedia';
import { useTranslation } from 'react-i18next';
import * as Styled from './Contact.styles';

import { Button } from 'antd';
import { FormField } from 'components/Form/Field';
import { Input } from 'components/Form/Input';

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
          <FormField data-testid="name-input" name={['First name']} rules={[{ required: true }]}>
            <Input placeholder="First name" />
          </FormField>
          <FormField data-testid="last-name-input" name={['Last name']} rules={[{ required: true }]}>
            <Input placeholder="Last name" />
          </FormField>
          <FormField data-testid="email-input" name={['e-mail']} rules={[{ type: 'email' }]}>
            <Input placeholder="E-mail" />
          </FormField>
          <FormField
            data-testid="phone-input"
            name="Phone number"
            rules={[{ required: true, message: 'Please input your phone number!' }]}>
            <Input style={{ width: '100%' }} placeholder="Phone number" />
          </FormField>
          <FormField data-testid="message-input" name={['Message']}>
            <Input.TextArea placeholder="Your message..." style={{ resize: 'none', height: '300px' }} />
          </FormField>
          <FormField></FormField>
        </Styled.Form>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Styled.FormBox>
      <SocialMedia />
    </div>
  );
};
