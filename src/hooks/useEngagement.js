import { useState, useEffect } from "react";

export function useEngagement(sessionId) {
  const [likes, setLikes] = useState(319);
  const [follows, setFollows] = useState(213);
  const [comments, setComments] = useState(0);
  const [userLiked, setUserLiked] = useState(false);
  const [userFollowed, setUserFollowed] = useState(false);

  useEffect(() => {
    if (!sessionId) return;

    const checkUserInteractions = async () => {
      try {
        const res = await fetch(`/api/user-interaction?sessionId=${sessionId}`);
        const data = await res.json();
        setUserLiked(data.hasLiked || false);
        setUserFollowed(data.hasFollowed || false);
      } catch (error) {
        console.error("Error checking interactions:", error);
      }
    };

    const fetchEngagement = async () => {
      try {
        const res = await fetch("/api/engagement");
        const data = await res.json();
        setLikes(data.likes);
        setFollows(data.follows);
        setComments(data.comments);
      } catch (error) {
        console.error("Error loading engagement:", error);
      }
    };

    checkUserInteractions();
    fetchEngagement();
  }, [sessionId]);

  const handleLike = async () => {
    if (userLiked) {
      alert("❌ You've already liked! Each user can like only once.");
      return;
    }
    try {
      const res = await fetch("/api/user-interaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, action: "likes" }),
      });
      const data = await res.json();
      if (data.success) {
        setLikes(data.count);
        setUserLiked(true);
        alert("❤️ Thanks for liking!");
      }
    } catch (error) {
      console.error("Error liking:", error);
    }
  };

  const handleFollow = async () => {
    if (userFollowed) {
      alert("❌ You've already followed! Each user can follow only once.");
      return;
    }
    try {
      const res = await fetch("/api/user-interaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, action: "follows" }),
      });
      const data = await res.json();
      if (data.success) {
        setFollows(data.count);
        setUserFollowed(true);
        alert("👥 Thanks for following!");
      }
    } catch (error) {
      console.error("Error following:", error);
    }
  };

  return {
    likes,
    follows,
    comments,
    userLiked,
    userFollowed,
    handleLike,
    handleFollow,
  };
}
