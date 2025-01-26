# Picture-in-Picture Web Application

This project demonstrates a modern web application that allows users to select and display a media stream in Picture-in-Picture (PiP) mode using HTML5, CSS3, and JavaScript.

## Features

- **Picture-in-Picture Mode:** Enables a video element to enter PiP mode for multitasking convenience.
- **Media Stream Selection:** Prompts the user to share their screen, window, or tab.
- **Responsive Design:** Adapts to various screen sizes and resolutions.
- **Stylish Interface:** Minimalist design with a custom button styled using CSS.

## Technologies Used

- **HTML5**: For structuring the web page.
- **CSS3**: For styling and enhancing the visual appeal.
- **JavaScript (ES6)**: For dynamic behavior and functionality.

## How It Works

1. The application prompts the user to select a screen, window, or tab to share.
2. The selected media stream is displayed in a hidden video element.
3. Clicking the "Start" button activates Picture-in-Picture mode for the video.

## Project Structure

```
├── favicon.svg          # Favicon for the web page
├── index.html           # Main HTML file
├── style.css            # Stylesheet for the application
├── script.js            # JavaScript for handling functionality
```

### `index.html`

Contains the basic structure of the web page, including the video element, button, and links to the stylesheet and JavaScript.

### `style.css`

Defines the styling for the button and overall layout, focusing on a clean, dark-themed interface.

### `script.js`

Implements the core functionality:

- Prompts the user to select a media stream.
- Plays the selected media in a hidden video element.
- Requests Picture-in-Picture mode upon user interaction.

## Setup and Usage

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/picture-in-picture
   ```

2. Navigate to the project directory:

   ```bash
   cd picture-in-picture
   ```

3. Open `index.html` in your browser to launch the application.

## Demo

You can view the live demo of this project hosted on GitHub Pages:
[Picture-in-Picture Web Application](https://neendudev.github.io/picture-in-picture/)

## Future Enhancements

- Add error handling and user-friendly messages for better UX.
- Support for additional media formats.
- Enhanced styling and accessibility features.

## Author

[NeenduDev](https://github.com/NeenduDev)

## License

This project is licensed under the [MIT License](./LICENSE).

---

Feel free to contribute or provide feedback to improve this project further!
