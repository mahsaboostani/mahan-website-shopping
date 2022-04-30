<template>
  <div class="container">
    <div class="text-start">
      <div class="row m-5">
        <div class="col-md-3 mt-4 me-4">
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

        <div class="col-md d-sm-block d-md-flex ms-5">
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
        </div>
      </div>
    </div>

    <div class="text-center mt-5 pt-5 font-weight-bold">
      <h4>CHOOSE A PAYMENT METHOD</h4>
    </div>
    <div class="paymentOption row d-sm-block m-4 d-md-flex">
      <div class="col-md"></div>
      <div class="col-md w-50 m-2">
        <a @click="payment" href="#">
          <img
            class="border border-2 w-100"
            src="../assets/master.jpg"
            alt=""
          />
        </a>
      </div>
      <div class="col-md w-50 m-2">
        <a @click="payment" href="#">
          <img
            class="border border-2 w-100"
            src="../assets/Paypal.jpg"
            alt=""
          />
        </a>
      </div>
      <div class="col-md w-50 m-2">
        <a @click="payment" href="#">
          <img
            class="border border-2 w-100"
            src="../assets/ideal_logo.jpg"
            alt=""
          />
        </a>
      </div>
      <div class="col-md w-50 m-2">
        <a @click="payment" href="#">
          <img class="border border-2 w-100" src="../assets/visa.jpg" alt="" />
        </a>
      </div>
      <div class="col-md"></div>
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
  mounted() {
    const addresses = localStorage.getItem("addresses");
    if (addresses) {
      this.addresses = JSON.parse(addresses);
    }
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
    payment() {
      if (this.chooseAddress) {
        this.$toast.success("Your payment did successfuly");
      } else {
        this.$toast.error("please choose your Address");
      }
    },
    onChange(event) {
      this.chooseAddress = event.target.value;
      console.log(this.chooseAddress);
      localStorage.setItem(
        "chooseAddress",
        JSON.stringify(this.addresses[this.chooseAddress])
      );
    },
  },
};
</script>
<style scoped>
img:hover {
  transform: translateY(-10px);
}
/* .col-md img {
  width: 250px;
  height: 150px;
}

.border-3 {
  border-width: 3px !important;
  border-radius: 20px;
}
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
@media only screen and (max-width: 768px) {
  .col-md {
    display: block !important;
    padding-left: 0px;
    padding-right: 0px;
  }
  .col-md img {
    width: 60px;
    height: 40px;
    margin-bottom: 20px;
  }
  .paymentOption {
    display: flex !important;
    flex-direction: row !important;
    flex-wrap: nowrap;
  }
} */
</style>
