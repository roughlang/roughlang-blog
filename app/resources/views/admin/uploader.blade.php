@extends('layouts.app')

@section('title', 'Uploader')

@section('content_block')
<div class="container lw-contents-block admin mt100">
  <div class="row mb100">
    <div class="col-sm-3">
      <ul class="admin-menu">
        <li><a href="{{ route('adminroot') }}">Admin top</a></li>
        <li><a href="{{ route('uploader') }}">Image uploader</a></li>
      </ul>
    </div>
    <div class="col-sm-9">
      <h3 class="mb30">Admin</h3>
      <h4 class="mb20">Uploader Drag & Drop</h4>
      <p>Storageに画像アップロードします。</p>
      <div class="co-uploader" id="co-uploader">
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
              <li v-for="file in upload_files">@{{ file.name }}</li>
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
                  form.append('files', file)
                  axios.post('/save', form).then(response => {
                    // setTimeout( function() {
                    //   console.log(this.upload_files[i].name);
                    // }, 10000 );
                    // for (let i = 0; i < response.length; ++i) {
                    //   consoloe.log('http-status:' + response.status);
                    // }
                    // console.log(response.data);
                    // console.log(response.status);
                    
                    for (let i = 0; i < this.upload_files.length; ++i) {

                      // console.log(this.upload_files[i].name);
                      if (this.upload_files[i].name == response.data) {
                        // console.log(this.upload_files[i].name + 'OK!');
                        this.message.push(this.upload_files[i].name + ' アップロードが完了しました。');
                        break;
                      } else {
                        // console.log(this.upload_files[i].name + 'Failer!');
                        this.message.push(this.upload_files[i].name + ' アップロードが失敗しました。');
                      }
                    }


                    if (response.status == '200') {
                      // this.message = ['アップロードが完了しました。'];
                      this.files = [];
                      this.upload_files = [];
                      this.images = [];
                    }
                    console.log(this.message);
                  }).catch(error => {
                    // this.message = [];
                    // console.log(error.response.status);
                    // console.log(error.response.statusText);
                    // console.log('error:'+error);
                    if (error.response.status == '422') {
                      // this.message = ['送信エラーが発生しました。最初からやり直してください。'];
                      this.message.push('一部送信エラーが発生しました。');
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
                  // console.log(this.files[n].size);
                  // console.log(this.files[n]);
                  if (
                    /* image format validation */
                    this.files[n].type == 'image/jpeg' ||
                    this.files[n].type == 'image/png' ||
                    this.files[n].type == 'image/gif' ||
                    this.files[n].size > 500
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

      </div>
    </div>
  </div>
</div>
@endsection