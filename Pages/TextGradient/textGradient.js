function call() {
  console.log("hey");

  const font = document.querySelector(".font");
  const fontDrop = document.querySelector("#fontDrop");
  const size = document.querySelector(".size");
  const sizeDrop = document.querySelector("#sizeDrop");

  font.addEventListener("click", () => {
    fontDrop.classList.toggle("ShowHide");
    sizeDrop.classList.add("ShowHide");
  });

  size.addEventListener("click", () => {
    sizeDrop.classList.toggle("ShowHide");
    fontDrop.classList.add("ShowHide");
  });

  //!================================================================
  const userText = document.querySelector(".userText");
  const fontItems = document.querySelectorAll("li[data-font]");
  const fontName_userSelected = document.querySelector(
    ".fontName_userSelected"
  );
  const sizeItems = document.querySelectorAll("li[data-size]");
  const sizeName_UserSelected = document.querySelector(
    ".sizeName_UserSelected"
  );
  const textEdit_Input = document.querySelector(".textEdit_Input");

  fontItems.forEach((item) => {
    item.addEventListener("click", function () {
      const fontMap = {
        Uniqloves: '"Uniqloves", sans-serif',
        Impact: '"Impact", sans-serif',
        Coffie: '"CoffieBold", sans-serif',
        Squad: '"BoldSquad", sans-serif',
        Lobster: '"Lobster", cursive',
        Josefin: '"Josefin Sans", sans-serif',
        Inter: '"Inter Tight", sans-serif',
      };
      const selectedFont = fontMap[this.textContent] || "sans-serif";
      userText.style.fontFamily = selectedFont;

      fontItems.forEach((el) => el.classList.remove("selected"));
      this.classList.add("selected");

      fontName_userSelected.innerHTML = this.textContent;
    });
  });
  sizeItems.forEach((x) => {
    x.addEventListener("click", () => {
      sizeItems.forEach((remove) => {
        remove.classList.remove("selected");
      });
      x.classList.add("selected");
      x.textContent === "Small" && (userText.style.transform = "scale(0.95)");
      x.textContent === "Medium" && (userText.style.transform = "scale(1)");
      x.textContent === "Large" && (userText.style.transform = "scale(1.1 )");
      sizeName_UserSelected.innerHTML = x.textContent;
    });
  });

  textEdit_Input.addEventListener("input", (e) => {
    userText.innerHTML = e.target.value;
  });
  textEdit_Input.addEventListener("click", () => {
    fontDrop.classList.add("ShowHide");
    sizeDrop.classList.add("ShowHide");
  });

  //!=======================================================

  const editIcon = document.querySelector(".editIcon");
  const edit = document.querySelector(".edit");
  editIcon.addEventListener("click", () => {
    edit.classList.toggle("ShowHide");
  });

  //!=========================================reset
  const resetIcon = document.querySelector(".resetIcon");
  const defaultFont = document.querySelector(".defaultFont");
  const defaultSize = document.querySelector(".defaultSize");
  resetIcon.addEventListener("click", () => {
    // test
    userText.innerHTML = "Life is tough, but so are you.";
    textEdit_Input.value = "Life is tough, but so are you.";
    //font
    fontName_userSelected.innerHTML = "Squad";
    fontItems.forEach((el) => el.classList.remove("selected"));
    defaultFont.classList.add("selected");
    userText.style.fontFamily = ` "BoldSquad", sans-serif`;

    //size
    sizeName_UserSelected.innerHTML = "Medium";
    sizeItems.forEach((remove) => {
      remove.classList.remove("selected");
    });
    defaultSize.classList.add("selected");
    userText.style.transform = "scale(1)";

    //close
    edit.classList.toggle("ShowHide");
  });
  //!========================================= COLOR INPUT CHANGE
  const colorInputColor1 = document.getElementById("colorInputColor1");
  const colorInputText1 = document.getElementById("colorInputText1");
  const colorInputColor2 = document.getElementById("colorInputColor2");
  const colorInputText2 = document.getElementById("colorInputText2");

  let color1 = "#4158d0";
  let color2 = "#c850c0";
  let degNum = "180";
  colorInputColor1.addEventListener("input", () => {
    const color = colorInputColor1.value;
    colorInputText1.value = color;
    color1 = color;
    updateUserTextColor();
    setValuesToCode(degNum, color1, color2);
  });

  colorInputText1.addEventListener("input", () => {
    const colorText = colorInputText1.value;

    if (colorText.length == 7) {
      colorInputColor1.value = colorText;
      color1 = colorText;
      updateUserTextColor();
      setValuesToCode(degNum, color1, color2);
    }
  });

  //------------2
  colorInputColor2.addEventListener("input", () => {
    const color = colorInputColor2.value;
    colorInputText2.value = color;
    color2 = color;
    updateUserTextColor();
    setValuesToCode(degNum, color1, color2);
  });

  colorInputText2.addEventListener("input", () => {
    const colorText = colorInputText2.value;
    if (colorText.length == 7) {
      colorInputColor2.value = colorText;
      color2 = colorText;
      updateUserTextColor();
      setValuesToCode(degNum, color1, color2);
    }
  });

  function updateUserTextColor() {
    userText.style.background = `linear-gradient( ${color1}, ${color2})`;
    userText.style.backgroundClip = `text`;
  }

  //=======------- set values to code
  const setDeg = document.querySelector(".setDeg");
  const setColor1 = document.querySelector(".setColor1");
  const setColor2 = document.querySelector(".setColor2");

  function setValuesToCode(setDegV, setColor1V, setColor2V) {
    setDeg.innerHTML = `${setDegV}deg`;
    setColor1.innerHTML = setColor1V;
    setColor2.innerHTML = setColor2V;
  }

  //!=====================rotate
  const direction = document.getElementById("direction");
  direction.addEventListener("input", () => {
    degNum = direction.value;
    userText.style.background = `linear-gradient(${degNum}deg ,${color1}, ${color2})`;
    userText.style.backgroundClip = `text`;
    setValuesToCode(degNum, color1, color2);
  });

  //!=================reset color and degree
  const cdReset = document.getElementById("cdReset");
  cdReset.addEventListener("click", () => {
    colorInputText1.value = "#4158d0";
    colorInputColor1.value = "#4158d0";
    colorInputText2.value = "#c850c0";
    colorInputColor2.value = "#c850c0";
    direction.value = "180";

    color1 = "#4158d0";
    color2 = "#c850c0";
    degNum = "180";
    updateUserTextColor();
    setValuesToCode(degNum, color1, color2);
  });

  //!==========Copy Code

  document.getElementById("copyButton").addEventListener("click", () => {
    const cssProperties = [
      `background: linear-gradient(${degNum}deg ,${color1}, ${color2} );`,
      "-webkit-background-clip: text;",
      "-webkit-text-fill-color: transparent;",
      "background-clip: text;",
      "color: transparent;",
    ];

    const formattedCSS = [
      "p {",
      ...cssProperties.map((property) => `    ${property}`),
      "}",
    ].join("\n");

    document.getElementById("cssOutput").textContent = formattedCSS;
    navigator.clipboard.writeText(formattedCSS);

    //---
    const copyButton = document.querySelector("#copyButton");
    copyButton.style.filter =
      "invert(44%) sepia(79%) saturate(3344%) hue-rotate(80deg) brightness(96%) contrast(101%)";
    document.querySelector(".copyPop").style.display = "block";
    setTimeout(() => {
      document.querySelector(".copyPop").style.display = "none";
      copyButton.style.filter = "invert(80%)";
    }, 2000);
  });

  //----------------------------------------------------------------
  //----------------------------------------------------------------
  //----------------------------------------------------------------
  //----------------------------------------------------------------
  //----------------------------------------------------------------
  //----------------------------------------------------------------
  //----------------------------------------------------------------
  //----------------------------------------------------------------
  //----------------------------------------------------------------
  //----------------------------------------------------------------
  //----------------------------------------------------------------
  //----------------------------------------------------------------
  //----------------------------------------------------------------
  //----------------------------------------------------------------
}
console.log("hello");
call();
