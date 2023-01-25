const {hash} = window.location;
const message = atob(hash.replace("#", ''));

if(message) {
  document.querySelector('#message-form').classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");
  document.querySelector('h1').innerHTML = message;
}

document.querySelector("form").addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector("#message-form").classList.add('hide');
  document.querySelector("#link-form").classList.remove('hide');
  const linkForm = document.querySelector("#link-form");
  const messageInput = document.querySelector("#message-input");
  let encrypted = btoa(messageInput.value);
  let url = window.location.href += "#" + encrypted;
  let linkInput = document.querySelector("#link-input");
  linkInput.value = url;
  linkInput.select();
});