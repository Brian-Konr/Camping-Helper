import { useState } from "react";

const Intro = () => {

    const [toggleTitle, setToggleTitle] = useState(true);
    const [toggleSentence, setToggleSentence] = useState(true);
    const [title, setTitle] = useState("Your Activity Name");
    const [sentence, setSentence] = useState("A short sentence to introduce your Activity");

    return (
        <>
            {toggleTitle ? 
                (
                    <h1 onDoubleClick={() => {setToggleTitle(false)}}>{title}</h1>
                )
            : 
                (
                    <input 
                        type='text'
                        value={title}
                        onChange={(e) => {setTitle(e.target.value)}}
                        onKeyDown={(e) => {
                            if(e.key === 'Enter' || e.key === 'Escape') {
                                setToggleTitle(true);
                                e.preventDefault();
                                e.stopPropagation();
                            }
                        }}
                    />
                )
            }

            {toggleSentence ? 
                (
                    <p onDoubleClick={() => {setToggleSentence(false)}}>{sentence}</p>
                )
            : 
                (
                    <input 
                        type='text'
                        value={sentence}
                        onChange={(e) => {setSentence(e.target.value)}}
                        onKeyDown={(e) => {
                            if(e.key === 'Enter' || e.key === 'Escape') {
                                setToggleSentence(true);
                                e.preventDefault();
                                e.stopPropagation();
                            }
                        }}
                    />
                )
            }
        </>
    )
}

export default Intro;