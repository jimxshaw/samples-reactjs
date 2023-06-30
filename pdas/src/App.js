import ProfileCard from './ProfileCard';

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>

      <ProfileCard title="Alexa" handle="@alexa2" />
      <ProfileCard title="Cortana" handle="@cortana84" />
      <ProfileCard title="Siri" handle="@siri01" />
    </div>
  );
}

export default App;
