import { useState } from "react";
import httpClient from "../util/http-client";

const usePost = (url: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const post = async () => {
    try {
      setLoading(true);
      await httpClient.post(url);
    } catch (e: any) {
      setError(e?.message || "error");
    } finally {
      setLoading(false);
    }
  };
  return { post, loading, error };
};

export default usePost;
