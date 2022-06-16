import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion/dist/framer-motion"
import { useInView } from "react-intersection-observer"

const AnimatedElements = ({children}) => {
    const {ref, inView} = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    const animation = useAnimation()

    useEffect(() => {
        if (inView) {
            animation.start( {
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.675
                }
            })
        } if (!inView) {
            animation.start({
                y: 50,
                opacity: 0,
                transition: {
                    duration: 0.675
                }
            })
        }
    }, [animation, inView])

    return (
        <motion.div
            ref={ref}
            animate={animation}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedElements