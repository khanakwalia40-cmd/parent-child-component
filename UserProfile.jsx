// UserProfile.jsx
import UserInfo from "./UserInfo";

function UserProfile() {
  const name = "Akram";
  const age = 22;

  return (
    <div>
      <h1>User Profile</h1>
      <UserInfo name={name} age={age} />
    </div>
  );
}

export default UserProfile;
