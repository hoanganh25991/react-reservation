import React from "react";

class ClickSound extends React.Component {
  componentDidMount() {
    let click_tack = document.getElementById("audio");

    document.addEventListener("click", () => {
      if (click_tack) {
        click_tack.play();
      }
    });
  }

  render() {
    return <audio id="audio" src="/click-tack.mp3" />;
  }
}

export default ClickSound;
//So simple with web
//How easy i can type sth in
