import { ChatIcon, HeartIcon, ShareIcon } from "@heroicons/react/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/solid";
import useLikePost from "@hooks/api/mutation/useLikePost";
import useUnlikePost from "@hooks/api/mutation/useUnlikePost";
import React, { useState } from "react";
import CommentForm from "@components/CommentForm";
import TimeAgo from "timeago-react";
const PostItem = ({
  id,
  name = "Name of user",
  content = "So happy to be here",
  media = [
    "https://picsum.photos/500/500.jpg?random=1",
    "https://picsum.photos/500/500.jpg?random=2",
  ],
  author = { lastName: "Name of user" },
  likeCount,
  createdAt = Date.now(),
  isUserLiked,
}) => {
  const [likePost] = useLikePost();
  const [unlikePost] = useUnlikePost();

  return (
    <div className="space-y-2 bg-white rounded-lg shadow dark:bg-gray-900">
      <div className="p-2 space-y-2">
        <div className="flex space-x-1">
          <img
            src={author?.avatar || "https://dummyimage.com/50x50.png"}
            alt=""
            className="rounded-full h-[50px] w-[50px]"
          />
          <div>
            <div className="font-bold dark:text-gray-50">{author.lastName}</div>
            <div className="text-gray-500 dark:text-gray-400">
              <TimeAgo locale="es" datetime={createdAt}></TimeAgo>
            </div>
          </div>
        </div>
        <div className="dark:text-gray-50">{content}</div>
      </div>

      <div className="flex w-full space-x-1">
        {media?.map((image, i) => (
          <div className="flex-1 overflow-hidden rounded-xl" key={i}>
            <img src={image} alt="" className="object-cover" />
          </div>
        ))}
      </div>
      <div className="flex">
        <button
          onClick={() =>
            isUserLiked
              ? unlikePost({
                  variables: { id },
                  optimisticResponse: {
                    unLikePost: {
                      id: id,
                      likeCount: likeCount - 1,
                      isUserLiked: false,
                      __typename: "Post",
                    },
                  },
                })
              : likePost({
                  variables: { id },
                  optimisticResponse: {
                    likePost: {
                      id: id,
                      likeCount: likeCount + 1,
                      isUserLiked: true,
                      __typename: "Post",
                    },
                  },
                })
          }
          className="flex items-center justify-center flex-1 p-2 space-x-2 text-center rounded-lg cursor-pointer dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {isUserLiked ? (
            <SolidHeartIcon className="w-6 h-6" />
          ) : (
            <HeartIcon className="w-6 h-6" />
          )}{" "}
          <span className="text-base">Like</span>
        </button>
        <div className="flex items-center justify-center flex-1 p-2 space-x-2 text-center rounded-lg cursor-pointer dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700">
          <ChatIcon className="w-6 h-6" />
          <span>Comment</span>
        </div>
        <div className="flex items-center justify-center flex-1 p-2 space-x-2 text-center rounded-lg cursor-pointer dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700">
          <ShareIcon className="w-6 h-6" />
          <span>Share</span>
        </div>
      </div>
      <div className="space-y-2">
        <CommentForm postId={id} />
      </div>
    </div>
  );
};

export default PostItem;