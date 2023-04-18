import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<form>
  <div class="container">
    <label>Email : </label>
    <input type="text" placeholder="Enter Email" name="email" required>
    <label>Username : </label>
    <input type="text" placeholder="Enter Username" name="username" required>
    <label>Password : </label>
    <input type="password" placeholder="Enter Password" name="password" required>
    <button type="submit">Login</button>
    <input type="checkbox" checked="checked"> Remember me
    <button type="button" class="cancelbtn"> Cancel</button>
    Forgot <a href="#"> password? </a>
  </div>
</form>
`

setupCounter(document.querySelector('#counter'))
