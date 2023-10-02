import React, { useState } from "react";
import firstUser from "../../data/user.json";

export default function UserDataSimpleCorrect() {
  const [user, setUser] = useState(firstUser);

  return (
    <div>
      <h1>
        {user.firstName} {user.lastName} - {user.admin ? "Admin" : "User"}
      </h1>
      <p>Email: {user.email}</p>
      <p>
        Location: {user.city}, {user.state}
      </p>
      <button
        /**
         * Doing this would overwrite state from firstUser and replace it with
         * just what we sent to the setUser function: {admin: true}.
         */
        onClick={() => {
          setUser({ ...user, admin: true });
        }}
      >
        Make Admin
      </button>
    </div>
  );
}