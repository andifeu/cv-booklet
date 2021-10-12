import { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';

import css from '../styles/PageContent.module.css';

export default function CareerStep(props) {
    const technologies = [];
    const descriptionList = [];
    const bgStyle = {};
    const [source, setSource] = useState(null);

    useEffect(() => {
        if (!props.step.bgImage) {
            return;
        }
        import(`../images/${props.step.bgImage}`).then((image) => {
            setSource(image);
        });
    }, [props.step.bgImage]);

    if (props.step.technologies && Array.isArray(props.step.technologies)) {
        props.step.technologies.forEach(function (technology) {
            technologies.push(
                <li key={technology}>
                    <FaCheck />
                    <span>{technology}</span>
                </li>
            );
        });
    }

    if (Array.isArray(props.step.description)) {
        for (let i = 0; i < props.step.description.length; i++) {
            descriptionList.push(
                <li key={`desc-${i}`}>{props.step.description[i]}</li>
            );
        }
    }

    if (source) {
        bgStyle.backgroundImage = 
            `linear-gradient(
                rgba(247,247,247,0.85),
                rgba(247,247,247,0.85)
            ), url(${source.default})`;
    }

    return (
        <div style={bgStyle} className={css['career-step']}>
            <div className={css.period}>
                <b>{props.step.period}</b>
            </div>
            <div className={css.description}>
                <div>{props.step.title}</div>
                <div>
                    <b>Ort:</b>&nbsp;{props.step.location}
                </div>
                <div>
                    <b>Aufgaben:</b>&nbsp;
                    {(() => {
                        if (Array.isArray(props.step.description)) {
                            return (
                                <ul className={css['description-list']}>
                                    {descriptionList}
                                </ul>
                            );
                        } else {
                            return props.step.description;
                        }
                    })()}
                </div>
                <div>
                    <ul className={css.technologies}>{technologies}</ul>
                </div>
            </div>
        </div>
    );
}
