import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Field } from 'react-final-form';

import { SocialMedia } from 'components/SocialMedia/SocialMedia';
import { Input, Label, Textarea } from 'components/Form';
import emailjs from '@emailjs/browser';

import * as Styled from './Contact.styles';

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
            const errors = {};
            if (!values.firstName) {
              // @ts-ignore
              errors.firstName = `${t('contact.firstName')} is required`;
            }

            return errors;
          }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            // @ts-ignore
            <form onSubmit={handleSubmit} ref={formRef}>
              <Field name="firstName">
                {({ input, meta }) => (
                  <div>
                    <Label>{t('contact.firstName')}</Label>
                    <Input {...input} type="text" placeholder={t('contact.firstName')} />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="lastName">
                {({ input, meta }) => (
                  <div>
                    <Label>{t('contact.lastName')}</Label>
                    <Input {...input} type="text" placeholder={t('contact.lastName')} />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="eMail">
                {({ input, meta }) => (
                  <div>
                    <Label>{t('contact.email')}</Label>
                    <Input {...input} type="text" placeholder={t('contact.email')} />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="phone">
                {({ input, meta }) => (
                  <div>
                    <Label>{t('contact.phone')}</Label>
                    <Input {...input} type="text" placeholder={t('contact.phone')} />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="message">
                {({ input, meta }) => (
                  <div>
                    <Label>{t('contact.message')}</Label>
                    <Textarea {...input} placeholder={t('contact.messagePlaceholder')} />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
            </form>
          )}
        />
      </Styled.FormBox>
      <SocialMedia />
    </div>
  );
};
