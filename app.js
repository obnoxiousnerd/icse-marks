const subjectSel = document.querySelector("select#subject");
const bestMarks1Sel = document.querySelector("input.highest-marks-1");
const bestMarks2Sel = document.querySelector("input.highest-marks-1");
const bestMarks3Sel = document.querySelector("input.highest-marks-1");
const internalMarksSel = document.querySelector("input.internal-marks");
const calculate = () => {
  const subject = subjectSel.value;
  const bestMarks1 = parseFloat(bestMarks1Sel.value);
  const bestMarks2 = parseFloat(bestMarks2Sel.value);
  const bestMarks3 = parseFloat(bestMarks3Sel.value);
  const internalMarks = parseFloat(internalMarksSel.value);
  let extPerc = 1.25;
  let intPerc = 5;
  let marksWeightage = 0.8;
  if (subject === "com") {
    extPerc = 1;
    intPerc = 1;
    marksWeightage = 1;
    const avg = (bestMarks1 + bestMarks2 + bestMarks3) / 3;
    const percentage = 0.7 * avg * extPerc + 0.3 * internalMarks * intPerc;
    const boardMarks = percentage * marksWeightage;
    return (boardMarks + internalMarks) / 2;
  }
  const avg = (bestMarks1 + bestMarks2 + bestMarks3) / 3;
  const percentage = 0.7 * avg * extPerc + 0.3 * internalMarks * intPerc;
  const boardMarks = percentage * marksWeightage;
  return boardMarks + internalMarks;
};

document.querySelector("#calculate").addEventListener("click", () => {
  document.querySelector(".final-marks").innerHTML =
    Math.floor(calculate()) + "/100";
});
