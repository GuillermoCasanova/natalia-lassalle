
<style>

.spiral {
  position: absolute;
  left:0; 
  right: 0; 
  bottom: 0; 
  width: 15vw; 
  height: 15vw;
  z-index: 3;
  margin: auto; 
  bottom: 0; 
  top: 0; 
  animation: rotate 1.5s linear infinite;
  max-width: 3.5rem;
}

.spiral svg,
 img {
  width: 100%; 
  height: 100%; 
  object-fit: cover;
}

.spiral svg {
  fill: #fff; 
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }

   100% {
    transform: rotate(360deg);
   }
}
</style>


<div class="spiral">
    <svg role="presentation"><use xlink:href="#spiral" /></svg>
  </div>
