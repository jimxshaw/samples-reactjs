function ProfileCard(props) {
  // const title = props.title;
  // const handle = props.handle;

  // Destructuring
  const { title, handle } = props;

  return (
    <div>
      <div>Title is {title}</div>
      <div>Handle is {handle}</div>
    </div>
  );
}

export default ProfileCard;
