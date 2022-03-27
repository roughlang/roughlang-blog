@extends('layouts.app')

@section('title', 'Uploader')

@section('content_block')
<div class="container lw-contents-block mt100">
  <div class="row mb100">
    <div class="col-sm-3">
      foobar  
    </div>
    <div class="col-sm-9">
      <!-- <h3>Basic</h3>
      <form action="/save" method="post"  enctype="multipart/form-data">
        @csrf
        <input type="file" name="a" >
        <input type="submit" >
      </form> -->

      <h3>Drag & Drop</h3>
      <div class="co-uploader" id="co-uploader">
      <!-- https://reffect.co.jp/vue/drag-drop-file-upload -->
        
      

        <div id="uploader">
          <div
            class="drop_area"
            @dragenter="dragEnter"
            @dragleave="dragLeave"
            @dragover.prevent 
            @drop.prevent="dropFile" 
            :class="{enter: isEnter}"
          > 
              ファイルアップロード
          </div>

          <button v-show="upload_files.length" @click="upload()" type="button" class="btn btn-primary mt30">upload</button>

          <div>
            <ul>
              <li v-for="file in files">@{{ file.name }} @{{ file.lastModified }}</li>
            </ul>
            <ul>
              <li v-for="upload_file in upload_files">@{{ upload_file.name }} @{{ upload_file.lastModified }}
              </li>
            </ul>
          </div>
          <div>
            <ul class="tumbnail-ul">
              <li v-for="(image,index) in images" class="tumbnail-li">
                <div class="delete-mark" @click="delete_file(index)">×</div>
                <img v-bind:src="image" class="tumbnail-image">
              </li>
            </ul>
          </div>
        </div>
      

        <script>
          const uploader = new Vue({
            el: "#uploader",
            data: {
              isEnter: false,
              files: [],
              upload_files: [],
              // files_path: [],
              images: []
            },
            methods: {
              upload:function(){
                // alert("hoges");
                console.log(this.upload_files);
                this.upload_files.forEach(file => {
                  let form = new FormData()
                  form.append('file', file)
                  axios.post('/save', form).then(response => {
                    console.log(response.data)
                  }).catch(error => {
                    console.log(error)
                  })
                })
              },
              dragEnter() {
                this.isEnter = true;
                // console.log('Enter Drop Area');
              },
              dragLeave() {
                this.isEnter = false;
              },
              // dragOver() {
              //   console.log('DragOver')
              // },
              dropFile() {
                /* file set */
                this.files = [...event.dataTransfer.files];
                /* push array */
                for (let n = 0; n < this.files.length; ++n) {
                  this.upload_files.push(this.files[n]);
                }
                /* display thumbnail */
                for (let i = 0; i < this.files.length; ++i) {
                  const reader = new FileReader()
                  reader.onload = () => {
                    this.images.push(reader.result)
                  }
                  reader.readAsDataURL(this.files[i])
                }
                /* ajax */
                // this.upload_files.forEach(file => {
                //   let form = new FormData()
                //   form.append('file', file)
                //   axios.post('/save', form).then(response => {
                //     console.log(response.data)
                //   }).catch(error => {
                //     console.log(error)
                //   })
                // })


                this.isEnter = false;
              },
              delete_file:function(index){
                console.log(index);
                this.upload_files.splice(index, 1)
                this.images.splice(index, 1)
              }
            }
            // console.log(files);
          })
          
        </script>
      </div><!-- co-uploader -->


      
    </div>
  </div>
</div>
@endsection