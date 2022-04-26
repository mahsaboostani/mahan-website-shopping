<template>
  <div class="text-left">
    <div class="row m-5">
      <div class="mt-5 col-md d-flex justify-content-center">
        <Form
          @submit="onSubmit()"
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
            <Field
              v-model="address.name"
              name="name"
              type="text"
              placeholder="name"
            />
            <ErrorMessage name="name" as="p" class="fieldError" />
          </div>
          <div class="form-group">
            <label
              for="lastName"
              class="col-form-label font-weight-bold"
              style="min-width: 90px"
              >Last Name:</label
            >
            <Field
              v-model="address.lastName"
              name="lastName"
              type="text"
              placeholder="last name"
            />
            <ErrorMessage name="lastName" as="p" class="fieldError" />
          </div>
          <div class="form-group">
            <label
              for="country"
              class="col-form-label font-weight-bold"
              style="min-width: 90px"
              >Country:</label
            >
            <Field
              v-model="address.country"
              name="country"
              type="text"
              placeholder="country"
            />
            <ErrorMessage name="country" as="p" class="fieldError" />
          </div>
          <div class="form-group">
            <label
              for="city"
              class="col-form-label font-weight-bold"
              style="min-width: 90px"
              >City:</label
            >
            <Field
              v-model="address.city"
              name="city"
              type="text"
              placeholder="city"
            />
            <ErrorMessage name="city" as="p" class="fieldError" />
          </div>
          <div class="form-group">
            <label
              for="address"
              class="col-form-label font-weight-bold"
              style="min-width: 90px"
              >Address:</label
            >
            <Field
              v-model="address.addressInsideForm"
              name="address"
              type="text"
              placeholder="address"
            />
            <ErrorMessage name="address" as="p" class="fieldError" />
          </div>
          <div class="form-group">
            <label
              for="postalCode"
              class="col-form-label font-weight-bold"
              style="min-width: 90px"
              >Postal Code:</label
            >
            <Field
              v-model="address.postalCode"
              name="postalCode"
              type="text"
              placeholder="postal code"
            />
            <ErrorMessage name="postalCode" as="p" class="fieldError" />
          </div>
          <div class="form-group">
            <label
              for="phoneNumber"
              class="col-form-label font-weight-bold"
              style="min-width: 90px"
              >Phone:</label
            >
            <Field
              v-model="address.phoneNumber"
              name="phoneNumber"
              type="phone"
              placeholder="phone"
            />
            <ErrorMessage name="phoneNumber" as="p" class="fieldError" />
          </div>
          <div class="form-group">
            <Field
              v-model="address.check"
              name="check"
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              autocomplete="off"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Use as my default address
            </label>
          </div>

          <div class="modal-footer justify-content-start">
            <button type="submit" class="btn btn-dark">Add New Address</button>
          </div>
        </Form>
      </div>
      <div class="col-md mt-5 d-flex ml-auto">
        <div
          v-for="(item, key) in addresses"
          :key="item.index"
          class="form-check m-2"
        >
          <section>
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              :id="key"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              <span class="h5">&ensp;Address {{ key + 1 }}</span>
              <div class="border border-3">
                <div class="m-4">
                  <p>{{ item.name }}</p>
                  <p>{{ item.lastName }}</p>
                  <p>{{ item.country }}</p>
                  <p>{{ item.city }}</p>
                  <p>{{ item.addressInsideForm }}</p>
                  <p>{{ item.postalCode }}</p>
                  <p>{{ item.phoneNumber }}</p>
                  <p v-if="address.check">default address</p>
                </div>
              </div>
            </label>
          </section>
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
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  mounted() {
    const addresses = localStorage.getItem("addresses");
    if (addresses) {
      this.addresses = JSON.parse(addresses);
    }
  },
  data() {
    const schema = yup.object({
      name: yup.string().required(),
      lastName: yup.string().required(),
      country: yup.string().required(),
      city: yup.string().required(),
      address: yup.string().required(),
      postalCode: yup.string().required(),
      phoneNumber: yup.number().required(),
    });
    return {
      schema,
      results: [],
      showAddress: false,
      errors: [],
      addresses: [],
      address: {
        name: "",
        lastName: "",
        country: "",
        city: "",
        addressInsideForm: "",
        postalCode: "",
        phoneNumber: "",
        check: false,
      },
    };
  },
  methods: {
    onSubmit() {
      this.$toast.success("Your address added successfuly");
      this.addresses.push(this.address);
      localStorage.setItem("addresses", JSON.stringify(this.addresses));
      if (this.address.check.checked === true) {
        this.address.check = true;
      }
      this.$router.go();
    },
    onInvalidSubmit({ values, errors, results }) {
      this.errors = Object.values(errors);
      console.log(values); // current form values
      console.log(errors); // a map of field names and their first error message
      console.log(results); // a detailed map of field names and their validation results
      console.log("errrrr", this.errors);
      this.err = this.errors.length;
    },
    addNewAddress() {
      this.addresses.push(this.address);
      localStorage.setItem("addresses", JSON.stringify(this.addresses));
      this.$router.go();
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
.border-3 {
  border-width: 3px !important;
}
</style>
