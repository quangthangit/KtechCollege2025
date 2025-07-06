import { useState, type ChangeEvent } from "react";
import styles from "./styles.module.css";

type FormData = {
  fullname: string;
  email: string;
  password: string;
  confirmpassword: string;
  tel: string;
  gender: string;
  date: string;
  country: string;
  hobbies: string[];
  image: File | null;
  bio: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

const RegisterForm = () => {
  const [form, setForm] = useState<FormData>({
    fullname: "",
    email: "",
    password: "",
    confirmpassword: "",
    tel: "",
    gender: "",
    date: "",
    country: "",
    hobbies: [],
    image: null,
    bio: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      const hobbyValue = (e.target as HTMLInputElement).value;
      setForm((prev) => ({
        ...prev,
        hobbies: checked
          ? [...prev.hobbies, hobbyValue]
          : prev.hobbies.filter((h) => h !== hobbyValue),
      }));
    } else if (type === "file") {
      const file = (e.target as HTMLInputElement).files?.[0] || null;
      setForm((prev) => ({ ...prev, image: file }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    const newErrors: Errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (form.fullname.trim().length < 3) newErrors.fullname = "Họ và tên tối thiểu 3 ký tự";
    if (!emailRegex.test(form.email)) newErrors.email = "Email không hợp lệ";
    if (form.password.length < 8 || !/[a-zA-Z]/.test(form.password) || !/\d/.test(form.password))
      newErrors.password = "Mật khẩu tối thiểu 8 ký tự, gồm chữ và số";
    if (form.confirmpassword !== form.password || !form.confirmpassword)
      newErrors.confirmpassword = "Mật khẩu xác nhận không khớp";
    if (!/^\d{10,}$/.test(form.tel)) newErrors.tel = "Số điện thoại chỉ gồm số, tối thiểu 10 chữ số";
    if (!form.gender) newErrors.gender = "Vui lòng chọn giới tính";
    if (!form.date) {
      newErrors.date = "Vui lòng chọn ngày sinh";
    } else {
      const dob = new Date(form.date);
      const now = new Date();
      const age = now.getFullYear() - dob.getFullYear();
      if (
        age < 18 ||
        (age === 18 &&
          (now.getMonth() < dob.getMonth() ||
            (now.getMonth() === dob.getMonth() && now.getDate() < dob.getDate())))
      ) {
        newErrors.date = "Bạn phải trên 18 tuổi";
      }
    }

    if (!form.country) newErrors.country = "Vui lòng chọn quốc gia";
    if (form.hobbies.length === 0) newErrors.hobbies = "Chọn ít nhất một sở thích";
    if (form.image && !/\.(jpg|jpeg|png)$/i.test(form.image.name))
      newErrors.image = "Chỉ chấp nhận file ảnh (.jpg, .jpeg, .png)";
    if (form.bio.length > 300) newErrors.bio = "Tiểu sử tối đa 300 ký tự";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      alert("Đăng ký thành công!");
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Đăng ký thông tin</h2>

      <div className={styles.formGroup}>
        <label>Họ và tên *</label>
        <input name="fullname" value={form.fullname} onChange={handleChange} />
        <small>{errors.fullname}</small>
      </div>

      <div className={styles.formGroup}>
        <label>Email *</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} />
        <small>{errors.email}</small>
      </div>

      <div className={styles.formGroup}>
        <label>Mật khẩu *</label>
        <input name="password" type="password" value={form.password} onChange={handleChange} />
        <small>{errors.password}</small>
      </div>

      <div className={styles.formGroup}>
        <label>Xác nhận mật khẩu *</label>
        <input name="confirmpassword" type="password" value={form.confirmpassword} onChange={handleChange} />
        <small>{errors.confirmpassword}</small>
      </div>

      <div className={styles.formGroup}>
        <label>Số điện thoại *</label>
        <input name="tel" value={form.tel} onChange={handleChange} />
        <small>{errors.tel}</small>
      </div>

      <div className={styles.formGroup}>
        <label>Giới tính *</label>
        <label><input type="radio" name="gender" value="male" onChange={handleChange} /> Nam</label>
        <label><input type="radio" name="gender" value="female" onChange={handleChange} /> Nữ</label>
        <label><input type="radio" name="gender" value="other" onChange={handleChange} /> Khác</label>
        <small>{errors.gender}</small>
      </div>

      <div className={styles.formGroup}>
        <label>Ngày sinh *</label>
        <input name="date" type="date" value={form.date} onChange={handleChange} />
        <small>{errors.date}</small>
      </div>

      <div className={styles.formGroup}>
        <label>Quốc gia *</label>
        <select name="country" value={form.country} onChange={handleChange}>
          <option value="">--Chọn quốc gia--</option>
          <option value="vn">Việt Nam</option>
          <option value="us">Mỹ</option>
          <option value="jp">Nhật Bản</option>
        </select>
        <small>{errors.country}</small>
      </div>

      <div className={styles.formGroup}>
        <label>Sở thích *</label>
        <label><input type="checkbox" name="hobbies" value="music" onChange={handleChange} /> Âm nhạc</label>
        <label><input type="checkbox" name="hobbies" value="sport" onChange={handleChange} /> Thể thao</label>
        <label><input type="checkbox" name="hobbies" value="reading" onChange={handleChange} /> Đọc sách</label>
        <small>{errors.hobbies}</small>
      </div>

      <div className={styles.formGroup}>
        <label>Ảnh đại diện</label>
        <input name="image" type="file" onChange={handleChange} accept=".jpg,.jpeg,.png" />
        <small>{errors.image}</small>
      </div>

      <div className={styles.formGroup}>
        <label>Tiểu sử / Giới thiệu</label>
        <textarea name="bio" value={form.bio} onChange={handleChange} />
        <small>{errors.bio}</small>
      </div>

      <button className={styles.submitButton} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default RegisterForm;
