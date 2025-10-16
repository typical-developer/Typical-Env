import { Button } from "./ui/button.jsx";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";
import BlurText from "./bits/BlurText.jsx";
const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

export default function Hero(
    {className,
    pageName = "Page Name Here",
    buttonLabel = "Button Text Here",
    buttonIcon = "cross",
    buttonPath = "/"}) {

    return(
        <>
            <div
                className={cn(
                    "min-h-svh flex-center",
                    className
                )}
            >
                <div className="space-y-4 flex-center flex-col">
                    <h1 className="font-bold text-8xl text-white">
                        <BlurText
                        text={pageName}
                        delay={150}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                        className=""
                        />
                    </h1>
                    <Link to={buttonPath}>
                    <Button
                        data-aos="fade-up"
                        className="font-code">
                        <i className={`bx bx-${buttonIcon}`}></i>
                        {buttonLabel}
                    </Button>
                    </Link>                    
                </div>
            </div>
        </>
    );
}