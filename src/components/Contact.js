import { useState } from "react";

function Contact() {
    const [showEmail, setShowEmail] = useState(false);
    const email = "shre97@hotmail.com";
    return (
        <section id="contact" className="section contact">
            <h1 className="title">Get in Touch</h1>

            <h2 className="contact-subtext">
                Feel free to reach out or connect with me 👇
            </h2>

            <div className="contact-links">
                {!showEmail ? (
                    <button 
                        className="contact-link"
                        onClick={() => setShowEmail(true)}
                    >
                        📧 Email
                    </button>
                ) : (
                    <a href={`mailto:${email}`}>
                        📧 {email}
                    </a>
                )}

                <a 
                    href="https://www.behance.net/shre97" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    🎨 Behance
                </a>

                <a 
                    href="https://www.instagram.com/shreyezz_artwork" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    📸 Instagram
                </a>

                <a 
                    href="https://www.youtube.com/@shreyezz_artwork" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    ▶️ YouTube
                </a>

                <a 
                    href="https://www.linkedin.com/in/shreyestripathi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    💼 LinkedIn
                </a>

            </div>
        </section>
    );
}

export default Contact;