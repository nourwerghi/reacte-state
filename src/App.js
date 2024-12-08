import React from "react";
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Person: {
        fullName: "Dudu",
        bio: "Welcome to Dudu's working world.",
        imgSrc: "https://th.bing.com/th/id/OIP.sUU6Ly3pJ3TBQDfHVAb5GgHaHa?pid=ImgDet&w=191&h=191&c=7",
        profession: "Web Developer",
      },
      shows: false,
      timeSinceMounted: 0,
    };

    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMounted: prevState.timeSinceMounted + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  render() {
    const { Person, shows, timeSinceMounted } = this.state;

    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <button onClick={this.toggleProfile}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div style={{ marginTop: "20px" }}>
            <img
              src={Person.imgSrc}
              alt="Profile"
              style={{ width: "200px", height: "250px", borderRadius: "50%" }}
            />
            <h2>{Person.fullName}</h2>
            <h4>{Person.bio}</h4>
            <h3>{Person.profession}</h3>
          </div>
        )}

        <p>Time since component mounted: {timeSinceMounted} seconds</p>
      </div>
    );
  }
}

export default App;
