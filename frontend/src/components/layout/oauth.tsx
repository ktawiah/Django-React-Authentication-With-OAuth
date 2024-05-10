import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { FaFacebook } from "react-icons/fa6";
import { useSocialAuthenticateMutation } from "@/lib/api-endpoints";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import continueWithSocialAuth from "@/lib/social-auth";

const OAuthButtons = () => {
  const [authenticate, { isLoading }] = useSocialAuthenticateMutation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const state = searchParams.get("state") as string;
  const code = searchParams.get("code") as string;
  const handleClick =
    (provider: string, redirect: string) => async (event: React.MouseEvent) => {
      await continueWithSocialAuth(provider, redirect);
      // authenticate({ code: code, state: state, provider: provider })
      //   .unwrap()
      //   .then(() => {
      //     toast.success("Account Sign In Successful");
      //     router.push("/");
      //   })
      //   .catch(() => {
      //     toast.error("Account Sign In Unsuccessful. Please try again.");
      //   });
    };
  return (
    <div className="flex justify-between mt-5">
      <Button
        variant={"outline"}
        className="flex gap-2"
        onClick={handleClick("google-oauth2", "google")}
      >
        <FcGoogle />
        Sign In with Google
      </Button>
      <Button
        variant={"outline"}
        className="flex gap-2"
        disabled={isLoading}
        // onClick={handleClick("facebook")}
      >
        <FaFacebook />
        Sign In with Facebook
      </Button>
    </div>
  );
};

export default OAuthButtons;
