import { SocialMedia } from 'components/SocialMedia/SocialMedia';
import { useTranslation } from 'react-i18next';
import * as Styled from './Contact.styles';

import { Button, Form, Input } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!'
  },
  number: {
    range: '${label} must be between ${min} and ${max}'
  }
};

export const Contact = () => {
  const { t } = useTranslation();

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div id="contact">
      <Styled.SectionTitle>{t('contact.title')}</Styled.SectionTitle>
      <Styled.Paragraph>I’m open for new opportunities. If you have one for me we should talk!</Styled.Paragraph>
      <Styled.FormBox>
        <Styled.Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.Item name={['First name']} rules={[{ required: true }]}>
            <Input placeholder="First name" />
          </Form.Item>
          <Form.Item name={['Last name']} rules={[{ required: true }]}>
            <Input placeholder="Last name" />
          </Form.Item>
          <Form.Item name={['e-mail']} rules={[{ type: 'email' }]}>
            <Input placeholder="E-mail" />
          </Form.Item>
          <Form.Item name="Phone number" rules={[{ required: true, message: 'Please input your phone number!' }]}>
            <Input style={{ width: '100%' }} placeholder="Phone number" />
          </Form.Item>
          <Form.Item name={['Message']}>
            <Input.TextArea placeholder="Your message..." style={{ resize: 'none', height: '300px' }} />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Styled.Form>
      </Styled.FormBox>
      <SocialMedia />
    </div>
  );
};
