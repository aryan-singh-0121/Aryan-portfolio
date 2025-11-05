import { useState, useEffect } from "react";

export function useSessionId() {
  const [sessionId, setSessionId] = useState("");

  useEffect(() => {
    let sid = localStorage.getItem("sessionId");
    if (!sid) {
      sid = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem("sessionId", sid);
    }
    setSessionId(sid);
  }, []);

  return sessionId;
}
