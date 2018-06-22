<template>
    <app-home-template>
        <div slot="page-content">
            <div class="row">
                <div class="col-12">
                    <div class="card-box table-responsive">
                        <h4 class="m-t-0 header-title">PROJECTS MANAGEMENT</h4>
                        <div class="row">
                            <div class="col-sm-12 col-md-6">
                                <div class="dt-buttons btn-group">
                                    <button type="button" class="btn btn-primary" v-on:click="openModal()">Add Project</button>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6">
                                <div id="datatable-buttons_filter" class="dataTables_filter search-in-form">
                                    <label><input type="text" class="form-control form-control-sm" placeholder="Search..." aria-controls="datatable-buttons">
                                    </label>
                                </div>
                            </div>
                        </div>
                        <table id="datatable" class="table table-bordered">
                            <thead>
                            <tr>
                                <th>Project Name</th>
                                <th>Project Description</th>
                                <th>Video Url</th>
                                <th>Image Urls</th>
                                <th>Actions</th>
                            </tr>
                            </thead>


                            <tbody>
                                <tr v-for="project of projectsArray" v-bind:key="project.key">
                                    <td>{{project.name}}</td>
                                    <td>{{project.description}}</td>
                                    <td>{{project.videoUrl}}</td>
                                    <td>
                                        <ul>
                                            <li v-for="(imageUrl, index) in project.imageUrls" v-bind:key="index">
                                                {{imageUrl}}
                                            </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <button class="btn btn-warning" v-on:click="editProject(project)">Edit</button>
                                        <button class="btn btn-danger" v-on:click="deleteProject(project.key)">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> <!-- end row -->
            <modal v-if="showModal" v-on:close="showModal = false" v-bind:width="700" v-bind:height="500">
                <div slot="header">
                    {{isEdit?"Edit exist project":"Add new project"}}
                </div>
                <div slot="body">
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group m-b-20 row">
                                <div class="col-12">
                                    <label for="project.name">Project name</label>
                                    <input v-validate="'required'" class="form-control" v-model="project.name" type="text" name="project.name" required="" placeholder="Enter project name">
                                    <span v-if="errors.has('project.name')" class="field-error">{{ errors.first('project.name') }}</span>
                                </div>
                            </div>

                            <div class="form-group row m-b-20">
                                <div class="col-12">
                                    <label for="projectDescription">Project description</label>
                                    <textarea class="form-control" v-model="project.description" name="projectDescription" placeholder="Enter project description"></textarea>
                                </div>
                            </div>

                            <div class="form-group row m-b-20">
                                <div class="col-12">
                                    <label for="videoUrl">Video url</label>
                                    <input class="form-control" v-model="project.videoUrl" type="text" name="videoUrl" placeholder="Enter video url">
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group row m-b-20">
                                <div class="col-12 image-urls">
                                    <label for="imageUrls">Image urls</label>
                                    <template v-for="(input, index) in project.imageUrls">
                                        <input  v-bind:key="index" v-model="project.imageUrls[index]" class="form-control" type="text" name="imageUrls" placeholder="Enter image urls">
                                    </template>
                                </div>
                                <div class="btn-add-url">
                                    <button v-on:click="addUrl" class="btn">Add more url</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div slot="footer">
                    <button v-if="!isEdit" v-bind:disabled="errors.any() || !isCompleted" class="btn btn-custom" v-on:click="addProject">Add</button>
                    <button v-if="isEdit" v-bind:disabled="errors.any() || !isCompleted" class="btn btn-custom" v-on:click="updateProject(project.key)">Update</button>
                    <button class="btn btn-secondary" v-on:click="showModal=false">Cancel</button>
                </div>
            </modal>
        </div>
    </app-home-template>
</template>

<script>
import homeTemplate from "./commonComponents/homeTemplate.vue";
import Modal from "./commonComponents/modal.vue";
import {db} from '../../../config/db';

export default {
  components: {
    modal: Modal,
    "app-home-template": homeTemplate
  },
  data() {
    return {
        project:{
            name: "",
            description: "",
            videoUrl:"",
            imageUrls: [""]
        },
        showModal: false,
        isEdit: false,
        projectsArray:[]
    };
  },
  firebase:{
    projects: db.ref("projects")
  },
    created(){
        // this.$firebaseRefs.projects.orderByChild('name').on('value', (snapshot, error) => {
        //     this.projectsArray=[];
        //     snapshot.forEach((prjSnap) => {
        //         const prj = prjSnap.val()
        //         prj.key=prjSnap.key;
        //         this.projectsArray.push(prj);
        //     });
        // });
        this.getProject('name');
    },
  methods: {
    getProject(orderBy, isAsc){
        this.$firebaseRefs.projects.orderByChild(orderBy).on('value', (snapshot, error) => {
            this.projectsArray=[];
            snapshot.forEach((prjSnap) => {
                const prj = prjSnap.val()
                prj.key=prjSnap.key;
                this.projectsArray.push(prj);
            });
            if(isAsc===false){
                this.projectsArray.reverse();
            }
        });
    },
    openModal() { 
        this.isEdit=false;
        this.project={
            name: "",
            description: "",
            videoUrl:"",
            imageUrls: [""]
        }
        this.showModal = !this.showModal;
    },
    addUrl(){
        this.project.imageUrls.push("");
    },
    addProject(){      
        this.project.imageUrls=this.project.imageUrls.filter(n=>n!=""&&n!=null&&n!=undefined);
        this.$firebaseRefs.projects.push(this.project);
        this.showModal=false;
        this.$toasted.success("Added project succesfully.");
    },
    deleteProject(key){
        this.$swal({
            title: 'Are you sure?',
            text: 'You can\'t revert your action',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes Delete it!',
            cancelButtonText: 'No, Keep it!',
            showCloseButton: true,
            showLoaderOnConfirm: true
            }).then((result) => {
            if(result.value) {
                this.$firebaseRefs.projects.child(key).remove();
                this.$toasted.success("Deleted project succesfully.");
            }
        })
    },
    editProject(project){
        this.isEdit=true;
        this.project=project;
        this.showModal=true;
    },
    updateProject(key){
        delete this.project.key;
        this.$firebaseRefs.projects.child(key).set(this.project);
        this.$toasted.success("Updated project succesfully.");
        this.showModal=false;
    }
  },
  computed:{
      isCompleted:function(){
            return this.project.name;
        }
  }
};
</script>

<style scoped>
.btn-add-url{
    text-align: right;
    width: 100%;
    padding: 15px;
}

.image-urls input{
    margin-bottom: 3px;
}
</style>
