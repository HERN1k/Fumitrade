import { FC } from "react";
import { useForm } from "react-hook-form";
import { IEmailInputs } from "../../types.ts";
import { useTranslation } from "react-i18next";
import styles from "../../styles/Contacts.module.css";
import { Arrow } from "../general/Svgs.tsx";

const ContactForm: FC = () => {

    const { t } = useTranslation();

    const { register, handleSubmit, formState: { errors } } = useForm<IEmailInputs>({
        mode: "onChange"
    });

    const onSubmit = (data: IEmailInputs) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className={styles.inputContainer}>
                <label 
                    htmlFor="firstNameInputID"
                    className={styles.inputLabel}>
                    {t("contactsPage.contactForm.firstName")}
                    <span className={styles.inputLabelSpan}>*</span>
                </label>
                <input 
                    id="firstNameInputID"
                    type="text" 
                    className={styles.input}
                    {...register("firstName", {required: true, maxLength: 80})} />
                {errors.firstName && <span className={styles.inputSpan}>{t("contactsPage.contactForm.error")}</span>}
            </div>
            
            <div className={styles.inputContainer}>
                <label 
                    htmlFor="lastNameInputID"
                    className={styles.inputLabel}>
                    {t("contactsPage.contactForm.lastName")}
                    <span className={styles.inputLabelSpan}>*</span>
                </label>
                <input 
                    id="lastNameInputID"
                    type="text"  
                    className={styles.input}
                    {...register("lastName", {required: true, maxLength: 100})} />
                {errors.lastName && <span className={styles.inputSpan}>{t("contactsPage.contactForm.error")}</span>}
            </div>
            
            <div className={styles.inputContainer}>
                <label 
                    htmlFor="companyInputID"
                    className={styles.inputLabel}>
                    {t("contactsPage.contactForm.company")}
                    <span className={styles.inputLabelSpan}>*</span>
                </label>
                <input 
                    id="companyInputID"
                    type="text"  
                    className={styles.input}
                    {...register("company", {required: true, max: 50, min: 0, maxLength: 50})} />
                {errors.company && <span className={styles.inputSpan}>{t("contactsPage.contactForm.error")}</span>}
            </div>
            
            <div className={styles.inputContainer}>
                <label 
                    htmlFor="emailInputID"
                    className={styles.inputLabel}>
                    {t("contactsPage.contactForm.email")}
                    <span className={styles.inputLabelSpan}>*</span>
                </label>
                <input 
                    id="emailInputID"
                    type="email"  
                    className={styles.input}
                    {...register("email", {required: true, max: 100, min: 3, maxLength: 100, pattern: /^\S+@\S+$/i})} />
                {errors.email && (errors.email?.type == "pattern" 
                    ? (<span className={styles.inputSpan}>{t("contactsPage.contactForm.errorEmailPattern")}</span>)
                    : (<span className={styles.inputSpan}>{t("contactsPage.contactForm.error")}</span>))}
            </div>
            
            <div className={styles.inputContainer}>
                <label 
                    htmlFor="messageTextareaID"
                    className={styles.inputLabel}>
                    {t("contactsPage.contactForm.message")}
                    <span className={styles.inputLabelSpan}>*</span>
                </label>
                <textarea 
                    id="messageTextareaID"
                    className={styles.textarea}
                    {...register("message", {required: true, max: 1000, min: 10, maxLength: 1000})} />
                {errors.message && <span className={styles.inputSpan}>{t("contactsPage.contactForm.error")}</span>}
            </div>
            
            <div className={styles.submitContainer} onClick={handleSubmit(onSubmit)}>
                <h2 className={styles.submitText}>{t("contactsPage.contactForm.submit")}</h2>
                <div className={styles.submitButton}>
                    <Arrow className={styles.submitButtonArrowSvg} />
                </div>
            </div>
        </form>
    );
}

export default ContactForm;