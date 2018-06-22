<template>
    <app-home-template>
        <div slot="page-content">
            <div class="row">
                <div class="col-12">
                    <div class="card-box table-responsive">
                        <h4 class="m-t-0 header-title">Default Example</h4>
                        <p class="text-muted font-14 m-b-30">
                            DataTables has most features enabled by default, so all you need to do to use it with your own tables is to call the construction function: <code>$().DataTable();</code>.
                        </p>

                        <table id="datatable" class="table table-bordered">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                                <th>Start date</th>
                                <th>Salary</th>
                            </tr>
                            </thead>


                            <tbody>
                            <tr>
                                <td>Tiger Nixon</td>
                                <td>System Architect</td>
                                <td>Edinburgh</td>
                                <td>61</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                            </tr>
                            <tr>
                                <td>Garrett Winters</td>
                                <td>Accountant</td>
                                <td>Tokyo</td>
                                <td>63</td>
                                <td>2011/07/25</td>
                                <td>$170,750</td>
                            </tr>
                            <tr>
                                <td>Ashton Cox</td>
                                <td>Junior Technical Author</td>
                                <td>San Francisco</td>
                                <td>66</td>
                                <td>2009/01/12</td>
                                <td>$86,000</td>
                            </tr>
                            <tr>
                                <td>Cedric Kelly</td>
                                <td>Senior Javascript Developer</td>
                                <td>Edinburgh</td>
                                <td>22</td>
                                <td>2012/03/29</td>
                                <td>$433,060</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> <!-- end row -->
            <modal v-if="showModal" v-on:close="showModal = false">
                <div slot="header">
                    Add new user
                </div>
                <div slot="body">
                    <div class="" action="#">

                        <div class="form-group m-b-20 row">
                            <div class="col-12">
                                <label for="emailaddress">Email address</label>
                                <input v-validate="'required|email'" class="form-control" v-model="email" type="email" name="email" required="" placeholder="Enter your email">
                                <span v-if="errors.has('email')" class="field-error">{{ errors.first('email') }}</span>
                            </div>
                        </div>

                        <div class="form-group row m-b-20">
                            <div class="col-12">
                                <router-link to="/reset" class="text-muted pull-right forgot-align"><small>Forgot your password?</small></router-link>
                                <label for="password">Password</label>
                                <input v-validate="'required|min:6'" class="form-control" v-model="passsword" type="password" required="" name="password" placeholder="Enter your password">
                                <span v-if="errors.has('password')" class="field-error">{{ errors.first('password') }}</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div slot="footer">
                    <button class="btn btn-custom">Add</button>
                    <button class="btn btn-secondary" v-on:click="showModal=false">Cancel</button>
                </div>
            </modal>
            <button type="button" class="btn btn-primary" v-on:click="openModal()">Open Modal</button>
        </div>
    </app-home-template>
</template>

<script>
import homeTemplate from "./commonComponents/homeTemplate.vue";
import Modal from "./commonComponents/modal.vue";

export default {
  components: {
    modal: Modal,
    "app-home-template": homeTemplate
  },

  data() {
    return {
      showModal: false
    };
  },

  methods: {
    openModal() { 
        this.showModal = !this.showModal; 
    }
  }
};
</script>

<style scoped>
</style>
