import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Field } from 'react-final-form';

import { SocialMedia } from 'components/SocialMedia/SocialMedia';
import { Container, ErrorMessage, Input, Label, Textarea } from 'components/Form';
import emailjs from '@emailjs/browser';

import * as Styled from './Contact.styles';
import { Row } from 'antd';
import { Button } from 'components/Button';

type ErrorType = {
  firstName?: string;
  lastName?: string;
  eMail?: string;
  phone?: string;
};

export const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>();

  const sendEmail = () => {
    const currentForm = formRef.current;
    if (currentForm == null) return;

    emailjs.sendForm('service_jmouk4o', 'template_q8cy5fy', currentForm, 'kHbfVc7i6W4XME0Lz').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const onFinish = (values: any) => {
    console.log(values);
    sendEmail();
  };

  return (
    <div id="contact">
      <Styled.SectionTitle>{t('contact.title')}</Styled.SectionTitle>
      <Styled.Paragraph>I’m open for new opportunities. If you have one for me we should talk!</Styled.Paragraph>
      <Styled.FormBox>
        <Form
          onSubmit={onFinish}
          validate={(values) => {
            const errors: ErrorType = {};
            if (!values.firstName) {
              errors.firstName = `${t('contact.firstName')} is required`;
            }
            if (!values.lastName) {
              errors.lastName = `${t('contact.lastName')} is required`;
            }
            if (!values.eMail) {
              errors.eMail = `${t('contact.eMail')} is required`;
            }
            if (!values.phone) {
              errors.phone = `${t('contact.phone')} is required`;
            }
            return errors;
          }}
          render={({ handleSubmit, submitting, form }) => (
            // @ts-ignore
            <form onSubmit={handleSubmit} ref={formRef}>
              <Field name="firstName">
                {({ input, meta }) => (
                  <Container>
                    <Label>{t('contact.firstName')}</Label>
                    <Input {...input} type="text" placeholder={t('contact.firstName')} $error={meta.error} />
                    {meta.error && meta.touched ? <ErrorMessage>{meta.error}</ErrorMessage> : ''}
                  </Container>
                )}
              </Field>
              <Field name="lastName">
                {({ input, meta }) => (
                  <Container>
                    <Label>{t('contact.lastName')}</Label>
                    <Input {...input} type="text" placeholder={t('contact.lastName')} $error={meta.error} />
                    {meta.error && meta.touched && <ErrorMessage>{meta.error}</ErrorMessage>}
                  </Container>
                )}
              </Field>
              <Field name="eMail">
                {({ input, meta }) => (
                  <Container>
                    <Label>{t('contact.email')}</Label>
                    <Input {...input} type="text" placeholder={t('contact.email')} $error={meta.error} />
                    {meta.error && meta.touched && <ErrorMessage>{meta.error}</ErrorMessage>}
                  </Container>
                )}
              </Field>
              <Field name="phone">
                {({ input, meta }) => (
                  <Container>
                    <Label>{t('contact.phone')}</Label>
                    <Input {...input} type="text" placeholder={t('contact.phone')} $error={meta.error} />
                    {meta.error && meta.touched && <ErrorMessage>{meta.error}</ErrorMessage>}
                  </Container>
                )}
              </Field>
              <Field name="message">
                {({ input, meta }) => (
                  <Container>
                    <Label>{t('contact.message')}</Label>
                    <Textarea {...input} placeholder={t('contact.messagePlaceholder')} $error={meta.error} />
                    {meta.error && meta.touched && <ErrorMessage>{meta.error}</ErrorMessage>}
                  </Container>
                )}
              </Field>
              <Row justify="center">
                <Button type="primary" htmlType="submit" disabled={submitting} onClick={() => form.reset()}>
                  {t('contact.submit')}
                </Button>
              </Row>
            </form>
          )}
        />
      </Styled.FormBox>
      <SocialMedia />
    </div>
  );
};
