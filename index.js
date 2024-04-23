import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function Home() {
    const [markdown, setMarkdown] = useState('type markdown here');

    return (
        <div>
            <textarea
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
            />
            <ReactMarkdown children={markdown} />
        </div>
    );
}

export function ReverseSentence() {
    const [sentence, setSentence] = useState('');

    const reverseSentence = (inputSentence) => {
        let reversed = inputSentence.split(' ').reverse().join(' ');
        return reversed.charAt(0).toUpperCase() + reversed.slice(1);
    }

    return (
        <div>
            <input
                value={sentence}
                onChange={(e) => setSentence(reverseSentence(e.target.value))}
            />
            <p>{sentence}</p>
        </div>
    );
}

const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];

const names = data.flat().map(person => person.name);
console.log(names);

const ages = data.flat().map(person => person.age);
console.log(ages);c