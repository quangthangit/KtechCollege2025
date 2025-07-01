document.getElementById("btn").addEventListener("click", function () {
  let valid = true;

  const fullname = document.getElementById("fullname");
  const errorfullname = document.getElementById("errorfullname");
  if (fullname.value.trim().length < 3) {
    errorfullname.textContent = "Họ và tên tối thiểu 3 ký tự";
    fullname.classList.add("invalid");
    valid = false;
  } else {
    errorfullname.textContent = "";
    fullname.classList.remove("invalid");
  }

  const email = document.getElementById("email");
  const erroremail = document.getElementById("erroremail");
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!emailRegex.test(email.value)) {
    erroremail.textContent = "Email không hợp lệ";
    email.classList.add("invalid");
    valid = false;
  } else {
    erroremail.textContent = "";
    email.classList.remove("invalid");
  }

  const password = document.getElementById("password");
  const errorpassword = document.getElementById("errorpassword");
  if (
    password.value.length < 8 ||
    !/[a-zA-Z]/.test(password.value) ||
    !/\\d/.test(password.value)
  ) {
    errorpassword.textContent = "Mật khẩu tối thiểu 8 ký tự, gồm chữ và số";
    password.classList.add("invalid");
    valid = false;
  } else {
    errorpassword.textContent = "";
    password.classList.remove("invalid");
  }

  const confirmpassword = document.getElementById("confirmpassword");
  const errorconfirmpassword = document.getElementById("errorconfirmpassword");
  if (
    confirmpassword.value !== password.value ||
    confirmpassword.value === ""
  ) {
    errorconfirmpassword.textContent = "Mật khẩu xác nhận không khớp";
    confirmpassword.classList.add("invalid");
    valid = false;
  } else {
    errorconfirmpassword.textContent = "";
    confirmpassword.classList.remove("invalid");
  }

  // Telephone
  const tel = document.getElementById("tel");
  const errortel = document.getElementById("errortel");
  if (!/^\\d{10,}$/.test(tel.value)) {
    errortel.textContent = "Số điện thoại chỉ gồm số, tối thiểu 10 chữ số";
    tel.classList.add("invalid");
    valid = false;
  } else {
    errortel.textContent = "";
    tel.classList.remove("invalid");
  }

  const errorgender = document.getElementById("errorgender");
  const genderChecked = document.querySelector('input[name="gender"]:checked');
  if (!genderChecked) {
    errorgender.textContent = "Vui lòng chọn giới tính";
    valid = false;
  } else {
    errorgender.textContent = "";
  }

  const date = document.getElementById("date");
  const errordate = document.getElementById("errordate");
  if (!date.value) {
    errordate.textContent = "Vui lòng chọn ngày sinh";
    date.classList.add("invalid");
    valid = false;
  } else {
    const dob = new Date(date.value);
    const now = new Date();
    const age = now.getFullYear() - dob.getFullYear();
    if (
      age < 18 ||
      (age === 18 &&
        (now.getMonth() < dob.getMonth() ||
          (now.getMonth() === dob.getMonth() && now.getDate() < dob.getDate())))
    ) {
      errordate.textContent = "Bạn phải trên 18 tuổi";
      date.classList.add("invalid");
      valid = false;
    } else {
      errordate.textContent = "";
      date.classList.remove("invalid");
    }
  }

  const country = document.getElementById("country");
  const errorcountry = document.getElementById("errorcountry");
  if (!country.value) {
    errorcountry.textContent = "Vui lòng chọn quốc gia";
    country.classList.add("invalid");
    valid = false;
  } else {
    errorcountry.textContent = "";
    country.classList.remove("invalid");
  }

  const errorhobbies = document.getElementById("errorhobbies");
  const hobbiesChecked = document.querySelectorAll(
    'input[name="hobbies"]:checked'
  );
  if (hobbiesChecked.length === 0) {
    errorhobbies.textContent = "Chọn ít nhất một sở thích";
    valid = false;
  } else {
    errorhobbies.textContent = "";
  }

  const image = document.getElementById("image");
  const errorimage = document.getElementById("errorimage");
  if (image.value && !/\\.(jpg|jpeg|png)$/i.test(image.value)) {
    errorimage.textContent = "Chỉ chấp nhận file ảnh (.jpg, .jpeg, .png)";
    image.classList.add("invalid");
    valid = false;
  } else {
    errorimage.textContent = "";
    image.classList.remove("invalid");
  }

  const bio = document.getElementById("bio");
  const errorbio = document.getElementById("errorbio");
  if (bio.value.length > 300) {
    errorbio.textContent = "Tiểu sử tối đa 300 ký tự";
    bio.classList.add("invalid");
    valid = false;
  } else {
    errorbio.textContent = "";
    bio.classList.remove("invalid");
  }

  if (!valid) {
    return;
  }
  alert("Đăng ký thành công!");
});
