<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <form>
          <div class="form-group">
            <label>Username</label>
            <input type="text" class="form-control" v-model="user.username" />
          </div>
          <div class="form-group">
            <label>Mail</label>
            <input type="text" class="form-control" v-model="user.email" />
          </div>
          <button class="btn btn-primary" @click.prevent="submitForm">
            Submit
          </button>
        </form>
        <hr />
        <div class="col-md-12">
          <div class="row">
            <div
              class="panel panel-default"
              v-for="(record, index) in users"
              :key="index"
            >
              <div class="panel-body" @click="fetchUserById(record.user.id)">
                {{ record.user.id }} --- {{ record.user.username }} ----->
                {{ record.user.email }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserIdFromUrl } from "./utils/getUserIdFromUrl";
export default {
  data() {
    return {
      user: {
        username: "",
        email: ""
      },
      users: [],
      resource: ""
    };
  },
  methods: {
    submitForm: function() {
      const userData = {
        fields: {
          username: {
            stringValue: this.user.username
          },
          email: {
            stringValue: this.user.email
          }
        }
      };
      this.resource
        .post({}, userData)
        .then(res => console.log(res), err => console.log(err));
    },
    fetchUsers: function() {
      this.resource.get({}).then(
        res => {
          this.users = res.body.documents.map(document => {
            return {
              user: {
                id: getUserIdFromUrl(document.name),
                email: document.fields["email"]["stringValue"],
                username: document.fields["username"]["stringValue"]
              }
            };
          });
        },
        err => console.log(err)
      );
    },
    fetchUserById: function(id) {
      this.resource.get({ id }).then(
        res => {
          console.log("res", res);
        },
        err => console.log(err)
      );
    }
  },
  created() {
    this.resource = this.$resource("users{/id}");
    this.fetchUsers();
  }
};
</script>
