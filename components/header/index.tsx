import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-2 px-5 font-semibold border-b">
      <div className="flex items-center gap-5 max-[350px]:hidden">
        <p>Music</p>
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Account</p>
      </div>
      <div>
        <Link href={"/login"}>
          <p>Login</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
