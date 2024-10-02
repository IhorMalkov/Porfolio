import styles from './Info.module.scss';
import { cards } from './InfoConstants.js';
import {useState} from "react";

const Info = () => {
    const [hoverStyle, setHoverStyle] = useState({});

    const handleMouseMove = (e, cardId) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5; // X position relative to the card center
        const y = (e.clientY - rect.top) / rect.height - 0.5; // Y position relative to the card center

        setHoverStyle((prev) => ({
            ...prev,
            [cardId]: {
                '--rotateX': `${y * 10}deg`,
                '--rotateY': `${x * 10}deg`,
            },
        }));
    };

    const handleMouseLeave = (cardId) => {
        // Reset rotation when mouse leaves
        setHoverStyle((prev) => ({
            ...prev,
            [cardId]: {
                '--rotateX': '0deg',
                '--rotateY': '0deg',
            },
        }));

    };
    return (
        <section>
            <div className={styles.title}>
                <h2 className={styles.main}>
                    My Work
                </h2>
            </div>
                <p className={styles.submain}>
                    A collection of projects I've worked on.
                </p>
            <div className={styles.cardHolder}>
                {cards.map((card) => {
                    return (
                        <div
                            key={card.id}
                            className={styles.card}
                            style={hoverStyle[card.id]}
                            onMouseMove={(e) => handleMouseMove(e, card.id)}
                            onMouseLeave={() => handleMouseLeave(card.id)}
                        >
                            <h1 className={styles.title}>{card.title}</h1>
                            <h3 className={styles.subtitle}>{card.subtitle}</h3>
                            {card.img && (
                                <img className={styles.img} src={card.img} alt={card.title}/>
                            )}
                            <a className={styles.link} href={card.link}>link</a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Info;
