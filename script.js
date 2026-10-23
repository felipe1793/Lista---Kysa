console.log("teste")

gsap.registerPlugin(SplitText);

document.fonts.ready.then(() => {
  gsap.set("#animacao", { opacity: 1 });

  const headlineSplit = SplitText.create("#animacao", {
    type: "words",
    wordsClass: "word++",
    ignore: "sup"
  });

  gsap.from(headlineSplit.words, {
    y: -100,
    opacity: 0,
    rotation: "random(-80, 80)",
    stagger: 0.1,
    duration: 1,
    ease: "back"
  });
});