import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Personne: {
        fullName: "Eya Yahyaoui",
        bio: "Développeuse passionnée par les technologies web et le développement d'applications.",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Développeuse Web",
      },
      montre: false,
      tempsEcoule: 0,
    };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        tempsEcoule: prevState.tempsEcoule + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  basculerMontre = () => {
    this.setState({
      montre: !this.state.montre,
    });
  };

  render() {
    const { Personne, montre, tempsEcoule } = this.state;

    return (
      <div className="App" style={{ textAlign: "center", marginTop: "30px" }}>
        <h1>Mon Application Profil</h1>

        <p style={{ fontSize: "18px", color: "#555" }}>
          Temps écoulé depuis le montage du composant :{" "}
          <strong>{tempsEcoule} secondes</strong>
        </p>

        <button
          onClick={this.basculerMontre}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          {montre ? "Masquer le profil" : "Afficher le profil"}
        </button>

        {montre && (
          <div
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "8px",
              width: "300px",
              margin: "0 auto",
            }}
          >
            <img
              src={Personne.imgSrc}
              alt={Personne.fullName}
              style={{ width: "150px", height: "150px", borderRadius: "50%" }}
            />
            <h2>{Personne.fullName}</h2>
            <h3>{Personne.profession}</h3>
            <p>{Personne.bio}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
