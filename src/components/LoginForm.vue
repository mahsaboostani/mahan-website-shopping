<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    :class="{ show: active }"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Login Form</h5>
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
                for="email"
                class="col-form-label font-weight-bold"
                style="min-width: 90px"
                >Email:</label
              >
              <Field name="email" type="email" placeholder="Email" />
              <ErrorMessage name="email" as="p" class="fieldError" />
            </div>
            <div class="form-group">
              <label
                for="password"
                class="col-form-label font-weight-bold"
                style="min-width: 90px"
                >Password:</label
              >
              <Field name="password" type="password" placeholder="Password" />
              <ErrorMessage name="password" as="p" class="fieldError" />
            </div>
            <div class="modal-footer">
              <button class="btn btn-secondary">Login</button>
              <button class="btn btn-primary">Sign Up</button>
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
  props: ["active"],
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    });
    return {
      schema,
      errors: [],
      errorCount: false,
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
  },
};
</script>
<style scoped>
.show {
  display: block;
}
.fieldError {
  color: crimson;
  font-size: 12px;
}
</style>
