<template>
  <div class="container">
    <div class="text-start">
      <div class="row m-5">
        <div class="col-md-3 mt-4">
          <Form
            ref="form"
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
              <Field
                v-model="address.name"
                name="name"
                type="text"
                placeholder="name"
              />
              <ErrorMessage name="name" as="p" class="text-danger h6 small" />
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
              <ErrorMessage
                name="lastName"
                as="p"
                class="text-danger h6 small"
              />
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
              <ErrorMessage
                name="country"
                as="p"
                class="text-danger h6 small"
              />
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
              <ErrorMessage name="city" as="p" class="text-danger h6 small" />
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
              <ErrorMessage
                name="address"
                as="p"
                class="text-danger h6 small"
              />
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
              <ErrorMessage
                name="postalCode"
                as="p"
                class="text-danger h6 small"
              />
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
              <ErrorMessage
                name="phoneNumber"
                as="p"
                class="text-danger h6 small"
              />
            </div>

            <div class="row ml-auto">
              <div class="col-md d-flex justify-content-start">
                <button type="Submit" class="btn btn-dark mt-3 mb-5 p-1">
                  Add New Address
                </button>
              </div>
            </div>
          </Form>
        </div>

        <div class="col-md d-sm-block d-md-flex">
          <div
            v-for="(item, key) in addresses"
            :key="item.index"
            class="form-check"
          >
            <section>
              <input
                @change="onChange($event)"
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                :value="key"
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
                  </div>
                </div>
              </label>
            </section>
          </div>
          <div class="col-md d-flex align-items-end">
            <button @click="deleteAddress" class="btn btn-dark">Delete</button>
          </div>
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
      chooseAddress: 0,
      address: {
        name: "",
        lastName: "",
        country: "",
        city: "",
        addressInsideForm: "",
        postalCode: "",
        phoneNumber: "",
        check: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.$toast.success("Your address added successfuly");
      this.addresses.push(this.address);
      localStorage.setItem("addresses", JSON.stringify(this.addresses));
      const addresses = localStorage.getItem("addresses");
      if (addresses) {
        this.addresses = JSON.parse(addresses);
      }
      this.$refs.form.resetForm();

      //this.$router.go();
    },
    onChange(event) {
      this.chooseAddress = event.target.value;
      console.log(this.chooseAddress);
      localStorage.setItem(
        "chooseAddress",
        JSON.stringify(this.addresses[this.chooseAddress])
      );
    },
    deleteAddress() {
      console.log(this.chooseAddress);
      this.addresses.splice(this.addresses[this.chooseAddress], 1);
      localStorage.setItem("addresses", JSON.stringify(this.addresses));
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
