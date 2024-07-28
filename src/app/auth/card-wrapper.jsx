"use client"
import Image from "next/image";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";




import Socials from "./socials";
import BackButton from "./backButton";
import Header from "./header";

const cardWrapper = ({
    headerLabel,
    children,
    showSocial,
    backButtonHref,
    backButtonLabel
}) => {
    return (
        <div className="w-80 flex justify-center items-center bg-white ">
            <div className="aspect-[5/2] relative overflow-hidden rounded-t-sm">
                <Image
                    src="/assets/winter-sale-flex.svg"
                    fill
                    alt="Winter Sale"
                    className="object-cover"
                />
            </div>
            <Card className="rounded-sm rounded-t-none border-none">
                <CardHeader>
                    <Header label={headerLabel} />
                </CardHeader>
                <CardContent>
                    {children}
                </CardContent>
                {
                    showSocial && (
                        <CardFooter>
                            <Socials/>
                        </CardFooter>
                    )
                }
                <CardFooter>
                    <BackButton
                        href={backButtonHref}
                        label={backButtonLabel}
                    />
                </CardFooter>
            </Card>
        </div>
    );
};

export default cardWrapper;
