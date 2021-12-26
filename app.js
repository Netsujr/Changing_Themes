const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');
const body = document.body;

darkButton.onClick = () => {
  body.classList.remove('light');
  body.classList.add('dark');
  
};

lightButton.onClick = () => {
  body.classList.remove('dark');
  body.classList.add('light');
};

solarButton.onClick = () => {

};
