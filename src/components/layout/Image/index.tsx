import ImageFuture, { StaticImageData } from "next/image";
import { tw } from "@/utils/style";

interface Props {
    src: StaticImageData | string;
    alt?: string;
    fill?: boolean;
    className?: string;
    parentClassName?: string;
    quality?: number;
    width?: number;
    height?: number;
    onLoad?: () => void;
}

const Image: React.FC<Props> = (props) => {
    const formattedProps = { ...props };
    delete formattedProps.alt;
    delete formattedProps.className;
    delete formattedProps.parentClassName;

    return (
        <div className={tw("relative flex items-center justify-center overflow-hidden", props.parentClassName)}>
            {props.src && <ImageFuture alt={props.alt!} className={props.className} {...formattedProps} />}
        </div>
    );
};

Image.defaultProps = {
    alt: "",
    quality: 100,
};

export default Image;
