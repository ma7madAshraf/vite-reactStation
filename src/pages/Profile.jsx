import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Results from "./Results";
const Profile = () => {
  const { user } = useAuth0();
  return (
    <section>
      <div className="card bg-base-200  ">
        <div className="card-body text-xs ">
          <p className="flex justify-between  border-b pb-2 border-base-300">
            {" "}
            <span className="capitalize">username</span>{" "}
            <span className="text-secondary">{user?.name || `guest`}</span>
          </p>{" "}
          <p className="flex justify-between  border-b pb-2 border-base-300">
            {" "}
            <span className="capitalize">email</span>{" "}
            <span className="text-secondary">{user?.email || `guest`}</span>
          </p>{" "}
          <p className="flex justify-between  border-b pb-2 border-base-300">
            {" "}
            <span className="capitalize"> created</span>{" "}
            <span className="text-secondary">
              {user?.updated_at?.substring(0, 10) || ``}
            </span>
          </p>{" "}
          <section className=" mt-14 mb-6">
            <Results />
          </section>
        </div>
      </div>
    </section>
  );
};

export default Profile;
