<template>
  <form :class="$style.form" @submit.prevent="submitForm" novalidate>
    <div :class="$style.field">
      <label for="lastName">Фамилия</label>
      <input
        id="lastName"
        v-model.trim="lastName"
        @input="validateLastName"
        :class="{ [$style.invalid]: lastNameError }"
        type="text"
      />
      <p v-if="lastNameError" :class="$style.error">{{ lastNameError }}</p>
    </div>

    <div :class="$style.field">
      <label for="firstName">Имя</label>
      <input
        id="firstName"
        v-model.trim="firstName"
        @input="validateFirstName"
        :class="{ [$style.invalid]: firstNameError }"
        type="text"
      />
      <p v-if="firstNameError" :class="$style.error">{{ firstNameError }}</p>
    </div>

    <div :class="$style.field">
      <label for="phone">Телефон</label>
      <input
        id="phone"
        v-model="phone"
        @input="validatePhone"
        :class="{ [$style.invalid]: phoneError }"
        type="tel"
        placeholder="+7XXXXXXXXXX"
      />
      <p v-if="phoneError" :class="$style.error">{{ phoneErrorMessage }}</p>
    </div>

    <div :class="$style.field">
      <label for="email">Email</label>
      <input
        id="email"
        v-model.trim="email"
        @input="validateEmail"
        :class="{ [$style.invalid]: emailError }"
        type="email"
      />
      <p v-if="emailError" :class="$style.error">{{ emailErrorMessage }}</p>
    </div>

    <div :class="$style.checkbox">
      <input id="agreement" type="checkbox" v-model="agreement" />
      <label for="agreement">Согласие на обработку персональных данных</label>
    </div>
    <p v-if="agreementError" :class="$style.error">{{ agreementError }}</p>

    <button type="submit">Отправить</button>
  </form>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const lastName = ref("");
const firstName = ref("");
const phone = ref("");
const email = ref("");
const agreement = ref(false);

const lastNameError = ref("");
const firstNameError = ref("");
const phoneError = ref(false);
const phoneErrorMessage = ref("");
const emailError = ref(false);
const emailErrorMessage = ref("");
const agreementError = ref("");

function validateLastName() {
  lastNameError.value = lastName.value.trim() ? "" : "Это поле обязательно";
}

function validateFirstName() {
  firstNameError.value = firstName.value.trim() ? "" : "Это поле обязательно";
}

function validatePhone() {
  const value = phone.value;
  if (!value.trim()) {
    phoneError.value = true;
    phoneErrorMessage.value = "Это поле обязательно";
    return;
  }
  if (/[a-zA-Zа-яА-Я]/.test(value)) {
    phoneError.value = true;
    phoneErrorMessage.value = "В номере телефона не должно быть букв";
    return;
  }
  const cleaned = value.replace(/[^\d+]/g, "");
  if (!/^\+?\d{10,15}$/.test(cleaned)) {
    phoneError.value = true;
    phoneErrorMessage.value =
      "Номер телефона должен содержать от 10 до 15 цифр";
    return;
  }
  phoneError.value = false;
  phoneErrorMessage.value = "";
}

function validateEmail() {
  const value = email.value.trim();
  if (!value) {
    emailError.value = true;
    emailErrorMessage.value = "Это поле обязательно";
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    emailError.value = true;
    emailErrorMessage.value = "Введите корректный email";
    return;
  }
  emailError.value = false;
  emailErrorMessage.value = "";
}

watch(agreement, (val) => {
  agreementError.value = val ? "" : "Необходимо согласие";
});

const submitForm = async () => {
  validateLastName();
  validateFirstName();
  validatePhone();
  validateEmail();
  agreementError.value = agreement.value ? "" : "Необходимо согласие";

  if (
    lastNameError.value ||
    firstNameError.value ||
    phoneError.value ||
    emailError.value ||
    agreementError.value
  ) {
    return;
  }

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lastName: lastName.value,
        firstName: firstName.value,
        phone: phone.value,
        email: email.value,
        agreement: agreement.value,
      }),
    });

    if (!response.ok) throw new Error("Ошибка при отправке");

    alert("Данные успешно отправлены!");

    lastName.value = "";
    firstName.value = "";
    phone.value = "";
    email.value = "";
    agreement.value = false;

    lastNameError.value = "";
    firstNameError.value = "";
    phoneError.value = false;
    phoneErrorMessage.value = "";
    emailError.value = false;
    emailErrorMessage.value = "";
    agreementError.value = "";
  } catch (error) {
    alert("Ошибка при отправке данных. Попробуйте позже.");
    console.error(error);
  }
};
</script>

<style module lang="scss">
.form {
  max-width: 480px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #222;
}

.field {
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.3rem;
    font-weight: 600;
  }

  input {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    transition: border-color 0.3s;
  }
}

.checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  label {
    font-weight: 500;
    user-select: none;
  }
}

button {
  background-color: #4caf50;
  border: none;
  padding: 0.7rem 1.2rem;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
}

.error {
  color: #d32f2f;
  font-size: 0.85rem;
  margin-top: 0.25rem;
}

.invalid {
  border-color: #d32f2f !important;
}
</style>
