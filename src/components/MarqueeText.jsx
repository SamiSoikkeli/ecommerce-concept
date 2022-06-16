import React from 'react'
import styled, { keyframes } from 'styled-components'

const MarqueeMove = keyframes`
    0% {
        transform: translate3d(var(--move-initial), 0, 0);
    }

    100% {
        transform: translate3d(var(--move-final), 0, 0);
    }
`

const Marquee = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
    --offset: 20vw;
    --move-initial: calc(-25% + var(--offset));
    --move-final: calc(-50% + var(--offset));

    span {
        font-size: 4vw;
        padding: 0 2vw;
        white-space: nowrap;
    }
`

const MarqueeInner = styled.div`
    width: fit-content;
    position: relative;
    display: flex;
    transform: translate3d(var(--move-initial), 0, 0);
    animation: ${MarqueeMove} 5s linear infinite;
    animation-play-state: running;

    &:hover {
        animation-play-state: paused;
    }
`

const MarqueeText = (props) => {
    return (

            <Marquee>
                <MarqueeInner>
                    <span>{props.MarqueeText}</span>
                    <span>{props.MarqueeText}</span>
                    <span>{props.MarqueeText}</span>
                    <span>{props.MarqueeText}</span>
                </MarqueeInner>
            </Marquee>

    )
}

export default MarqueeText