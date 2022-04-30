<template>
  <div class="container">
    <div class="row m-5 text-start justify-content-end">
      <div class="col-md">
        <div class="title text-start mt-5 mb-3">
          <h2>Account</h2>
        </div>
        <div class="mb-5">
          <a
            @click="viewForm"
            class="text-dark text-decoration-none pe-auto"
            href="#"
            ><h5>Change Password</h5></a
          >
        </div>
        <div>
          <a @click="exiteAccount" class="btn btn-dark p-1">Log Out</a>
        </div>
      </div>
      <div class="col-md mt-5">
        <Form
          v-if="showForm"
          @submit="onSubmit"
          :validation-schema="schema"
          @invalid-submit="onInvalidSubmit"
        >
          <div class="form-group mb-3">
            <Field
              v-model="email"
              name="email"
              type="email"
              placeholder="email"
            />
            <ErrorMessage name="email" as="p" class="text-danger h6 small" />
          </div>
          <div class="form-group mb-3">
            <Field
              v-model="password"
              name="password"
              type="password"
              placeholder="password"
            />
            <ErrorMessage name="password" as="p" class="text-danger h6 small" />
          </div>
          <div class="form-group mb-3">
            <Field
              v-model="newPassword"
              name="newPassword"
              type="password"
              placeholder="new password"
            />
            <ErrorMessage
              name="newPassword"
              as="p"
              class="text-danger h6 small"
            />
          </div>

          <div class="text-left">
            <button @click="saveNameEmail" class="btn btn-dark p-1">
              Save
            </button>
          </div>
        </Form>
      </div>
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
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
      newPassword: yup.string().required().min(8),
    });
    return {
      schema,
      errors: [],
      showForm: false,
      email: "",
      password: "",
      newPassword: "",
    };
  },
  methods: {
    onSubmit() {},
    onInvalidSubmit({ values, errors, results }) {
      this.errors = errors;
      console.log(values); // current form values
      console.log(errors); // a map of field names and their first error message
      console.log(results); // a detailed map of field names and their validation results
    },
    saveNameEmail() {
      let password = localStorage.getItem("password");
      password = JSON.parse(password);
      console.log(password);
      let email = localStorage.getItem("email");
      email = JSON.parse(email);
      if (password === this.password && email === this.email) {
        this.$store.dispatch("addEmail", this.email);
        this.$store.dispatch("addPassword", this.newPassword);
        this.$toast.success("Your Password Changed");
        console.log("err:", this.errors);
      } else {
        this.$toast.error("Your detail is wrong");
      }
    },
    viewForm() {
      this.showForm = true;
    },
    exiteAccount() {
      this.$store.dispatch("logOut");
    },
  },
};
</script>
<style scoped>
.show {
  display: block;
}
/* .fieldError {
  color: crimson;
  font-size: 12px;
}
.title {
  margin-bottom: 20px;
}
.col-md {
  margin-top: 90px;
  margin-bottom: 90px;
}
.option {
  margin-bottom: 30px;
}
a {
  margin-top: 10px;
}
.row {
  margin-top: 100px;
}
@media only screen and (max-width: 768px) {
  div h1 {
    font-size: 25px;
  }
  div h5 {
    font-size: 13px;
  }
  div .btn {
    font-size: 13px;
  }
  .row {
    margin-top: 20px !important;
    display: block !important;
  }
  .col-md {
    margin-top: 40px !important;
    margin-bottom: 40px !important;
  }
  .option {
    margin-bottom: 0px;
  }
} */
</style>
