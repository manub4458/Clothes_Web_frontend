"use client"
// import { signIn } from "next-auth/react";
// import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const Socials = () => {
    const handleOauthLogin = async (provider) => {
        await signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT,
        });
    };

    // const onClick = async () =>{
    //    await signIn("github",{
    //       callbackUrl : DEFAULT_LOGIN_REDIRECT,
    
    //     });
    //   }

    return (
        <div className="w-full flex justify-center gap-x-2 ">
            {/* <div className="w-full relative flex flex-col items-center justify-center">
                <Separator className="absolute top-1/2" />
                <div className="text-center z-10 px-1 bg-white text-muted-foreground font-semibold">
                    Or
                </div>
            </div> */}
            <Button
                variant="outline"
                className="w-full rounded-xl"
                // onClick={handleOauthLogin}
         onClick={()=> handleOauthLogin("google")}

            >
                <FcGoogle className="w-4 h-4 mr-2 " />
                Google
            </Button>
            <Button
                variant="outline"
                className="w-full rounded-xl"
                onClick={()=>handleOauthLogin("github")}
        //  onClick={onClick}
            >
                <FaGithub className="w-4 h-4 mr-2" />
                Github
            </Button>
        </div>
    );
};

export default Socials;
