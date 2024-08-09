function call() {
  console.log("hey");

  const font = document.querySelector(".font");
  const fontDrop = document.querySelector("#fontDrop");
  const size = document.querySelector(".size");
  const sizeDrop = document.querySelector("#sizeDrop");

  font.addEventListener("click", () => {
    fontDrop.classList.toggle("ShowHide");
  });

  size.addEventListener("click", () => {
    sizeDrop.classList.toggle("ShowHide");
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
