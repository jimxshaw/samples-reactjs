function ProfileCard({ title, handle }) {
  // Destructuring props
  return (
    <div>
      <div>Title is {title}</div>
      <div>Handle is {handle}</div>
    </div>
  );
}

export default ProfileCard;
