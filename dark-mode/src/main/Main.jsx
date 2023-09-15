import React from "react";
import "../styles.css";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const Main = (props) => {
  return (
    <main>
      <div>
        <div className="icon" onClick={props.dark ? props.pMode : props.dMode}>
          {props.dark ? <FaSun className="lightSwitch" /> : <FaMoon />}
        </div>
        <div>
          <h4>A global dark theme for the web.</h4>
          <p>
            Dark mode, also known as night mode or dark theme, is a user
            interface option that changes the color scheme of software or
            applications to primarily use darker colors, such as black or dark
            gray, instead of bright ones. While the specific benefits of dark
            mode can vary depending on the context and individual preferences,
            here are some commonly recognized advantages: Reduced Eye Strain:
            Dark mode can be easier on the eyes, especially in low-light
            environments.
          </p>
          <p>
            The lower brightness and reduced blue light emission from screens
            can help alleviate eye fatigue and discomfort. Improved Sleep
            Patterns: Exposure to blue light, which is prevalent in standard
            white interfaces, can disrupt your circadian rhythm and make it
            harder to fall asleep. Dark mode, by reducing blue light, may help
            promote better sleep when using devices before bedtime. Extended
            Battery Life (for OLED/AMOLED Displays): On devices with OLED or
            AMOLED screens, dark mode can lead to energy savings. Pixels in
            these displays are individually lit, so using dark colors can reduce
            power consumption compared to bright, white backgrounds.
          </p>
          <p>
            Enhanced Focus: Dark mode can create a more immersive and focused
            environment, as it reduces distractions from bright elements. This
            can be particularly helpful for productivity apps or when reading
            content. Aesthetically Pleasing: Many users find dark mode
            aesthetically pleasing and prefer it over light themes. It can give
            a sleek and modern look to applications and websites.
          </p>
          <p>
            Accessibility: Dark mode can improve accessibility for people with
            visual impairments or sensitivity to bright light. The higher
            contrast between text and background in dark mode can make content
            easier to read. Reduced Glare: In outdoor settings or environments
            with strong ambient light, dark mode can reduce glare on screens,
            making it easier to view content. Heat Reduction: Some devices,
            particularly laptops, generate less heat when displaying dark
            screens, potentially contributing to better thermal management.
            Privacy: Dark mode can help enhance privacy, especially in shared
            spaces, by reducing the visibility of your screen content to others.
          </p>
          <p>
            Customization: Dark mode is often customizable, allowing users to
            adjust the level of darkness or choose from different dark themes,
            providing a personalized experience. It's important to note that not
            everyone prefers dark mode, and its benefits can vary from person to
            person. Some users may find light themes more comfortable or
            visually appealing. Additionally, the effectiveness of dark mode in
            reducing eye strain and improving sleep can depend on individual
            factors, such as screen brightness, screen size, and personal
            preferences. Ultimately, the choice between light and dark mode
            comes down to individual taste and comfort.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Main;
