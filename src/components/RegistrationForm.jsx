import { useState } from "react";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [interests, setInterests] = useState([]);
  const [city, setCity] = useState("");
  const [note, setNote] = useState("");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  function handleInterest(e) {
    const value = e.target.value;

    if (e.target.checked) {
      setInterests([...interests, value]);
    } else {
      setInterests(interests.filter((item) => item !== value));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (name.trim() === "") {
      newErrors.name = "Ad daxil edin";
    }

    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailFormat.test(email.trim())) {
      newErrors.email = "Düzgün email daxil edin";
    }

    if (password.length < 6) {
      newErrors.password = "Şifrə ən azı 6 simvol olmalıdır";
    }

    if (gender === "") {
      newErrors.gender = "Cins seçin";
    }

    if (interests.length === 0) {
      newErrors.interests = "Ən azı bir seçim edin";
    }

    if (city === "") {
      newErrors.city = "Şəhər seçin";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      onChange={() => setSuccess(false)}
    >
      <h1>Qeydiyyat formu</h1>

      <div className="field">
        <label htmlFor="name">Ad</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="field">
        <label htmlFor="password">Şifrə</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <p className="error">{errors.password}</p>
        )}
      </div>

      <fieldset className="field">
        <legend>Cins</legend>

        <label className="choice">
          <input
            type="radio"
            name="gender"
            value="Kişi"
            checked={gender === "Kişi"}
            onChange={(e) => setGender(e.target.value)}
          />
          Kişi
        </label>

        <label className="choice">
          <input
            type="radio"
            name="gender"
            value="Qadın"
            checked={gender === "Qadın"}
            onChange={(e) => setGender(e.target.value)}
          />
          Qadın
        </label>

        {errors.gender && <p className="error">{errors.gender}</p>}
      </fieldset>

      <fieldset className="field">
        <legend>Maraq dairələri</legend>

        {["İdman", "Musiqi", "Proqramlaşdırma"].map((interest) => (
          <label className="choice" key={interest}>
            <input
              type="checkbox"
              value={interest}
              checked={interests.includes(interest)}
              onChange={handleInterest}
            />
            {interest}
          </label>
        ))}

        {errors.interests && (
          <p className="error">{errors.interests}</p>
        )}
      </fieldset>

      <div className="field">
        <label htmlFor="city">Şəhər</label>
        <select
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="">Şəhər seçin</option>
          <option value="Bakı">Bakı</option>
          <option value="Sumqayıt">Sumqayıt</option>
          <option value="Gəncə">Gəncə</option>
        </select>
        {errors.city && <p className="error">{errors.city}</p>}
      </div>

      <div className="field">
        <label htmlFor="note">Qeyd</label>
        <textarea
          id="note"
          rows={4}
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>

      <button type="submit">Göndər</button>

      {success && (
        <p className="success" role="status">
          Form uğurla göndərildi!
        </p>
      )}
    </form>
  );
}

export default RegistrationForm;
