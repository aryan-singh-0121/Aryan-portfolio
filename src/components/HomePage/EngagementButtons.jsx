import { Heart, Users, MessageCircle } from "lucide-react";

export function EngagementButtons({
  likes,
  follows,
  comments,
  userLiked,
  userFollowed,
  onLike,
  onFollow,
}) {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <button
        onClick={onLike}
        disabled={userLiked}
        className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
          userLiked
            ? "bg-red-500/30 text-red-300 cursor-not-allowed"
            : "bg-red-500/20 text-red-300 hover:bg-red-500/40"
        }`}
      >
        <Heart size={20} fill={userLiked ? "currentColor" : "none"} />
        <span>Like ({likes})</span>
      </button>

      <button
        onClick={onFollow}
        disabled={userFollowed}
        className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
          userFollowed
            ? "bg-blue-500/30 text-blue-300 cursor-not-allowed"
            : "bg-blue-500/20 text-blue-300 hover:bg-blue-500/40"
        }`}
      >
        <Users size={20} />
        <span>Follow ({follows})</span>
      </button>

      <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-purple-500/20 text-purple-300 hover:bg-purple-500/40 transition-all duration-300 transform hover:scale-110">
        <MessageCircle size={20} />
        <span>Comments ({comments})</span>
      </button>
    </div>
  );
}
