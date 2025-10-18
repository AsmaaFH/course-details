"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface Comment {
  id: number;
  author: string;
  avatar: string;
  content: string;
  date: string;
}

export default function CommentsSection() {
  const [newComment, setNewComment] = useState("");

  const comments: Comment[] = [
    {
      id: 1,
      author: "Student Name Goes Here",
      avatar: "/user1.webp",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "Oct 10, 2021",
    },
    {
      id: 2,
      author: "Student Name Goes Here",
      avatar: "/user2.webp",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "Oct 15, 2021",
    },
    {
      id: 3,
      author: "Student Name Goes Here",
      avatar: "/user3.webp",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "Oct 20, 2021",
    },
  ];

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      console.log("New comment:", newComment);
      setNewComment("");
    }
  };

  return (
    <div className="">
      <h2 className="text-3xl text-gray-900">Comments</h2>

      <div className="space-y-0">
        {comments.map((comment, index) => (
          <div key={comment.id}>
            <div className="flex items-start space-x-4 py-6">
              {/* Avatar */}
              <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden">
                <Image
                  src={comment.avatar}
                  alt={comment.author}
                  width={48}
                  height={48}
                  className="w-16 h-16 rounded-full object-cover"
                  onError={() => {
                    const fallback = document.getElementById(`fallback-${comment.id}`);
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div
                  id={`fallback-${comment.id}`}
                  className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center absolute"
                  style={{ display: "none" }}
                >
                  <span className="text-gray-600 font-medium text-sm">{comment.author.charAt(0)}</span>
                </div>
              </div>

              {/* Comment Content */}
              <div className="flex-1 min-w-0">
                <div className="space-y-1">
                  <h3 className="text-gray-600 text-base">{comment.author}</h3>

                  <p className="text-sm text-gray-400">{comment.date}</p>

                  <p className="text-gray-500 text-sm leading-relaxed">{comment.content}</p>
                </div>
              </div>
            </div>

            {/* Separator Line */}
            {index < comments.length - 1 && <hr className="border-gray-200" />}
          </div>
        ))}
      </div>

      <div className="mt-8">
        <form onSubmit={handleSubmitComment} className="space-y-4">
          {/* Comment Textarea */}
          <div>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment"
              className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:ring-primary focus:border-transparent transition-colors"
              rows={4}
            />
          </div>

          {/* Submit Button */}
          <div className="flex">
            <button
              type="submit"
              disabled={!newComment.trim()}
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              <span>Submit Review</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
