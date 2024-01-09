import { ReactElement, createContext, useContext } from "react";
export type UserFetcher = (url: string) => Promise<UserProfile | undefined>;

export type UserProvider = (
  props: UserProviderProps
) => ReactElement<UserContext>;
export type UserProviderProps = React.PropsWithChildren<
  {
    user?: UserProfile;
    profileUrl?: string;
    fetcher?: UserFetcher;
  }
>;

export interface UserProfile {
  email?: string | null;
  email_verified?: boolean | null;
  name?: string | null;
  nickname?: string | null;
  picture?: string | null;
  sub?: string | null;
  updated_at?: string | null;
  org_id?: string | null;
  [key: string]: unknown; // Any custom claim which could be in the profile
}

export type UserProviderState = {
  user?: UserProfile;
  error?: Error;
  isLoading: boolean;
};

export type UserContext = {
  user?: UserProfile;
  error?: Error;
  isLoading: boolean;
};

export type UseUser = () => UserContext;

export const useUser: UseUser = () => useContext<UserContext>(UserContext);

export const UserContext = createContext<UserContext>({
  get user(): never {
    throw new Error();
  },
  get error(): never {
    throw new Error();
  },
  get isLoading(): never {
    throw new Error();
  },
});

