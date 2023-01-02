import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store/user-store";
import { LoadingOverlay } from "@mantine/core";

// @ts-ignore
const withAuthentication = (WrappedComponent) => {
  const UserIsNotAuthenticated = (props: object) => {
    const userId = useUserStore((state) => state.id);
    const loading = useUserStore((state) => state.loading);
    const navigate = useNavigate();
    useEffect(() => {
      if (!loading && !userId) {
        navigate("/");
      }
    }, [loading, userId]);

    if (loading) {
      return (
        <div style={{ width: "100%", height: "100%" }}>
          <LoadingOverlay visible overlayBlur={2} />
        </div>
      );
    }

    if (userId) {
      return <WrappedComponent {...props} />;
    }
  };

  return UserIsNotAuthenticated;
};

export default withAuthentication;
