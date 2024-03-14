import { motion } from 'framer-motion';

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
}

const SignInWave = ({ children, width = "fit-content" }: Props) => {
    return (
        <div style={{ position: "absolute", width: "100%", height: "100%", overflow: "hidden", zIndex: 1 }}>
            <motion.div
                variants={{ 
                    hidden: { opacity: 1, y: 900, x:-1000 },
                    visible: { opacity: 1, y: -300, x:0},
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1.5, delay: 0.1}}
                style={{ position: "absolute", width: "200%", height: "200%" }}
                >
                    {children}
                </motion.div>
        </div>
    );
};

export default SignInWave;
