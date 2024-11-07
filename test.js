const textbox = document.getElementById('myTextbox');
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://cs-api.pltw.org/question?text=test");
  xhr.send();
  xhr.responseType = "json";
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const data = xhr.response;
      console.log(data);
    } else {
      console.log(`Error: ${xhr.status}`);
    }
  };
});
