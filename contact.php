<?php

require_once "./inc/head.tpl.php";
require_once "./inc/header.tpl.php";
require "./inc/data.php";

?>
<main class="contact">

  <div class="Présentation__Coordonnées">
      <h2 class="Coordonnées__titre">Coordonnées</h2>
      <p class="Coordonnées__Tel">Tel: <strong>06 41 34 94 06</strong></p>
      <p class="coordonnées__mail">e-mail : <strong>louiseleroux@hotmail.fr</strong></p>
  </div>

  <form class="Formulaire" action="" method="post" class="Formulaire-contact">
    <div class="nom">
      <label placeholder="votre nom" for="name">Nom : </label>
      <input type="text" name="name" id="name" required>
    </div>
    <div class="email">
      <label placeholder="adresse@email.fr" for="email">E-mail : </label>
      <input type="email" name="email" id="email" required>
    </div>
    <div class="message">
      <label placeholder="Ecrivez ici votre message" for="message">Message : </label>
      <textarea type="message" name="message" id="message" cols="70" rows="20" required></textarea>
    </div>
    <div class="bouton">
      <input type="submit" value="Envoyer">
    </div>
  </form>

</main>



<?php

require_once "./inc/footer.tpl.php";

?>