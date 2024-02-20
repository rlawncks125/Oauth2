import React from "react";

export default function UserCard({
  imageURL,
  name,
  email,
  id,
  className,
}: {
  imageURL?: string;
  name?: string;
  email?: string;
  id?: string;
  className?: string;
}) {
  return (
    <div className="flex flex-col items-center  ">
      <div
        className={`${
          className || ""
        } flex flex-col items-center p-8 px-8 border rounded-lg bg-opacity-80 min-w-64 min-h-64`}
      >
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={
            imageURL ||
            "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png"
          }
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {id}
        </h5>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {name || "비공개"}
        </h5>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {email || "비공개 "}
        </div>
      </div>
    </div>
  );
}
