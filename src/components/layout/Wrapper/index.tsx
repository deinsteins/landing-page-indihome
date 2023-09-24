import { When } from "react-if";
import { tw } from "@/utils/style";

import { Footer } from "@/components/layout";
import Nav from "@/components/nav";
 
interface Props {
    children: React.ReactNode;
    title?: string;
    className?: string;
    centered?: boolean;
    footer?: boolean;
    screenMax?: boolean;
    backPath?: string | null;
}

const Wrapper: React.FC<Props> = ({ children, className, centered, footer }) => {
    return (
        <main className={tw("flex flex-col min-h-screen")}>
            <Nav />
            <main
                className={tw("relative flex-1 bg-background min-w-[360px] overflow-auto", centered && "flex items-center justify-center", className)}
            >
                {children}
            </main>
            <When condition={footer}>
                <Footer />
            </When>
        </main>
    );
};

export default Wrapper;
