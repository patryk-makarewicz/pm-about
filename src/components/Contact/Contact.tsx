import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Field } from 'react-final-form';
import { useForm, SubmitHandler } from 'react-hook-form';

import { SocialMedia } from 'components/SocialMedia/SocialMedia';
import { Container, ErrorMessage, Input, Label, Textarea } from 'components/Form';
import emailjs from '@emailjs/browser';

import * as Styled from './Contact.styles';
import { Row } from 'antd';
import { Button } from 'components/Button';

type Inputs = {
  firstName: string;
  example: string;
  exampleRequired: string;
};

export const Contact = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch('example'));

  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = () => {
    const currentForm = formRef.current;
    if (currentForm == null) return;

    emailjs.sendForm('service_jmouk4o', 'template_q8cy5fy', currentForm, 'kHbfVc7i6W4XME0Lz').then(
      (result) => {
        console.log(result.text);
        reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const onFinish = () => {};

  return (
    <div id="contact">
      <Styled.SectionTitle>{t('contact.title')}</Styled.SectionTitle>
      <Styled.Paragraph>{t('contact.description')}</Styled.Paragraph>
      <Styled.FormBox>
        <form onSubmit={handleSubmit(sendEmail)} ref={formRef}>
          <Container>
            <Label htmlFor="firstName">{t('contact.firstName')}</Label>
            <Input
              {...register('firstName', {
                required: true,
                pattern: /^[A-Za-z]+$/i
              })}
              maxLength={70}
              defaultValue=""
              id="firstName"
              type="text"
              name="firstName"
              placeholder={t('contact.firstName')}
              $error={!!errors.firstName}
            />
            {errors.firstName && (
              <ErrorMessage>
                {t('contact.firstName')} {t('contact.isRequired')}
              </ErrorMessage>
            )}
          </Container>

          <Row justify="center">
            <Button type="primary" htmlType="submit">
              {t('contact.submit')}
            </Button>
          </Row>
        </form>
        <Form
          onSubmit={onFinish}
          render={({ submitting, form }) => (
            <form>
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
            </form>
          )}
        />
      </Styled.FormBox>
      <SocialMedia />
    </div>
  );
};
