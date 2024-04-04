import Image from "next/image";
import classes from "./header.module.scss";

export default function Header()
{
    return (
        <>
        
        <div className={classes.primaryBg}>
            <Image
                className={classes.lordImage}
                src="/assets/images/krishna-arjuna.jpeg"
                width={500}
                height={500}
                alt="Picture of the author"
                quality={100}
                priority
            />
            <h1>Welcome to header component</h1>
        </div>
        <Image
                className={classes.lordImage}
                src="/assets/images/krishna-arjuna.jpeg"
                width={500}
                height={500}
                alt="Picture of the author"
                quality={100}
                priority
            />
        </>
        
    )
}