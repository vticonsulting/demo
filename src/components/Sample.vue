<template>
  <div class="title">
    <h1>HR MyProfile</h1>
  </div>
  <div class="col-md-4">
    <div class="ibox float-e-margins">
      <div>
        <div class="ibox-content profile-content">
          <div class="container-fluid">
            <div align="center" class="">
              <img alt="image" id="employee_pic" class="img-responsive img-circle xhr-profile-pic" src="http://placehold.it/150x150">
              <input type="file" name="file" id="upload" style="display:none;" @change="handleUpload"></input>
              <button class="btn btn-primary xhr-profile-pic" onclick="document.getElementById('upload').click();" ><i class="fa fa-upload"></i></button>
            </div>
          <div>
          <h3><strong>{{ FullName }}</strong></h3>
          <p><i class="fa fa-phone fa-fw"></i> {{ employee.OfficePhoneNr }}</p>
          <p><i class="fa fa-mobile fa-fw"></i> {{ employee.PhonePrivate }}</p>
          <p><i class="fa fa-envelope fa-fw"></i><a class="Email" href="mailto:dennisoosterling@gmail.com"> {{ employee.EmailWork }}</a></p>
          <p><i class="fa fa-users fa-fw"></i> {{ employee.Job.Department }}</p>
          <p><i class="fa fa-user fa-fw"></i> {{ employee.Job.Job1 }}</p>
        </div>
        <hr/>
        <div v-if="employee.PhoneEmergency != ''">
          <p style="margin-bottom:0px;"><i class="fa fa-exclamation-circle fa-fw"></i> {{ employee.PhoneEmergency }} </p>
        </div>
        <div v-else>
          <div class="input-group">
            <input type="text" id="inputEmergency" class="form-control" placeholder="Emergency Number">
            <span class="input-group-btn">
              <button class="btn btn-secondary" @click="" type="button">Add</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    props: ['employee'],

    computed: {
      FullName: function () {
        return this.employee.Firstname + ' ' + this.employee.Lastname
      }
    },

    methods: {
      handleUpload: function (e) {
        var formData = new FormData()
        var totalFiles = document.getElementById('upload').files.length
        for (var i = 0; i < totalFiles; i++) {
          var file = document.getElementById('upload').files[i]
          formData.append('upload', file)
        }
        $.ajax({
          type: 'POST',
          url: 'api/profile/UploadImage',
          data: formData,
          dataType: 'json',
          contentType: false,
          processData: false,
          success: function (response) {
            $('#avatar').attr('src', response)
          },
          error: function (error) {
            alert(error)
          }
        })
      },
      handleEmergencyPost: function (e) {
        var EmergencyNumber = {
          number: $('#inputEmergency').val()
        }
        $.post('/api/profile/UpdateEmergency', EmergencyNumber)
      }
    }
  }
</script>
