import { motion } from 'framer-motion';
import { useState } from 'react';

interface Props {
    children: JSX.Element;
    onAnimationComplete: () => void;
}
const SignUpWave = ({ children, onAnimationComplete }: Props) => {
    const [animationCompleted, setAnimationCompleted] = useState(false);

    const handleAnimationComplete = () => {
        setAnimationCompleted(true);
        onAnimationComplete();
    };

    return (
        <div className="absolute overflow-hidden h-screen w-screen bg-transparent">
            <motion.div
                variants={{ 
                    hidden: { opacity: 1, y: -400, x:0 },
                    visible: { opacity: 1, y: 900, x:-1050},
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1.5 }}
                style={{ position: "absolute", width: "200%", height: "200%", background: "transparent", zIndex: "1" }}
                onAnimationComplete={handleAnimationComplete}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default SignUpWave;
