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
            :class="{enter: isEnter}"> 
              ファイルアップロード
          </div>

          <button v-show="upload_files.length" @click="upload()" type="button" class="btn btn-primary mt30">upload</button>

          <div>
            <ul>
              <li v-for="text in message">
                @{{ text }}
              </li>
            </ul>
            <ul>
              <li v-for="file in upload_files">@{{ file.name }} @{{ file.lastModified }}</li>
            </ul>
            <ul>
              <!-- <li v-for="upload_file in upload_files">@{{ upload_file.name }} @{{ upload_file.lastModified }}
              </li> -->
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
              file: null,
              files: [],
              upload_files: [],
              images: [],
              message: []
            },
            methods: {
              upload:function(){
                // console.log(this.upload_files);
                this.images = [];
                this.message = [];
                this.upload_files.forEach(file => {
                  let form = new FormData()
                  form.append('file', file)
                  axios.post('/save', form).then(response => {
                    // for (let i = 0; i < response.length; ++i) {
                    //   consoloe.log(response.data);
                    // }
                    // console.log(response.data);
                    console.log(response.status);
                    if (response.status == '200') {
                      this.message = ['アップロードが完了しました。'];
                      this.files = [];
                      this.upload_files = [];
                      this.images = [];
                    }
                    console.log(this.message);
                  }).catch(error => {
                    this.message = [];
                    console.log(error.response.status);
                    console.log(error.response.statusText);
                    console.log(error);
                    if (error.response.status == '422') {
                      this.message = ['送信エラーが発生しました。最初からやり直してください。'];
                    }
                    
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
                this.files = [];
                this.images = [];
                this.message = [];
                this.files = [...event.dataTransfer.files];
                /* push array */
                for (let n = 0; n < this.files.length; ++n) {
                  // console.log(this.files[n].type);
                  if (
                    this.files[n].type == 'image/jpeg' ||
                    this.files[n].type == 'image/png' ||
                    this.files[n].type == 'image/gif'
                  ) {
                    this.upload_files.push(this.files[n]);
                  } else {
                    this.message.push("アプロードできないフォーマットです。");
                  }
                }

                /* display thumbnail */
                for (let i = 0; i < this.upload_files.length; ++i) {
                  const reader = new FileReader()
                  reader.onload = () => {
                    this.images.push(reader.result)
                  }
                  reader.readAsDataURL(this.upload_files[i])
                }


                
                // this.files = [...event.dataTransfer.files];
                /* push array */
                // for (let n = 0; n < this.files.length; ++n) {
                //   console.log(this.files[n].type);
                //   if (this.files[n].type == 'image/jpeg') {
                //     this.upload_files.push(this.files[n]);
                //   } else {
                //     this.message.push("アプロードできないフォーマットです。");
                //   }
                // }
                /* display thumbnail */
                // for (let i = 0; i < this.upload_files.length; ++i) {
                //   const reader = new FileReader()
                //   reader.onload = () => {
                //     this.images.push(reader.result)
                //   }
                //   reader.readAsDataURL(this.upload_files[i])
                // }
                this.isEnter = false;
              },
              delete_file:function(index){
                console.log(index);
                this.files.splice(index, 1)
                this.upload_files.splice(index, 1)
                this.images.splice(index, 1)
              }
            }
          }) 
        </script>
      </div><!-- co-uploader -->


      
    </div>
  </div>
</div>
@endsection