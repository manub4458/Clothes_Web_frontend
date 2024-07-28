"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BackButton = ({
    href,
    label
}) => {
    return (
        <Button
            variant="link"
            className="font-normal w-full text-muted-foreground text-sm"
            size="sm"
            asChild
        >
            <Link href={href}>
                {label}
            </Link>
        </Button>
    );
};

export default BackButton;
