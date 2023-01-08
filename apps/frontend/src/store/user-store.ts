import create from "zustand";
import { devtools } from "zustand/middleware";

interface UserState {
  id: string | undefined;
  name: string | undefined;
  loading: boolean;
  deleteUser: () => void;
}

const useUserStore = create<UserState>()(
  devtools(
    (set) => ({
      id: undefined,
      name: undefined,
      loading: true,
      deleteUser: () => set({ id: undefined, name: undefined }),
    }),

    {
      name: "user-store",
    }
  )
);

export default useUserStore;
