const names = document.getElementById("name");

const nameP = document.getElementById("name-p");

const passwordIn = document.getElementById("input-password");

const passwordP = document.getElementById("password-p");

const rePassword = document.getElementById("re-password");

const rePasswordP = document.getElementById("re-password-p");

const email = document.getElementById("email");

const emailP = document.getElementById("email-p");

const phone = document.getElementById("phone");
const phoneP = document.getElementById("phone-p");

function pFocusBlock(x, y) {
  x.innerHTML = y;
  x.className = "p";
}
let check = [];

console.log(check);

function flase(x, y, z) {
 
  x.className = "input-text-f";
  y.innerHTML = z;
  y.className = "p-f";

  
}

function success(x, y) {
  x.className = "input-text";
  y.innerHTML = "";
}

names.addEventListener("blur", function () {
  let namesValues = names.value;
  let nameslength = namesValues.length;
  if (nameslength < 4 || nameslength > 6) {
    flase(names, nameP, "名称不合法");
  } else {
    success(names, nameP);
  }
});
names.addEventListener("focus", function () {
  pFocusBlock(nameP, "4-6");
});

passwordIn.addEventListener("blur", function () {
  let passwordInValues = passwordIn.value;
  let passwordInlength = passwordInValues.length;
  const reg = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/);
  if (passwordInlength < 6 || passwordInlength > 8) {
    flase(passwordIn, passwordP, "密码不合法");
  } else if (!reg.test(passwordInValues)) {
    flase(passwordIn, passwordP, "密码不合法");
  } else {
    success(passwordIn, passwordP);
  }
});

passwordIn.addEventListener("focus", function () {
  pFocusBlock(passwordP, "密码6-8位，必须包含数字和密码");
});

rePassword.addEventListener("blur", function () {
  let passwordInValues = passwordIn.value;
  let rePasswordValues = rePassword.value;
  if (passwordInValues === rePasswordValues) {
    success(rePassword, rePasswordP);
  } else {
    flase(rePassword, rePasswordP, "密码不一致");
  }
});

rePassword.addEventListener("focus", function () {
  pFocusBlock(rePasswordP, "与上面密码一致");
});

email.addEventListener("blur", function () {
  const reg = new RegExp(
    /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
  );
  let emailValues = email.value;
  if (!reg.test(emailValues)) {
    flase(email, emailP, "邮箱样式不合格");
  } else {
    success(email, emailP);
  }
});

email.addEventListener("focus", function () {
  pFocusBlock(emailP, "请输入合法邮箱");
});

phone.addEventListener("blur", function () {
  let phoneValues = phone.value;
  let phonelength = phoneValues.length;

  if (phonelength < 11) {
    flase(phone, phoneP, "手机号不合法");
  } else {
    success(phone, phoneP);
  }
});

phone.addEventListener("focus", function () {
  pFocusBlock(phoneP, "请输入11位手机号");
});
