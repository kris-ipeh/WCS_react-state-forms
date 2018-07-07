# Gestion d'état (state) et de formulaire

Dans cette quête tu vas voir le changement d'état sur un composant et l'utilisation de formulaire.

___

## Objectifs

* Changer l'état d'un composant
* Récupérer les informations d'un formulaire
* Injecter les informations d'un formulaire dans l'état du composant

___

## Challenge

### Password complexity

Créer un composant Password qui affiche un texte en fonction de la complexité du mot de passe. Ce composant contient un formulaire avec un champ input, un bouton (de type submit) et une zone de texte (pour le texte sur la complexité).

Le texte à afficher est :

* Mot de passe faible (< 6 caractères / tout en minuscule / pas de caractères spéciaux)
* Mot de passe moyen (> 6 caractères / minuscules + majuscules / pas de caractères spéciaux)
* Mot de passe fort (> 6 caractères / minuscules + majuscules / caractères spéciaux)

De plus, le formulaire ne pourra pas être envoyé si le mot de passe est faible, dans ce cas, une alerte s'affichera avec le message ``Votre mot de passe est trop faible``.

Le composant ``<Password />`` doit être appelé dans le composant ``<App />``

### Critéres de validation :

* Le composant est dans une classe javascript ES6
* L'appel du composant ressemble à <Password /> et affiche un input ainsi qu'un bouton
* Si le mot de passe est trop faible le formulaire ne s'envoie pas
* Le texte sur la complexité du mot de passe évolue en fonction de ce que tape l'utilisateur

### Test de l'exercice :

    $ git clone https://github.com/kris-ipeh/WCS_react-state-forms.git
    $ cd WCS_react-state-forms
    $ npm install