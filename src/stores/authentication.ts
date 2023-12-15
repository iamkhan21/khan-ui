import { persistentAtom } from "@nanostores/persistent";
import { useStore } from "@nanostores/react";
import { atom, useAtom } from "jotai";
import { create } from "zustand";

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

// -------------- Jotai --------------

const priceAtom = atom(10);

export const usePrice = () => {
	return useAtom(priceAtom);
};

// -------------- Zustand --------------

type Store = {
	count: number;
	inc: () => void;
};

export const useBear = create<Store>()((set) => ({
	count: 1,
	inc: () => set((state) => ({ count: state.count + 1 })),
}));
