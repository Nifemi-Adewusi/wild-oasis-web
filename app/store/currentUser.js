import { create } from "zustand";
import { auth } from "../_lib/auth";

async function getUserSession() {
    const session = await auth();
    return session.user;
}

const useCurrentUser = create((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    getUserSession: () => getUserSession(),
}))

export default useCurrentUser