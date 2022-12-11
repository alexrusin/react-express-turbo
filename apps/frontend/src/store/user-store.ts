import create from "zustand";
import { devtools } from "zustand/middleware";
import apiClient from "../services/api-client";

interface UserState {
  id: number | undefined;
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

apiClient
  .get("/api/user")
  .then((response) => {
    const user = response.data;
    user.loading = false;
    useUserStore.setState(user);
  })
  .catch((error) => {
    useUserStore.setState({ loading: false });
  });

export default useUserStore;
