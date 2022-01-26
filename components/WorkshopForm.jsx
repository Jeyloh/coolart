import content from '../content/no.json';
import styles from '../styles/WorkshopForm.module.css';
import cn from 'classnames';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState, useRef } from 'react';
import { BiMailSend } from 'react-icons/bi';
import ReCAPTCHA from 'react-google-recaptcha';

export default function WorkshopForm({ inputs, submitText }) {
  const [startDate, setStartDate] = useState(new Date());
  const [warningList, setWarningList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const recaptchaRef = useRef();

  const renderInputByType = (input) => {
    switch (input.type) {
      case 'text':
        return (
          <input
            placeholder={input.placeholder}
            type={input.type}
            id={input.id}
          />
        );
      case 'textarea':
        return (
          <textarea
            rows={10}
            placeholder={input.placeholder}
            type={input.type}
            id={input.id}
          />
        );
      case 'select':
        return (
          <select id={input.id}>
            {input.options.map((option) => (
              <option key={option.value} {...option} />
            ))}
          </select>
        );
      case 'date':
        return (
          <DatePicker
            id={input.id}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        );
      default:
        return (
          <input
            placeholder={input.placeholder}
            type={input.type}
            id={input.id}
          />
        );
    }
  };

  const onReCAPTCHAChange = (captchaCode) => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!captchaCode) {
      return;
    }

    handleSubmit();
  };

  const handleSubmitPreCaptcha = () => {
    e.preventDefault();
    recaptchaRef.current.execute();
  };

  const handleSubmit = async (e) => {
    const inputObj = {};
    const updatedWarningList = [];
    Object.values(e.target).map((inputElement) => {
      const id = inputElement.id;
      const originalItem = inputs.filter((i) => i.id === id)[0];
      const isRequired = originalItem?.required;
      const isSelect = originalItem?.type === 'select';
      console.log(originalItem);
      const value = inputElement?.value?.trim();
      console.log({ inputElement });

      if (isSelect) {
        console.log('select');
        console.log(inputElement);
      }
      if (isRequired) {
        if (value.length) inputObj[id] = value;
        else {
          updatedWarningList.push(id);
        }
      } else {
        if (value?.length) inputObj[id] = value;
      }
    });

    if (updatedWarningList.length) {
      setWarningList(updatedWarningList);
      console.log('show warning ', updatedWarningList);
      return;
    } else {
      setIsLoading(true);

      setWarningList([]);
      console.log('submit ', inputObj);
      try {
        const res = await fetch('http://localhost:3000/api/workshops', {
          method: 'POST',
          body: JSON.stringify(inputObj),
        });
        console.log(res);
        setIsDone(true);
        recaptchaRef.current.reset();
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
  };
  if (isDone) {
    return (
      <div className={styles.DoneBox} style={{ fontSize: 30 }}>
        We have received your email and will be in contact with you!{' '}
        <BiMailSend />
      </div>
    );
  } else
    return (
      <form onSubmit={handleSubmitPreCaptcha}>
        <div className={styles.Container}>
          {inputs.map((input) => {
            return (
              <label
                className={cn(styles.LabelContainer, {
                  [styles.Warning]: warningList.includes(input.id),
                })}
                key={input.id}
                htmlFor={input.id}
              >
                <span>
                  {input.label} {input.required && ' *'}
                </span>
                {renderInputByType(input)}
              </label>
            );
          })}
        </div>
        <ReCAPTCHA
          ref={recaptchaRef}
          // size="invisible"
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onChange={onReCAPTCHAChange}
        />
        <button className={styles.SubmitButton} type='submit'>
          {isLoading ? <BiMailSend /> : submitText}
        </button>
      </form>
    );
}
