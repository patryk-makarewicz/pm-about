import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { useForm } from 'react-hook-form';

import { SocialMedia } from 'components/SocialMedia/SocialMedia';
import { Container, ErrorMessage, Input, Label, Textarea } from 'components/Form';
import emailjs from '@emailjs/browser';

import * as Styled from './Contact.styles';
import { Row } from 'antd';
import { Button } from 'components/Button';

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  message: string;
};

export const Contact = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Inputs>();
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
                required: true
              })}
              maxLength={70}
              id="firstName"
              type="text"
              name="firstName"
              placeholder={t('contact.firstName')}
              $error={!!errors.firstName}
            />
            {errors.firstName && <ErrorMessage>{t('contact.isRequired')}</ErrorMessage>}
          </Container>
          <Container>
            <Label htmlFor="lastName">{t('contact.lastName')}</Label>
            <Input
              {...register('lastName', {
                required: true
              })}
              maxLength={70}
              defaultValue=""
              id="lastName"
              type="text"
              name="lastName"
              placeholder={t('contact.lastName')}
              $error={!!errors.lastName}
            />
            {errors.lastName && <ErrorMessage>{t('contact.isRequired')}</ErrorMessage>}
          </Container>
          <Container>
            <Label htmlFor="email">{t('contact.email')}</Label>
            <Input
              {...register('email', {
                required: true
              })}
              maxLength={70}
              id="email"
              type="email"
              name="email"
              placeholder={t('contact.email')}
              $error={!!errors.email}
            />
            {errors.email && <ErrorMessage>{t('contact.isRequired')}</ErrorMessage>}
          </Container>
          <Container>
            <Label htmlFor="phone">{t('contact.phone')}</Label>
            <Input
              {...register('phone', {
                required: true
              })}
              maxLength={70}
              id="phone"
              type="tel"
              name="phone"
              placeholder={t('contact.phone')}
              $error={!!errors.phone}
            />
            {errors.phone && <ErrorMessage>{t('contact.isRequired')}</ErrorMessage>}
          </Container>
          <Container>
            <Label htmlFor="message">{t('contact.message')}</Label>
            <Textarea
              {...register('message', {
                required: false
              })}
              maxLength={1000}
              id="message"
              name="message"
              placeholder={t('contact.message')}
              $error={!!errors.message}
            />
          </Container>
          <Row justify="center">
            <Button type="primary" htmlType="submit">
              {t('contact.submit')}
            </Button>
          </Row>
        </form>
      </Styled.FormBox>
      <SocialMedia />
    </div>
  );
};
