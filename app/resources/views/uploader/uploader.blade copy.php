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
        
      

        <div id="uploader" class="uploader">
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

          <button @click="test()" type="button" class="btn btn-primary mt30">upload</button>

          <div>
            <!-- <ul>
              <li v-for="file in files">@{{ file.name }} @{{ file.lastModified }}</li>
            </ul> -->
            <ul>
              <li v-for="upload_file in upload_files">@{{ upload_file.name }} @{{ upload_file.lastModified }}
              </li>
            </ul>
          </div>
          <div>
            <ul class="tumbnail-ul">
              <li v-for="image in images" class="tumbnail-li"><img v-bind:src="image" class="tumbnail-image"></li>
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
              test:function(){
                // alert("hoges");
                console.log(this.upload_files);
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
                /* 画像ファイルかどうか検証 */

                this.files = [...event.dataTransfer.files];
                // this.upload_files.push([...event.dataTransfer.files]);

                for (let n = 0; n < this.files.length; ++n) {
                  // console.log(this.files[n]);
                  this.upload_files.push(this.files[n]);
                }

                this.isEnter = false;
                console.log(this.upload_files);

                /* サムネイル表示 */
                for (let i = 0; i < this.files.length; ++i) {
                const reader = new FileReader()
                reader.onload = () => {
                  this.images.push(reader.result)
                }
                reader.readAsDataURL(this.files[i])
                // console.log(this.images);
                }

                // for (const path of this.files_path) {
                //   const reader = new FileReader()
                //   // console.log(path);
                //   reader.onload = () => {
                //   this.images.push(reader.result)
                //   }
                //   reader.readAsDataURL(this.files_path[0])
                // }
                // console.log(reader);

                this.isEnter = false;
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