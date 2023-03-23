// import React, { useRef, useState, useReducer, useMemo, useEffect} from 'react';

// const typeWriterInitialState = {
//     index: 0,
//     deleting: false,
//     length: 0
// }

// const typeWriterReducer = (state, action) => {
//     let { index, deleting, length } = state;
//     const { text, fullText } = action;

//     if(deleting && text ==="") return(
//         index = index + 1,
//         deleting = false,
//         length = length + 1
//     );
    
//     if(!deleting && text===fullText) return(
//         index = index,
//         deleting = true,
//         length = length + 1
//     );

//     return(
//         index,
//         deleting,
//         length = length + (deleting ? -1 : 1)
//     );
// };

// function useTypeWriter(props){
//     const ref = useRef(null);
//     const [period] = useState(props.period || 2000);
//     const [rotate] = useState(props.rotate);
//     const [state, update] = useReducer(
//         typeWriterReducer,
//         typeWriterInitialState
//     );
//     const { index, deleting, length } = state;
//     const fullText = rotate[index % rotate.length];
//     //const text = fullText.substring(0, length);
//     const text = fullText ? fullText.substring(0, length) : '';

//     const delta = useMemo(() => {
//         if (text === fullText && !deleting) return period;
//         if (text === '' && deleting) return 500;
//         return (200 * Math.random() + 100) * (deleting ? 0.5 : 1);
//     }, [text, fullText, deleting, period]);

//     useEffect(() => {
//         ref.current.textContent = text;
//         const timeout = setTimeout(update, delta, { text, fullText });
//         return() => {
//             clearTimeout(timeout);
//         };
//     }, [ref, delta, text, fullText, update]);
    
//     return ref;
// };

// const wrapStyle = { borderRight: '0.08em solid #666', color: "#3e64ff", textDecoration: 'underline'};

// function TypeWriter(props) {
//     const { period, rotate } = props;
//     const wrapEl = useTypeWriter({period, rotate});

//     return (
//         <span ref={wrapEl} style={wrapStyle} />
//     );
// };

// const mainRotate = ['Developer.', 'Programmer.'];

// function Tempor(){
//     return(
//         <div id='main'>
//             <div className='text-center p-5'>
//                 <p id='hi' className='mt-5'>Hii, I am</p>
//                 <h1 id='myName'>KAVISH BOYAL</h1>
//                 <h2 id='typewrite'>I'm a <TypeWriter period={2000} rotate={mainRotate} /></h2>
//             </div>
//         </div>
//     )
// };

// export default Tempor;

import React from 'react';
const { useRef, useState, useReducer, useMemo, useEffect } = React;

const typeWriterInitialState = {
    index: 0,
    deleting: false,
    length: 0
};

const typeWriterReducer = (state, action) => {
    const { index, deleting, length } = state;
    const { text, fullText } = action;

    if (deleting && text === '') return {
        index: index + 1,
        deleting: false,
        length: length + 1
    };

    if (!deleting && text === fullText) return {
        index: index,
        deleting: true,
        length: length - 1
    };

    return {
        index,
        deleting,
        length: length + (deleting ? -1 : 1)
    };
};

function useTypeWriter(props) {
    const ref = useRef(null);
    const [period] = useState(props.period || 2000);
    const [rotate] = useState(props.rotate);
    const [state, update] = useReducer(
        typeWriterReducer,
        typeWriterInitialState
    );
    const { index, deleting, length } = state;
    const fullText = rotate[index % rotate.length];
    const text = fullText.substring(0, length);
    const delta = useMemo(() => {
        if (text === fullText && !deleting) return period;
        if (text === '' && deleting) return 500;
        return (200 * Math.random() + 100) * (deleting ? 0.5 : 1);
    }, [text, fullText, deleting, period]);

    useEffect(() => {
        ref.current.textContent = text;

        const timeout = setTimeout(update, delta, { text, fullText });

        return () => {
            clearTimeout(timeout);
        };
    }, [ref, delta, text, fullText, update]);

    return ref;
}

const wrapStyle = { borderRight: '0.08em solid #666', color: "#2B46B2", textDecoration: "underline" };

function TypeWriter(props) {
    const { period, rotate } = props;
    const wrapEl = useTypeWriter({ period, rotate });

    return (
        <span ref={wrapEl} style={wrapStyle} />
    );
}

const mainRotate = ['Software Engineer.', 'Programmer.'];

function Tempor() {
    return (
        <div id="main" >
            <div className="text-center p-5">
                <p id="hi" className="mt-5">Heyy, I AM</p>
                <h1 id="myName">Kavish Boyal</h1>
                <h2 id="typeWrite">I'm a <TypeWriter period={2000} rotate={mainRotate} /></h2>
            </div>
        </div>
    );
}

export default Tempor;