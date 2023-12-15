import { persistentAtom } from "@nanostores/persistent";
import { useStore } from "@nanostores/react";

export type User = {
	id: string;
	name: string;
	email: string;
};

const $user = persistentAtom<User | null>("user-profile", null, {
	encode: JSON.stringify,
	decode: JSON.parse,
});

export const logIn = (user: User) => {
	$user.set(user);
};

export const logOut = () => {
	$user.set(null);
};

export const useUser = () => {
	return useStore($user);
};
