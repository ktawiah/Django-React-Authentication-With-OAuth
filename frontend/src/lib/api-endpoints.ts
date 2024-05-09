import { apiSlice } from "./features/api-slice";

interface User {
  email: string;
  first_name: string;
  last_name: string;
}

interface SocialAuthArgs {
  provider: string;
  state: string;
  code: string;
}

interface CreateUserResponse {
  success: boolean;
  user: User;
}
const authApiEndpoints = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrieveUser: builder.query<User, void>({
      query: () => "/users/me/",
    }),
    socialAuthenticate: builder.mutation<CreateUserResponse, SocialAuthArgs>({
      query: ({ provider, state, code }) => ({
        url: `/o/${provider}/?state=${encodeURIComponent(
          state
        )}&code=${encodeURIComponent(code)}`,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }),
    }),
    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: "/jwt/create/",
        body: { email, password },
        method: "POST",
      }),
    }),
    registerUser: builder.mutation({
      query: ({ email, first_name, last_name, password, re_password }) => ({
        url: "/users/",
        body: { email, first_name, last_name, password, re_password },
        method: "POST",
      }),
    }),
    verifyUser: builder.mutation({
      query: () => ({
        url: "/jwt/verify/",
        method: "POST",
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "/logout/",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useRetrieveUserQuery,
  useSocialAuthenticateMutation,
  useVerifyUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useRegisterUserMutation,
} = authApiEndpoints;
