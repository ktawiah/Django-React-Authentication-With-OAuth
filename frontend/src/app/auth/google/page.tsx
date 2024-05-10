"use client";

import Spinner from "@/components/global/spinner";
import { useSocialAuthenticateMutation } from "@/lib/api-endpoints";
import useSocialAuth from "@/lib/use-social-auth";

export default function Page() {
  const [googleAuthenticate] = useSocialAuthenticateMutation();
  useSocialAuth(googleAuthenticate, "google-oauth2");

  return (
    <div className="my-8">
      <Spinner />
    </div>
  );
}
