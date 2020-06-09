import * as React from 'react'
import {mix} from '@popmotion/popcorn'

const randomInt = (min, max) => Math.round(mix(min, max, Math.random()))
const generateWordLength = () => randomInt(20,100)
const generateParagraphLength = () => randomInt(10, 40)

const paragraphs = [...Array(40).map(()=> {
    return [...Array(generateParagraphLength())].map(generateWordLength)
})]

const Word = ({width}) => <div className="word" syle={{width}}></div>
const Paragraph = ({words}) => (
    <div className="paragraph">
        {words.map(width => (
            <Word width={width} />
        ))}
    </div>
)

export const ContentPlaceholder = () => (
    <div className="content-placeholder">
        <div className="">
            <Word width={75} />
            <Word width={245} />
            <Word width={120} />
        </div>
        {paragraphs.map(words => (
            <Paragraph words={words} />
        ))}
    </div>
)