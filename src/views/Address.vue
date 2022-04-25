<template>
  <div class="container text-left">
    <div class="mb-5">
      <h3>Address</h3>
    </div>
    <div>
      <Form
        @submit="onSubmit"
        :validation-schema="schema"
        @invalid-submit="onInvalidSubmit"
      >
        <div class="form-group">
          <label
            for="name"
            class="col-form-label font-weight-bold"
            style="min-width: 90px"
            >Name:</label
          >
          <Field v-model="name" name="name" type="text" placeholder="name" />
          <ErrorMessage name="name" as="p" class="fieldError" />
        </div>
        <div class="form-group">
          <label
            for="lastname"
            class="col-form-label font-weight-bold"
            style="min-width: 90px"
            >Last Name:</label
          >
          <Field name="lastname" type="text" placeholder="last name" />
          <ErrorMessage name="lastName" as="p" class="fieldError" />
        </div>
        <div class="form-group">
          <label
            for="country"
            class="col-form-label font-weight-bold"
            style="min-width: 90px"
            >Country:</label
          >
          <Field name="country" type="text" placeholder="country" />
          <ErrorMessage name="country" as="p" class="fieldError" />
        </div>
        <div class="form-group">
          <label
            for="city"
            class="col-form-label font-weight-bold"
            style="min-width: 90px"
            >City:</label
          >
          <Field name="city" type="text" placeholder="city" />
          <ErrorMessage name="city" as="p" class="fieldError" />
        </div>
        <div class="form-group">
          <label
            for="address"
            class="col-form-label font-weight-bold"
            style="min-width: 90px"
            >Address:</label
          >
          <Field name="address" type="text" placeholder="address" />
          <ErrorMessage name="address" as="p" class="fieldError" />
        </div>
        <div class="form-group">
          <label
            for="post"
            class="col-form-label font-weight-bold"
            style="min-width: 90px"
            >Post Code:</label
          >
          <Field name="post" type="text" placeholder="post code" />
          <ErrorMessage name="post" as="p" class="fieldError" />
        </div>
        <div class="form-group">
          <label
            for="phone"
            class="col-form-label font-weight-bold"
            style="min-width: 90px"
            >Phone:</label
          >
          <Field name="phone" type="number" placeholder="phone" />
          <ErrorMessage name="phone" as="p" class="fieldError" />
        </div>
        <div class="form-group">
          <Field name="check" type="checkbox" />
          <label
            for="check"
            class="col-form-label font-weight-bold"
            style="min-width: 90px"
          >
            &ensp;I would like to recieve sms notifications related to my MAHAN
            orders.
          </label>
        </div>

        <div class="modal-footer justify-content-start">
          <button @click="saveNameEmail" class="btn btn-dark">Save</button>
        </div>
      </Form>
    </div>
  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
//import { useToast } from "vue-toast-notification";

import * as yup from "yup";
export default {
  name: "LoginForm",
  props: ["active", "activeLogged"],
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object({
      name: yup.string().required(),
      lastName: yup.string().required(),
      country: yup.string().required(),
      city: yup.string().required(),
      address: yup.string().required(),
      post: yup.string().required(),
      phone: yup.string().required(),
    });
    return {
      schema,
      errors: [],
      errorCount: false,
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    closeModal() {
      this.$emit("close-modal-event");
    },
    onSubmit() {
      this.$toast.success("Your loged in successfuly");
      this.$emit("close-modal-event");
      this.$emit("logIn");
      console.log("err:", this.errors);
    },
    onInvalidSubmit({ values, errors, results }) {
      this.errors = errors;
      console.log(values); // current form values
      console.log(errors); // a map of field names and their first error message
      console.log(results); // a detailed map of field names and their validation results
    },
    saveNameEmail() {
      this.$store.dispatch("addName", this.name);
      this.$store.dispatch("addEmail", this.email);
      this.$store.dispatch("addPassword", this.password);
    },
  },
};
</script>
<style scoped>
.fieldError {
  color: crimson;
  font-size: 12px;
}
.show {
  display: block;
}
.dropdown-menu {
  background-color: #efefef;
}
.dropdown-menu a {
  text-decoration: none;
  cursor: pointer;
}
.modal-footer {
  border: 0px;
}
</style>
