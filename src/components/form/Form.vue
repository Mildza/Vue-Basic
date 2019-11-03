<template>
  <div class="row mt-2">
    <form
      class="col-xs-12 col-sm-12 col-md-5 offset-md-1 col-lg-5 offset-lg-1 border border-1 rounded py-2"
    >
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          type="email"
          @input="$v.email.$touch()"
          class="form-control"
          :class="{'is-invalid': $v.email.$error, 'is-valid': $v.email.email && $v.email.$dirty }"
          v-model="email"
          id="email"
          placeholder="Enter email"
        />
        <small v-if="!$v.email.email">enter valid email address</small>
        <small v-if="!$v.email.required && $v.email.$dirty">Its required</small>
      </div>
      <div class="form-group" :class="{'mb-0': $v.password.$model.length < 8}">
        <label for="password">Password</label>
        <input
          type="password"
          v-model.trim="$v.password.$model"
          class="form-control mb-0"
          :class="{'is-invalid': $v.password.$error, 'is-valid': ($v.password.$model.length > 7)}"
          id="password"
          autocomplete
          placeholder="Password"
        />
        <small v-if="!$v.password.minVal">min 8 characters</small>
        <small v-if="!$v.password.required && $v.password.$dirty">Its required</small>
        <small
          class="top-right"
          v-if="$v.password.$dirty && $v.password.$model.length < 8"
        >{{$v.password.$model.length}}/8</small>
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirm Password</label>
        <input
          type="password"
          v-model.trim="$v.confirmPassword.$model"
          class="form-control"
          :class="{'is-valid': $v.confirmPassword.sameAsPassword && $v.confirmPassword.$dirty && $v.confirmPassword.$model.length > 7, 'is-invalid':$v.confirmPassword.$error }"
          id="confirmPassword"
          autocomplete
          placeholder="Repeat password"
        />
        <small v-if="$v.confirmPassword.$error">Password must be the same</small>
      </div>

      <div class="form-group form-check pl-0">
        <label for="message">Message</label>
        <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
        <textarea
          v-model="message"
          id="message"
          placeholder="Enter some text"
          rows="2"
          class="form-control"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="sendmail" class="pr-4">
          <input type="checkbox" v-model="checkBox" id="sendmail" value="Newsletter" /> Send Newsletter
        </label>
        <label for="sendInfomail">
          <input type="checkbox" v-model="checkBox" id="sendInfomail" value="InfoMail" /> Send Infomail
        </label>
      </div>
      <div class="form-group">
        <label for="male">
          <input type="radio" v-model="gender" id="male" value="male" /> Male
        </label>
        <label for="female">
          <input type="radio" v-model="gender" id="female" value="female" /> Female
        </label>
      </div>
      <div class="from-group">
        <label for="priority">Priority</label>
        <select v-model="selectedPriority" id="priority" class="form-control">
          <option v-for="option in priorities" :key="option">{{option}}</option>
        </select>
      </div>
      <button
        type="submit"
        @click.prevent="submit"
        :disabled="$v.$invalid"
        class="btn btn-primary mt-2"
      >Submit</button>
    </form>
    <div class="col-xs-12 col-sm-12 col-md-5 col-lg-4 offset-lg-1 p-2 border border-1 rounded px-0">
      <div class="bg-warning py-2 mx-0 text-center rounded">PREVIEW VALUES</div>

      <h3 v-if="submited">Form is submited</h3>
      <div v-else>
        <p class="pt-2">Email: {{email}}</p>
        <p>Password: {{password}}</p>
        <p>Confirm password: {{confirmPassword}}</p>
        <p>Message: {{message}}</p>
        <p>
          Send mails:
          <span v-for="el in checkBox" :key="el">{{el + ' '}}</span>
        </p>
        <p>Gender: {{gender}}</p>
        <p>Priority: {{selectedPriority}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
export default {
  data: function() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      message: "",
      checkBox: [],
      gender: "male",
      priorities: ["low", "normal", "high"],
      selectedPriority: "normal",
      submited: false
    };
  },
  methods: {
    submit() {
      this.submited = true;
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minVal: minLength(8)
    },
    confirmPassword: {
      required,
      // sameAsPassword: sameAs("password")
      sameAsPassword: sameAs(vm => vm.password),
      minVal: minLength(8)
    }
  }
};
</script>

<style scoped>
small {
  display: block;
  color: #ccc;
  font-style: italic;
  text-align: center;
}
.top-right {
  display: block;
  text-align: right;
  position: relative;
  top: -18px;
  padding-right: 5px;
}
.top-right-active {
  top: 0px;
}
</style>
