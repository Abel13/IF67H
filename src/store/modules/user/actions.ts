export const SIGN_UP = "@user/SIGN_UP";

export function signUpRequest({ name, email, password }: SignUpFormValues) {
  console.log("ACTION RUNNING")
  return {
    type: SIGN_UP,
    payload: { name, email, password },
  };
}