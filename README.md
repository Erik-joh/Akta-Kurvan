# Akta-Kurvan

<details><summary>Pull Request Log</summary>
<ul>
<li>https://github.com/Erik-joh/Akta-Kurvan/pull/1</li>
<li>https://github.com/Erik-joh/Akta-Kurvan/pull/2</li>
<li>https://github.com/Erik-joh/Akta-Kurvan/pull/3</li>
<li>https://github.com/Erik-joh/Akta-Kurvan/pull/4</li>
<li>https://github.com/Erik-joh/Akta-Kurvan/pull/5</li>
<li>https://github.com/Erik-joh/Akta-Kurvan/pull/6</li>
<li>https://github.com/Erik-joh/Akta-Kurvan/pull/7</li>
<li>https://github.com/Erik-joh/Akta-Kurvan/pull/8</li>
<li>https://github.com/Erik-joh/Akta-Kurvan/pull/9</li>
<li>https://github.com/Erik-joh/Akta-Kurvan/pull/10</li>
<li>https://github.com/Erik-joh/Akta-Kurvan/pull/11</li>
<li>https://github.com/Erik-joh/Akta-Kurvan/pull/12</li>
</ul>
</details>

## Play On Website

https://akta-kurvan.netlify.app/

## Installation

1. Clone the repository

```
$ git clone https://github.com/Erik-joh/Akta-Kurvan
```

2. Navigate to the folder where you cloned the repository via the terminal

3. Start a local server

4. Open up your favorite browser and enter server port in the url

5. Enjoy!

## Authors

- **Andreas Pandzic** - _Initial work_ - [Andreas](https://github.com/APandzic)
- **Erik Johannesson** - _Initial work_ - [Erik](https://github.com/Erik-joh)

## Testers

- Ros Haidar
- Alice Holmberg
- Edwin Haddadian
- Viktor Hallman
-
-

## Code review

by [Michaela Lundborg](https://github.com/lundborgm) and [Thomas Sönnerstam](https://github.com/ThomasSonnerstam)

- index.html:7 - You should consider changing the placeholder title and replace it to the name of your game.
- index.html:34 - Your data-text and button name are in Swedish despite the rest of the game being in English. Try not to use non-English words as properties.
- src/styles/style.css:61&88 - There is a lot of repetition here, both buttons have identical styling except for the margin. Maybe you can put them together to save some space?
- src/Classes: Class file names are usually capitalized for clarification.
- index.js:24, 45, 46: Try to group variable declarations instead of having them spread out. A great example is how you have done in select.js. It makes the code far more readable.
- src/scripts/select.js:22 & scoreBoard.js:11 - Try to be consistent with functions. You are using both arrow functions and "regular" functions.
- src/scripts/select.js:43 - This variable has a typo, it should be _playersSelectName_ and not playersSelcetName.
- General - Although the point and rules of the game might seem quite clear for some, it is never described what the game's goal is. During the control options before you start the game, it is neither stated what the chosen keys are for (i.e movement).
- General - It would be nice to see some comments in the code, as it is much easier as a reader to understand what some code blocks do. You have however named functions and variables well.
- Overall - Well structured code and it is fairly easy to follow. As mentioned above a bit of clarification and maybe some comments in the code and you've done an excellent job!
