import React from "react";

export default function OAuthNaverButton({
  onClick,
}: {
  onClick?: () => void;
}) {
  return (
    <div onClick={onClick} className="w-[16rem] my-2 cursor-pointer">
      <img
        className="w-full"
        src="2021_Login_with_naver_guidelines_En/btnG_official.png"
        alt=""
      />
    </div>
  );
}
