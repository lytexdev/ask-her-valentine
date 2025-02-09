# Ask her Valentines Day 🌹

## Overview
A interactive website to ask your girlfriend, boyfriend, or anyone else to be your Valentine! 

## Features
- **Running "No" Button** - smoothly moves away from the cursor (doens't work on touch devices)
- **Funny Text Changes** - eight different reactions when "No" is clicked
- **Animated Transitions** - smooth fade-ins, bounces, and pop effects
- **Sweet Valentine Design** - soft colors, cute fonts, and lovely animations

## Preview
https://lytexdev.github.io/ask-her-valentine/

## Installation

### Prerequisites
- docker-compose (only for the Docker version)

**Clone the repository**
```bash
git clone https://github.com/lytexdev/ask-her-valentine.git
cd ask-her-valentine
```

### Running with Docker
```bash
# with docker-compose-v2
docker compose up -d

# with docker-compose-v1
docker-compose up -d
```
By default, it runs on port 80.

### Running without Docker  
If you don't want to use Docker, you can switch to the `setup-without-docker` branch.  
It contains a simple version with just the HTML, CSS, and JavaScript files.  

```bash
git checkout setup-without-docker
```

## License
This project is licensed under MIT. See the [LICENSE](LICENSE) file for details.
