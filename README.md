# Roast Your Toast
A simple and easy-to-use Spotify playlist roaster that reads your playlist and roasts it based off the music choices and genres.
![image](https://github.com/user-attachments/assets/19b80cb3-5e84-41ad-9477-dd5a80622cf0)

## How It Works
1. A user copies their public Spotify playlist's link
2. They paste the link into the box and click "Roast"
3. A roast is automatically generated

## Features
### Frontend
- HTML5 and CSS3
- JavaScript
### Backend
- Node.js
- Spotify API (to get playlist information)
- Gemini API (to create the roasts)

## Structure
```
/roastyourtoast
│
├── /frontend               
│   ├── /public         
│       └── index.html        
│   │       └── favicon.png
│   └── /src
│        ├── /components
│            └── RoastDisplay.js
│            └── RoastForm.js
│        ├── App.js
│        ├── styles.css
│        ├── .gitignore
│        ├── package.json
├── /backend               
│   ├── server.js          
│   ├── spotify.js
│   ├── spotify-auth.js         
│   ├── gemini.js
│   ├── package.json         
│   └── .env               
│
├── package.json
└── README.md
```

## Still incomplete - WORK IN PROGRESS
- [ ] Fix website layout
- [ ] Edit README
- [ ] Add some more features
