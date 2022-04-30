<template>
  <div
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    :class="{ show: active }"
  >
    <div role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title" id="exampleModalLabel">Login Form</h6>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span @click="closeModal" aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <Form
            @submit="onSubmit"
            :validation-schema="schema"
            @invalid-submit="onInvalidSubmit"
          >
            <div class="form-group">
              <label
                for="name"
                class="col-form-label h6"
                style="min-width: 90px"
                >Name:</label
              >
              <Field
                v-model="name"
                name="name"
                type="text"
                placeholder="Name"
              />
              <ErrorMessage class="text-danger h6 small" name="name" as="p" />
            </div>
            <div class="form-group">
              <label
                for="email"
                class="col-form-label h6"
                style="min-width: 90px"
                >Email:</label
              >
              <Field
                v-model="email"
                name="email"
                type="email"
                placeholder="Email"
              />
              <ErrorMessage class="text-danger h6 small" name="email" as="p" />
            </div>
            <div class="form-group">
              <label
                for="password"
                class="col-form-label h6"
                style="min-width: 90px"
                >Password:</label
              >
              <Field
                v-model="password"
                name="password"
                type="password"
                placeholder="Password"
              />
              <ErrorMessage
                class="text-danger h6 small"
                name="password"
                as="p"
              />
            </div>
            <div class="modal-footer flex-nowrap justify-content-between">
              <div class="d-flex">
                <a class="text-dark h6 small text-decoration-none" href="#">
                  Forgot your password?</a
                >
              </div>
              <button @click="saveNameEmail" class="btn btn-dark h6 p-1">
                Log in/Sign in
              </button>
            </div>
          </Form>
        </div>
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
      name: yup.string().required(),
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
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
.show {
  display: block;
}
</style>
