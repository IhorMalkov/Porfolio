import styles from './Contact.module.scss';

export default function Contact() {
    return (
        <section className={styles['contact-section']} id='contact'>
            <img className={styles['terminal-image']} src='/assets/images/terminal.png' alt='Terminal Background'/>
            <div className={styles['form-container']}>
                <h3>Let's Connect</h3>
                <h4>
                    Whether you’re looking to build a new website, improve your<br />
                    existing platform, or bring a unique project to life, I’m here to<br />
                    help.
                </h4>
                <form>
                    <label>Full Name</label>
                    <input type="text" placeholder="ex., Ihor Malkov" />
                    <label>Email address</label>
                    <input type="email" placeholder="ex., ihor.malkovv@gmail.com" />
                    <label>Your message</label>
                    <textarea
                        className={styles['text-input']}
                        name="message"
                        required
                        rows={5}
                        placeholder="Share your thoughts, or inquiries..." />
                    <button type="submit">
                        Send Message
                        <img src="/assets/images/arrow-up.png" alt="Send" />
                    </button>
                </form>
            </div>
        </section>
    );
}

